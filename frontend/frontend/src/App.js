import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png';
import { useState } from 'react';

import Styles from './App.module.css';
import { getPosts } from './actions/posts'

const App = () => {
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(null);

  useEffect(()=>{
    dispatch(getPosts());
  }, [])

  return (
    <div className={Styles.body}>
      <div className={Styles.NavBar}>
        <h2>Memories</h2>
        <img src={memories} alt='icon' />
      </div>

      <div className={Styles.Content}>
        <Posts setCurrentID={setCurrentID} />
        <Form currentID={currentID} setCurrentID={setCurrentID} />
      </div>
    </div>
  )
}

export default App;
