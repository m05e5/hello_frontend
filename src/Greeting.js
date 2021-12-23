import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './redux/hello';

const Greeting = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.myGreeting);
  const fetchHello = () => {
    fetch('https://hello-backend2.herokuapp.com/api/v1/greetings/random', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => {
      data.json().then((dataJson) => {
        dispatch(getGreeting(dataJson));
      });
    });
  };
  useEffect(() => {
    fetchHello();
  }, []);

  return (
    <div>
      <h1>{state.salut}</h1>
    </div>
  );
};
export default Greeting;
