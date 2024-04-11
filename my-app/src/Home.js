import * as React from 'react';
import { styled, useTheme } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const Root = styled('div')(({ theme }) => ({
  color: 'black',
  backgroundColor: 'white',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5), // Adjust this value as needed
    width: `calc(100% - ${theme.spacing(5)}px)`, // Adjust this value as needed
  },
}));

const Welcome = styled('h1')({
  textAlign: 'center',
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

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
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
  );
};

export default Home;