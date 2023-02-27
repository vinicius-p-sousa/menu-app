import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Heading, LoginButton } from './style';
import SearchBar from '../SearchBar/SearchBar';
import ThemeSwitcher from '../ThemeSwitcher';

function Header() {
  const navigate = useNavigate();

  const RedirectLoginPage = async () => navigate('/login');

  return (
    <Heading>
      <SearchBar />
      <LoginButton onClick={RedirectLoginPage} type="button">
        Entrar
      </LoginButton>
      <ThemeSwitcher />
    </Heading>
  );
}

export default Header;
