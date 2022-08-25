//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Layout  from './components/layout/layout';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Work from './components/work/work';
import NotFound from './components/notFound/notFound';
import './App.scss';
import Construction from './components/construction/construction';

function App() {
  return ( 
  <> 
     <Routes>
      
       <Route path="/" element={<Layout />}> 

          
          <Route path="/home" element={<Home /> } />
          <Route path="/work" element={<Work /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />

          <Route index element={<Construction /> } />
          <Route path="/not-found" element={<NotFound /> } />
       </Route>
      
     </Routes>
  </>
    
  ) 
  
}

export default App;
