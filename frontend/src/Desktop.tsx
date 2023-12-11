// Desktop.tsx
import React from 'react';
import { Container } from '@mui/material';
import NavBar from './Components/NavBar';
import Routes from './Routes';

const Desktop: React.FC = () => (
  <Container>
    <NavBar />
    <Routes />
  </Container>
);

export default Desktop;
