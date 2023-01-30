import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = localStorage.getItem('theme') || 'light';

const config = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const notify = {
  error: (msg) => {
    toast.error(msg, config);
  },
};

export default notify;
