import { Box } from '@mui/material';
import HomeScreen from './HomeScreen';
import './App.css';

function App() {
  return (
    <Box
      sx={{
        width: 'auto',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}
    >
      <div className='marvel-device iphone-x'>
        <div className='notch'>
          <div className='camera'></div>
          <div className='speaker'></div>
        </div>
        <div className='top-bar'></div>
        <div className='sleep'></div>
        <div className='bottom-bar'></div>
        <div className='volume'></div>
        <div className='overflow'>
          <div className='shadow shadow--tr'></div>
          <div className='shadow shadow--tl'></div>
          <div className='shadow shadow--br'></div>
          <div className='shadow shadow--bl'></div>
        </div>
        <div className='inner-shadow'></div>
        <div className='screen'>
            <HomeScreen />
        </div>
      </div>
    </Box>
  );
}

export default App;
