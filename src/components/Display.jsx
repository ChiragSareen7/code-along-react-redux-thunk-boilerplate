import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { userData, getStatus } from '../redux/Action';
import reducer from '../redux/Reducer';

const store = createStore(reducer, applyMiddleware(thunk));

const fetchData = () => {
  return function (dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const user = response.data;
        dispatch(userData(user));
        console.log(user);
      })
      .catch(error => {
        dispatch(getStatus(error.message));
      });
  };
};

store.subscribe(() => console.log(store.getState()));

const Display = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState().user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='container'>
      <button className="Button" onClick={() => store.dispatch(fetchData())}>Data</button>
      <div>
        {state && state.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <span>{item.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
