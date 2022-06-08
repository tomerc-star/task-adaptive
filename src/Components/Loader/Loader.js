import '../Loader/Loader.css';
import { CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        <div className='loading-div'>
            <div> 
                Loading Albums...
            </div>
            <div>
                <CircularProgress/>
            </div>
        </div>
          )
  }
  
  export default Loader;
  