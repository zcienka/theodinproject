import {Navbar, Burger, Logo, Wrapper} from "./Header.styles"
import {default as BurgerImage} from "../../images/burger.png"
import React, {useState} from "react"
import {Link} from 'react-router-dom'

function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    return (
        <Wrapper>
            <Navbar>
                <ul style={{display: showNavbar ? "flex" : "none"}}>
                    <li>
                        <Link to={"/home"} style={{ textDecoration: 'none' }}>home</Link>
                    </li>
                    <li>
                        <Link to={"/shop"} >shop</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>cart</Link>
                    </li>
                </ul>
            </Navbar>

            <Logo>
                <h1 style={{display: showNavbar ? "none" : "flex"}}>
                    ciuszexpol
                </h1>
            </Logo>
            <Burger src={BurgerImage} onClick={() => setShowNavbar(!showNavbar)}>

            </Burger>
        </Wrapper>
    )
}

export default Header;
