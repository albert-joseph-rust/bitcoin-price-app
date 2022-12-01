import React from 'react';
import { Box } from '@mui/material';
import Main from './Main';

export default function HomePage() {

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#1c2127' }}>
      <Main />
    </Box>
  );
}