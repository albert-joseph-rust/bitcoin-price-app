import React from 'react';
import {
  Stack,
  Box as MuiBox,
  Grid,
  Typography,
  Slider as MuiSlider,
  styled,
  Tooltip,
  TextField as MuiTextField
} from '@mui/material';

const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: '#1c2127',
  borderRadius: '4px'
}));
const Slider = styled(MuiSlider)(({ theme }) => ({
  width: '90%',
  paddingTop: '3px',
  '& .MuiSlider-rail': {
    color: '#000000',
    height: '6px',
    top: '55%',
  },
  '& .MuiSlider-track': {
    height: '4px',
    color: '#f8bf60',
  },
  '& .MuiSlider-thumbColorPrimary': {
    border: 'none',
    outline: 'none',
    background: '#f8bf60',
    borderRadius: '2px',
    width: '44px',
    height: '22px',
  },
  '& .MuiSlider-mark': {
    border: 'none',
    outline: 'none',
    background: '#1b2026',
    borderRadius: '2px',
    width: '5%',
    height: '8px',
    borderLeft: '2px solid #2c3137',
    borderRight: '2px solid #2c3137',
  },
  '& .MuiSlider-markActive': {
    border: 'none',
    outline: 'none',
    width: '5%',
    height: '8px',
    background: '#f8bf60',
    borderLeft: '2px solid #a6824a',
    borderRight: '2px solid #a6824a'
  }
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: '#1c2127',
  fontFamily: 'Montserrat',
  borderRadius: '5px',
  '& .MuiOutlinedInput-input': {
    padding: '1px 1px',
    fontSize: 18,
    textAlign: 'right',

  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none'
  }
}));

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function RightSlider({ currentPrice, price, setPrice }) {
  return (
    <Stack px={0.5} py={1} borderRadius={1} spacing={0.5} className="bg-dark">
      {/* <Button sx={{ fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Base</Button>
      <Button sx={{ fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Bonus</Button> */}

      <Box
        width="100%"
      >
        <Grid container columns={9} spacing={0.5}>
          <Grid item xs={9} md={9}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  color="white"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                  fontWeight={700}
                  pl={1}
                  fontFamily="'Montserrat', sans-serif"
                >
                  Bitcoin Price
                </Typography>

                <TextField
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Stack
        direction="row" 
        justifyContent="center"
        py={0.5}
      >
        <Slider
          valueLabelDisplay="auto"
          components={{
            ValueLabel: ValueLabelComponent,
          }}
          aria-label="custom thumb label"
          value={price}
          min={currentPrice}
          max={22814092}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Stack>
    </Stack>
  );
}