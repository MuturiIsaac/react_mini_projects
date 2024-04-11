import * as React from 'react';
import { styled, useTheme } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
    width: `calc(100% - ${theme.spacing(10)}px)`,
  },
}));

const Welcome = styled('h1')({
  textAlign: 'left',
});

const Emoji = styled('span')({
  fontSize: '1.5em',
});

const Circle = styled(Avatar)({
  width: '100px',
  height: '100px',
  margin: '0 auto',
});

const Paragraph = styled('p')({
  textAlign: 'center',
});

// ...




const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const customTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );


  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <AppBar position="static" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <TextField label="Search" variant="outlined" size="small" />
          </Toolbar>
        </AppBar>
        <Root>
        <Grid container spacing={isSmallScreen ? 2 : 3}>
          <Grid item xs={12}>
            <Welcome>Welcome <Emoji>👋</Emoji></Welcome>
          </Grid>
          <Grid item xs={12}>
            <Circle alt="Avatar" src="/path/to/your/avatar.jpg" />
          </Grid>
          <Grid item xs={12}>
            <Paragraph>This is a paragraph about the person.</Paragraph>
          </Grid>
          <Grid item xs={12}>
            <Paragraph>This is another paragraph about the person.</Paragraph>
          </Grid>
        </Grid>
        </Root>
      </div>

    </ThemeProvider>
    
  );
};

export default Home;