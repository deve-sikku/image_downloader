import './App.css';
import Axios from './hook/Axios';
import Image from './Components/Image';
import Banner from './Components/Banner';
import { createContext } from 'react';


export const ImageContext = createContext()


function App() {
  const { response, loding, error, fetchdata } = Axios(`search/photos?page=1&query=mount&client_id=eIDpLnypramsKBxtn7VCY7yLTJHte9_3V_fisLxjnAo`);

  const value = {
    response,
    loding,
    error,
    fetchdata
  }

  return (
    <ImageContext.Provider value={value}>
      <Banner />
      <Image />
    </ImageContext.Provider>
  );
}

export default App;



