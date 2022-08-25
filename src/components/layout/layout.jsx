import { Outlet } from 'react-router-dom';
//import { Outlet } from 'react-router-dom';
import React, { Component } from 'react';
import './layout.scss'; 

import Navbar from '../nav/navbar'; 

class Layout extends Component {
    state = {  }

    render() {

        console.log(window.location);

        return (
        <div className="App"> 
       
        
        <Navbar />

        <div className='page'> 
            
        
            <span className="tags top-tags"> &lt; body &gt; </span>
     
        <Outlet />
        

       <span className='tags bottom-tags'>
        &lt;/body &gt;
            
        <br /> 

        <span className="bottom-tag-html">&lt; /html &gt; </span>
            
        </span>

         </div>
        </div>       
        );
    }
}
 
export default Layout;
