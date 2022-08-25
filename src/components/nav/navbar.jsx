import React, { Component } from 'react'; 
import { Link , NavLink} from 'react-router-dom'; 
import  "./navbar.scss"; 
import  LogoR from '../../assets/graphics/Logo/MainLogo.svg';




class Navbar extends Component {
    state = {  } 
    render() { 
        return (
        <div className='nav-bar'> 

   
    <Link className='logo' to="/"> 
    <img className="main-logo" src={LogoR} alt="logo"  />
    </Link>
     

<nav> 

    <NavLink exact='true' activeClassName="active" to="/"> 
    <h1> Home </h1>
    </NavLink>

    <NavLink 
    exact='true' 
    activeClassName="active" 
    className="work-link" 
    to="/work"> 
     <h1> Work</h1>
    </NavLink>


    <NavLink 
        exact='true' 
        activeClassName="active"  
        className= "about-link" to="/about"> 
        <h1> About</h1>
    </NavLink>

    <NavLink 
        exact='true' 
        activeClassName="active"  
        className= "contact-link" to="/contact"> 
        <h1> Contact</h1>
    </NavLink>

</nav>
    


   
       
       
       
    



       
    </div>);
    }
}
 
export default Navbar