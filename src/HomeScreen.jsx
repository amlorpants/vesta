import * as React from 'react';
import './home-screen.css';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import Crop75Icon from '@mui/icons-material/Crop75';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import hero from './images/hero.png';
import pink from './images/pink.png';
import green from './images/green.png';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { format } from 'date-fns';

let time = format(new Date(), 'h:mm');
let day = format(new Date(), 'EEEE');
let date = format(new Date(), 'd');

const StatusBar = () => {
  return (
    <Box
      className='status-bar'
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Box sx={{ marginLeft: '30px' }}>
        <Typography
          fontFamily={'Roboto'}
          fontWeight='500'
          variant='subtitle2'
          gutterBottom
        >
          {time}
        </Typography>
      </Box>
      <Box sx={{ marginRight: '25px' }}>
        <SignalCellularAltIcon sx={{ fontSize: 16 }} />
        <WifiIcon sx={{ fontSize: 16 }} />
        <Crop75Icon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
  );
};

const HeroCard = () => {
  return (
    <Box
      className='hero-card'
      sx={{
        marginLeft: 'auto',
        width: '360px',
        marginTop: '22px',
      }}
    >
      <Box
        sx={{
          height: '100px',
          backgroundColor: '#D8E5B1',
          marginTop: '17px',
          borderRadius: '24px 0 0 0',
          overflow: 'hidden',
        }}
        className='hero-card-header'
      >
        <Box
          sx={{
            width: '60px',
            height: '80px',
            marginLeft: '15px',
            marginTop: '10px',
            display: 'inline-block',
          }}
          className='date-text'
        >
          <Typography textAlign={'center'} fontFamily={'DM Serif Display'}>
            {day}
          </Typography>
          <Typography textAlign={'center'} fontFamily='roboto' variant='h4'>
            {date}
          </Typography>
        </Box>
        <Box
          className='recipe-text'
          sx={{
            width: '280px',
            marginTop: '-80px',
            marginLeft: '90px',
          }}
        >
          <Typography
            textAlign={'left'}
            fontFamily='roboto'
            variant='subtitle1'
            lineHeight={'1.1'}
            fontWeight='500'
          >
            Asparagus Salad with Shaved Parmesan
          </Typography>
          <Typography
            textAlign={'left'}
            fontFamily='roboto'
            variant='subtitle1'
          >
            <AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />
            {`  25 Minutes`}
          </Typography>
        </Box>
      </Box>
      <img
        src={hero}
        style={{
          width: '360px',
          borderRadius: '24px 0 0 0',
          marginTop: '-23px',
        }}
      />
    </Box>
  );
};

const ContentArea = () => {
  return (
    <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ paddingLeft: '16px' }}>
            <Paper
              sx={{
                height: '124px',
                width: '165px',
                overflow: 'hidden',
                backgroundImage: `url(${pink})`,
                backgroundSize: 'cover',
              }}
            >
              {' '}
              <Typography
                variant='h5'
                gutterBottom
                fontFamily={'DM Serif Display'}
                sx={{
                  backgroundColor: 'rgba(255, 249, 249, .59)',
                  marginTop: '42px',
                }}
              >
                My Inventory
              </Typography>
            </Paper>
            <Paper
              sx={{
                height: '124px',
                width: '165px',
                marginTop: '14px',
                overflow: 'hidden',
                backgroundImage: `url(${green})`,
                backgroundSize: 'cover',
              }}
            >
              <Typography
                variant='h5'
                gutterBottom
                fontFamily={'DM Serif Display'}
                sx={{
                  backgroundColor: 'rgba(255, 249, 249, .59)',
                  marginTop: '42px',
                }}
              >
                Meal Planning
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ paddingRight: '16px' }}>
            <Paper sx={{ backgroundColor: '#FFF9F9', height: '262px' }}>
              <Typography
                variant='h6'
                sx={{ paddingTop: '8px' }}
                fontFamily={'DM Serif Display'}
                gutterBottom
              >
                Shopping List
              </Typography>
              <Divider
                sx={{ borderColor: 'rgba(0, 0, 0, 0.05)', marginBottom: '3px' }}
              />
              <Typography
                variant='body1'
                fontSize={14}
                align='left'
                fontFamily={'Inter'}
                sx={{
                  marginLeft: '14px',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
                gutterBottom
              >
                Almond Cookie Mix
              </Typography>
              <Divider
                sx={{ borderColor: 'rgba(0, 0, 0, 0.05)', marginBottom: '3px' }}
              />
              <Typography
                variant='body1'
                fontSize={14}
                align='left'
                fontFamily={'Inter'}
                sx={{
                  marginLeft: '14px',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
                gutterBottom
              >
                Animal Crackers
              </Typography>
              <Divider
                sx={{ borderColor: 'rgba(0, 0, 0, 0.05)', marginBottom: '3px' }}
              />
              <Typography
                variant='body1'
                fontSize={14}
                align='left'
                fontFamily={'Inter'}
                sx={{
                  marginLeft: '14px',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
                gutterBottom
              >
                Apples
              </Typography>
              <Divider
                sx={{ borderColor: 'rgba(0, 0, 0, 0.05)', marginBottom: '3px' }}
              />
              <Typography
                variant='body1'
                fontSize={14}
                align='left'
                fontFamily={'Inter'}
                sx={{
                  marginLeft: '14px',
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
                gutterBottom
              >
                Asperagus
              </Typography>
              <Divider
                sx={{ borderColor: 'rgba(0, 0, 0, 0.05)', marginBottom: '3px' }}
              />
              <IconButton
                size='large'
                sx={{
                  marginTop: '40px',
                  marginLeft: '120px',
                  color: 'rgba(0, 0, 0, 0.87)',
                }}
              >
                <ArrowCircleRightOutlinedIcon fontSize='10px' />
              </IconButton>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ExploreRecipes = () => {
  return (
    <Box
      sx={{
        height: '60px',
        backgroundColor: '#D8E5B1',
        marginTop: '32px',
        borderRadius: '24px 0 0 0',
        overflow: 'hidden',
        marginLeft: 'auto',
        width: '360px',
      }}
    >
      <Typography
        variant='h6'
        sx={{ marginTop: '14px', marginLeft: '20px' }}
        fontFamily={'DM Serif Display'}
        gutterBottom
      >
        Explore Recipes
      </Typography>
    </Box>
  );
};

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  const settings = {
    backgroundColor: '#1C6733',
    color: '#fff',
    selected: {
      color: '#fff',
    },
  };

  return (
    <Box className='bottom-nav' sx={{ marginTop: '0px' }}>
      <Box sx={{ margin: 'auto' }}>
        <BottomNavigation
          className='nav-container'
          sx={{ height: '65px' }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={settings}
            label='Plan'
            icon={<RestaurantIcon />}
          />
          <BottomNavigationAction
            sx={settings}
            label='Recipes'
            icon={<FastfoodIcon />}
          />
          <BottomNavigationAction
            sx={settings}
            label='Home'
            icon={<HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={settings}
            label='Inventory'
            icon={<ArticleOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={settings}
            label='Groceries'
            icon={<LocalGroceryStoreOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default function HomeScreen() {
  return (
    <Box
      className='primary-container'
      sx={{ paddingTop: '10px', height: '100%' }}
    >
      <StatusBar />
      <HeroCard />
      <ContentArea />
      <ExploreRecipes />
      <BottomNav />
    </Box>
  );
}
