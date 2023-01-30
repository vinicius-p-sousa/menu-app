import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Container, Div, Form, Header } from './style';
import requestAPI from '../../utils/requestAPI';
import notify from '../../utils/notify';

import ThemeSwitcher from '../../components/ThemeSwitcher';

export default function Login() {
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginInfos({ ...loginInfos, [event.target.name]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    requestLogin();
  };

  const requestLogin = async () => {
    if (loginInfos.email.length <= 4) {
      return notify.error('email invalido');
    }

    if (loginInfos.password.length < 7) {
      return notify.error('senha deve ter no mínimo 8 caracteres');
    }

    let response = await requestAPI('/admin/login', 'POST', {
      email: loginInfos.email,
      password: loginInfos.password,
    });

    if (response.error === 'não existe Admins') {
      response = await requestAPI('/admin', 'POST', {
        email: loginInfos.email,
        password: loginInfos.password,
        name: prompt('Digite o nome do novo admin'),
      });
    }

    if (response.error && response.error !== 'não existe Admins') {
      return notify.error(response.error);
    }
    sessionStorage.setItem('token', response.token);

    return navigate('/admin');
  };

  return (
    <>
      <Header>
        <ThemeSwitcher />
      </Header>
      <Container>
        <ToastContainer />
        <Div>
          <h1>Olá novamente 😁</h1>
          <Form>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemple@email.com"
                value={loginInfos.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginInfos.password}
                placeholder="senha impossível"
                onChange={handleChange}
              />
            </div>
            <button onClick={submitLogin}>ENTRE</button>
          </Form>
        </Div>
      </Container>
    </>
  );
}
