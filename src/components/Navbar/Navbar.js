import "./Navbar.scss";
import { React, useState } from "react";
import { Link } from 'react-router-dom';



function Navbar ({ isOpen, toggleMenu }){
    
    const displayMenu = () => {
        if(isOpen) {
           return (
            <div className="menu" onClick={toggleMenu}>
                <img className="menuimg" src="exit-menu.svg"></img>
                <h6 className="menu-caption">Menu</h6>
            </div>
            )
        }
        else {
            return (
                <div className="menu" onClick={toggleMenu}>
                    <img className="menuimg" src="menu-icon.svg"></img>
                    <h6 className="menu-caption">Menu</h6>
                </div>
            )
        }
     }

    return (
        <div>
            <header className="navbar">
                <div className="navbar1">
                    <ul className="navbar-menu">
                        <a href="/"><li className="navbar-item"><p>Blackstore.fr</p></li></a>
                        <a href="/"><li className="navbar-item"><p>Carte cadeau</p></li></a>
                        <a href="https://intersport.fr/" target="_blank"><li className="navbar-item"><p>Intersport.fr</p></li></a>
                    </ul>
                </div>
                {/*<div id="menu-icon">
                    <ul className="mobile-menu">
                        <li>Mode Femme</li>
                        <li>Mode Homme</li>
                        <li>Marques</li>
                        <li>PETITS PRIX</li>
                        <li>Bons Plans</li>
                        <li>Nouveautés</li>
                        <li>Programme VIP</li>
                        <li>Connexion</li>
                        <li>Carte Cadeau</li>
                        <li>Intersport.fr</li>
                    </ul>
                </div>*/}
                <nav className="navbar2">
                    <div className="menu-logo">
                        {displayMenu()}
                        <Link className="caption" to="/"><img className="logoimg" src="logo_is.svg"></img></Link>
                        <Link className="caption" to="/"><img className="logo-responsive" src="logo-responsive.svg"></img></Link>
                    </div>
                    <span className="content">
                        <div className="search-box">
                            <input type="search" placeholder="Search" />
                        </div>
                        <img className="searchimg" src="search.png"></img>
                    </span>

                    <span className="rightside">
                        <div className="item">
                            <Link className="caption" to="/magasins"><img src="location.png"></img></Link> 
                            <Link className="caption" to="/magasins"> Magasins </Link> 
                            {/*<a><p className="caption" href="#">Magasins</p></a>*/}
                        </div>
                        <div className="item">
                            <Link className="caption" to="/login" ><img src="user.png"></img></Link>
                            <Link className="caption" to="/login" > Connexion </Link> 
                            {/*<a><p className="caption" href="/login">Connexion</p></a>*/}
                        </div>
                        <div className="item">
                            <Link className="caption" to="/panier" ><img src="panier.png"></img></Link>
                            <Link className="caption" to="/panier" > Panier </Link>
                            {/*<a><p className="caption" href="#"> Panier </p></a>*/}
                        </div>
                    </span>
                </nav>



                {isOpen && (
                <div className="menu-items">
                    <div className="menu-item">
                        <span><a href="#">Mode Femme</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="menu-item">
                        <span><a href="#">Mode Homme</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="menu-item">
                        <span><a href="#">Marques</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="menu-item">
                        <span><a href="#" className="highlight">PETITS PRIX</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="menu-item">
                        <span><a href="#" className="highlight">Bons Plans</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="menu-item">
                        <span><a href="#" className="highlight">Nouveautés</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="menu-item">
                        <span><a href="#">Programme VIP</a></span><img className="arrow-right" src="arrow-right.svg"></img>
                    </div>
                    <div className="white-menu-item">
                        <img className="userimg" src="user.svg"></img><a className="white-bg" href="#">Connexion</a>
                    </div>
                    <div className="white-menu-item">
                        <a className="white-bg" href="#">Carte cadeau</a>
                    </div>
                    <div className="white-menu-item">
                        <a className="white-bg" href="#">Intersport.fr</a>
                    </div>
                </div>
            )}




                <nav className="lastnav">
                    <p>Homme</p>
                    <p>Femme</p>
                    <p>Chaussures</p>
                    <p>Accessoires</p>
                    <p>Marques</p>
                    <p>OP du moment</p>
                </nav>
                
                {!isOpen && (
                <div className="content-responsive">
                    <div className="search-box">
                        <input type="search" placeholder="Search" />
                    </div>
                    <img className="searchimg" src="search.png"></img>
                </div>

)}



                {/*<img src="./download.png" alt=""></img>*/}
                {/* <div className="search">
                        <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Search"
                        />
                    </div>
                    */}
            </header> 
        </div>
    );
  }
  
  export default Navbar;
  