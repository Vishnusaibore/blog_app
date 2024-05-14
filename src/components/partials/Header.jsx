import * as React from 'react';
import {Box,Toolbar,Button,Link} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { createTheme,ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      headerBackground:'#000',
      light: '#33c9dc',
      main: '#18ffff',
      dark: '#002884',
      homeicon:"#00ffff",
      contrastText: '#fff',
    },
    secondary: {
      TitleColor:'#ffc107',
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      linkscolor:'#0099cc',
    },
  },
});

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Sign Up', url: '/signup' },
  { title: 'Blogs', url: '/posts' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
];

function Header() {

  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
     <Box sx={{bgcolor:'primary.headerBackground'}}>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Link href='/' color="primary.homeicon"><HomeOutlinedIcon /></Link>
        <h5>Anime Blogger</h5>
        <Button variant='outlined' href='/login' sx={{marginRight:1}}>Sign In</Button>
        <Button variant='outlined' href="/compose">Create Your Blog</Button>
      </Toolbar>
      </Box>
      <Box>
      <Toolbar
        component="nav"
        variant="dense"
      >
        {sections.map((section) => (
          <Link
            underline='hover'
            color="secondary.linskcolor"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      </Box>
    </React.Fragment>
    </ThemeProvider>
  );
}
export default Header;