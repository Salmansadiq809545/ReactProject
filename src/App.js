
import './App.css';

import { Routes, Route } from 'react-router-dom'
import Head from './Project/Head';
import PNav from './Project/PNav';
import Login from './Project/Login';
import Signup from './Project/Signup';
import Hindi from './Project/Movies/Hindi';


import Protected from './Project/Protected';
import Kannada from './Project/Movies/Kannada';
import Tamil from './Project/Movies/Tamil';
import Telgu from './Project/Movies/Telgu';
import English from './Project/News/EnglishNews';
import HindiNews from './Project/News/HindiNews'
import KannadaNews from './Project/News/KanndaNews';
import LiveMakka from './Project/HajLive/LiveMakka';
import Song from './Project/Songs/Song';
import Pubg from './Project/PubG/Pubg';
import ContractUs from './Project/ContractUs';




function App() {
  return (
    <div className="App">
    <PNav />

      <Routes>

        <Route path='/' element={<Head />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<ContractUs />} />


        <Route path='/hindimovies' element={<Protected Component={Hindi} />} />
        <Route path='/kannadamovies' element={<Protected Component={Kannada} />} />
        <Route path='/telgu' element={<Protected Component={Telgu} />} />
        <Route path='/tamil' element={<Protected Component={Tamil} />} />
        <Route path='/english' element={<Protected Component={English} />} />
        <Route path='/hindi' element={<Protected Component={HindiNews} />} />
        <Route path='/kannada' element={<Protected Component={KannadaNews} />} />
        <Route path='/Haj' element={<Protected Component={LiveMakka} />} />
        <Route path='/pubg' element={<Protected Component={Pubg} />} />
        <Route path='/song' element={<Protected Component={Song} />} />


       

      </Routes>



    </div>
  );
}

export default App;
