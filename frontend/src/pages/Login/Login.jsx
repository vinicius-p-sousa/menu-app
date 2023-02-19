import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FiEyeOff, FiEye } from 'react-icons/fi';

import { Container, Div, Form, PasswordDiv, Header } from './style';
import requestAPI from '../../utils/requestAPI';
import notify from '../../utils/notify';

import ThemeSwitcher from '../../components/ThemeSwitcher';
import Loading from '../../components/Loading';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setLoginInfos({
      ...loginInfos,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const requestLogin = async () => {
    if (loginInfos.email.length <= 4) {
      return notify.error('email invalido');
    }

    if (loginInfos.password.length < 7) {
      return notify.error('senha deve ter no mínimo 8 caracteres');
    }
    try {
      setLoading(true);
      let response = await requestAPI('/admin/login', 'POST', {
        email: loginInfos.email,
        password: loginInfos.password,
      });

      if (response.error === 'não existe Admins') {
        response = await requestAPI('/admin', 'POST', {
          email: loginInfos.email,
          password: loginInfos.password,
          // eslint-disable-next-line no-alert
          name: prompt('Digite o nome do novo admin'),
        });
      }

      if (response.error && response.error !== 'não existe Admins') {
        return notify.error(response.error);
      }

      sessionStorage.setItem('token', response.token);
      return navigate('/admin');
    } catch (error) {
      setLoading(false);
      return notify.error('Não foi possível fazer login');
    } finally {
      setLoading(false);
    }
  };

  const submitLogin = (event) => {
    event.preventDefault();
    requestLogin();
  };

  function handlePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <>
      {loading === true ? <Loading /> : null}
      <Header>
        <ThemeSwitcher />
      </Header>
      <Container>
        <ToastContainer />
        <Div>
          <h1>Olá novamente 😁</h1>
          <Form>
            <div>
              <label htmlFor="email">
                email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@email.com"
                  value={loginInfos.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                senha
                <PasswordDiv>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={loginInfos.password}
                    placeholder="senha impossível"
                    onChange={handleChange}
                  />
                  <div onClick={handlePasswordVisibility}>
                    {passwordVisible === false ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                  </div>
                </PasswordDiv>
              </label>
            </div>
            <button type="button" onClick={submitLogin}>
              ENTRE
            </button>
          </Form>
        </Div>
      </Container>
    </>
  );
}
