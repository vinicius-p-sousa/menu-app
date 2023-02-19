import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAPI from '../../utils/requestAPI';

export default function Admin() {
  const [result, setResult] = useState('não autorizado');
  const navigate = useNavigate();

  const verifyToken = async () => {
    const token = sessionStorage.getItem('token');
    if (token === null) return navigate('/login');

    const response = await requestAPI('/token', 'POST', { token });
    if (response.error) return navigate('/login');
    return setResult(response.data);
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return <div>{result}</div>;
}
