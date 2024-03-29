import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu,  NavLinks, NavItem, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)    
    }, [])


    const toggleHome = () =>{
        scroll.scrollToTop();
    }

 return (

  <>
  <IconContext.Provider value={{}}>
   <Nav scrollNav={scrollNav}>
    <NavContainer>
     <NavLogo to="/" onClick={toggleHome}> dolla </NavLogo>
     <MobileIcon onClick={toggle}>
     <FaBars />
     </MobileIcon>
     <NavMenu>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="about">About</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="discover">Discover</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="services">Services</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth={true} duration={500} spy={true} exact='true' offset={-80} to="signup">Sign Up</NavLinks>
      </NavItem>
     </NavMenu>
     <NavBtn>
      <NavBtnLink  to="/signin">Sign In</NavBtnLink>
     </NavBtn>
    </NavContainer>
   </Nav>
   </IconContext.Provider>
  </>
 )
}

export default Navbar
