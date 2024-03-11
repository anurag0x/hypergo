import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div  className="bg-white col-black" >
      <ToastContainer />
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
