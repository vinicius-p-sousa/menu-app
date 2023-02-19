import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes, error } from './routes';

import { ThemeContext, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './css/GlobalStyle';
import { themes } from './css/themes';

const router = createBrowserRouter(routes);

const App = () => {
  const defaultTheme = localStorage.getItem('theme') || 'light';
  const [themeName, setThemeName] = useState(defaultTheme);
  const currentTheme = themes[themeName];

  const toggleTheme = () => {
    if (themeName === 'light') {
      setThemeName('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setThemeName('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themeName }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <RouterProvider router={router} errorElement={error} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
