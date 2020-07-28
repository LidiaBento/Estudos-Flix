import React from 'react';
import Logo from '../../assets/img/logo.png';
import '../../components/Menu/index.css';
import Button from '../Button';
function Menu (){
    return (
     <nav className="Menu">
         <a href="/">
         <img className="Logo" src={Logo} alt="Logo"/>
         </a>

         <Button className="ButtonLink" href="/">
             Novo Video
         </Button>
     </nav>
    );
}

export default Menu;