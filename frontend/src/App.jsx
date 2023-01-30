import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

import { ThemeContext, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './css/GlobalStyle';
import { themes } from './css/themes';

const router = createBrowserRouter(routes);

const App = () => {
  const [themeName, setThemeName] = useState('light');
  const currentTheme = themes[themeName];

  const toggleTheme = () => {
    themeName === 'light' ? setThemeName('dark') : setThemeName('light');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
