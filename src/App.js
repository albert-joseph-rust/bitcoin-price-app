import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from "./Routes";
import { Provider as ReduxProvider } from 'react-redux';
import { WalletProvider } from './contexts/WalletContext';
import { store } from "./redux/store"

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <WalletProvider>
        <ReduxProvider store={store}>
          <Router>
            <Routes />
          </Router>
        </ReduxProvider>
      </WalletProvider>
    </ThemeProvider >
  );
}
