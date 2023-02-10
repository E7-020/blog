import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { ReadMore } from './components/ReadMore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uploadPosts } from './redux/reducers/postsReducer';

import { Categories } from './components/Categories';
import { RecommendReading } from './components/RecommendReading';




function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uploadPosts());
  }, []);

  return (
    <div className="App">
    <NavBar/>
    

    <Routes>
      <Route path='/'element={<Main/>} />
      <Route path='/ReadMore/:_id' element={<ReadMore/>}/>
      <Route path='/Categories/:id' element={<Categories/>}/>
      <Route path='/RecommendReading/:id' element={<RecommendReading/>} />
    </Routes>
    </div>
  );
}

export default App;
