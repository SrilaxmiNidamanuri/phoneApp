import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";

import {ButtonContainer} from './Button';
import styled from "styled-components";

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_iconCreative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/">Products</Link>
                    </li>
                </ul>

                <Link to="/" className="ml-auto">
                <ButtonContainer>
                    <i className="fas fa-cart-plus">
                        <Link to="/cart">my cart</Link>
                    </i>
                    </ButtonContainer>
                </Link>
            </NavWrapper> 
        );
    }
}
export const NavWrapper=styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize!important;

}`
export default Navbar;