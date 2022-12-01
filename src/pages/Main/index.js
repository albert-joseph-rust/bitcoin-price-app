import React, { useEffect, useState } from 'react';
import { Box as MuiBox, Button as MuiButton, Stack, Grid, styled, Typography, TextField as MuiTextField } from '@mui/material';
import Slider from './Slider';
import api from '../../utils/api';

const MainButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#f8bf60',
  boxShadow: '0 6px 0 #997a49',
  '&:hover': {
    backgroundColor: '#ab884d',
    boxShadow: '0 6px 0 #725c38',
    border: 'none'
  },
  border: 'none'
}));
const BlackButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#171c22',
  '&:hover': {
    backgroundColor: '#000000',
  }
}));

const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: '#1c2127',
  borderRadius: '4px'
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: '#1c2127',
  fontFamily: 'Montserrat',
  borderRadius: '5px',
  '& .MuiOutlinedInput-input': {
    padding: '1px 1px',
    fontSize: 18,
    textAlign: 'left',

  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none'
  }
}));

export default function Main() {

  const [price, setPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    fetch("https://blockchain.info/ticker")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.USD.last);
        setPrice(data.USD.last)
        setCurrentPrice(data.USD.last)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <Stack spacing={0.5} justifyContent="center" sx={{ height: '100vh' }}>
      <Box
        width="40%"
        margin="auto"
      >

        <Slider currentPrice={currentPrice} price={price} setPrice={setPrice} />

        <Box
          mt={2}
          sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}
        >
          <Typography
            backgroundColor="dimgrey"
            color="#ffffff"
            textTransform="uppercase"
            fontSize={14}
            fontWeight={600}
            borderRadius={2}
            py={1}
            sx={{ display: 'flex', cursor: 'pointer', justifyContent: 'center' }}
            width="97%"
          >
            commit price
          </Typography>
        </Box>

        <Box
          width="100%"
          my={1}
        >
          <Grid container columns={9} spacing={0.5}>
            <Grid>
              <Box bgcolor="black" borderRadius={1} p={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography
                    color="white"
                    sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                    fontWeight={700}
                    px={1}
                    fontFamily="'Montserrat', sans-serif"
                  >
                    Wallet Address :
                  </Typography>

                  <TextField
                    type="text"
                  />

                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          width="100%"
          my={1}
        >
          <Grid container columns={9} spacing={0.5}>
            <Grid>
              <Box bgcolor="black" borderRadius={1} p={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography
                    color="white"
                    sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                    fontWeight={700}
                    px={1}
                    fontFamily="'Montserrat', sans-serif"
                  >
                    Signature :
                  </Typography>

                  <TextField
                    type="text"
                  />

                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          mt={2}
          sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
        >
          <Typography
            backgroundColor="dimgrey"
            color="#ffffff"
            textTransform="uppercase"
            fontSize={14}
            fontWeight={600}
            borderRadius={2}
            py={1}
            sx={{ display: 'flex', cursor: 'pointer', justifyContent: 'center' }}
            width="48%"
          >
            verify price
          </Typography>
          <Typography
            backgroundColor="dimgrey"
            color="#ffffff"
            textTransform="uppercase"
            fontSize={14}
            fontWeight={600}
            borderRadius={2}
            py={1}
            sx={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
            width="48%"
          >
            save
          </Typography>
        </Box>
      </Box>
    </Stack >
  );
}