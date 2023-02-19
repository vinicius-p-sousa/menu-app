import React from 'react';

import { Container, LoginButton } from './style';
import SearchBar from '../SearchBar/SearchBar';
import ThemeSwitcher from '../ThemeSwitcher';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const RedirectLoginPage = async () => {
    return navigate('/login');
  };

  return (
    <Container>
      <SearchBar />
      <LoginButton onClick={RedirectLoginPage} type="button">
        Entrar
      </LoginButton>
      <ThemeSwitcher />
    </Container>
  );
}

export default Header;
