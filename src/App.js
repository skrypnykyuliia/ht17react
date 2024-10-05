import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Button } from '@mui/material';
import { styled } from '@mui/system'; 

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
    },
  },
});


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
    },
  },
});


const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.primary};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      {}
      <CssBaseline />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        {}
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>

        {}
        <StyledButton variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
