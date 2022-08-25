import React, { Component } from 'react';
import './construction.scss'; 
import Gear from  '../gear/gear'; 
// import { faHome } from "@fortawesome/free-solid-svg-icons";


class Construction extends Component {
    state = {  } 
    render() { 

        return (<div className='construction-page'> 
        

    
        <div className='container'> 
        <Gear /> 
        <br /> 
        <h4> Page is Under Construction</h4>
        <h1 className='h1-construction'> The Website is currently under Construction</h1>
        <p>  
         First, I would like to say thank you for stopping by! I'm  currently working hard  <br /> 
         to upgrade my portfolio and self branding to get back to the "post-pandemic" world <br /> 
         in style if you you would like to connect before the relaunch of my portfolio, please  <br /> 
         please stop by later to check the out my portfolio.  feel free to reach me  < br /> 
         at  raul.hajiyev95@gmail.com 
        







        </p>
            
        </div> 
      

        </div>);
    }
}
 
export default Construction;