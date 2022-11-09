
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/system';

function App() {
  return (
    <div >
      <Header />
      <Box style={{marginTop:54}}>
      <Home/>
      </Box>
    </div>
  );
}

export default App;
