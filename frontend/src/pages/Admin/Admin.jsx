import React, { useEffect, useState } from 'react';
import requestAPI from '../../utils/requestAPI';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [result, setResult] = useState('não autorizado');
  const navigate = useNavigate();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    const token = sessionStorage.getItem('token');
    if (token === null) return navigate('/login');

    const response = await requestAPI('/token', 'POST', { token });
    if (response.error) return navigate('/login');
    setResult(response.data);
  };
  return <div>{result}</div>;
}
