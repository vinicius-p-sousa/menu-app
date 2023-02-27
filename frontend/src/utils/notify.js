import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    fontSize: '1.8rem',
  },
};

const notify = {
  error: (msg) => {
    toast.error(msg, config);
  },
};

export default notify;
