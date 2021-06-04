import React, { useState, useEffect } from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink } from "./NavbarElements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { Button } from "bootstrap";
import { Button } from "../../globalStyles";

function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    function showButton() {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    function handleClick() {
        setClick(!click);
    }
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                        Tr<span style={{ color: "#1eae98" }}>E</span>coRd
                    </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/records">
                                    Records
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/register">
                                        <Button primary>
                                            Register
                                        </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/register">
                                        <Button fontBig primary>
                                            Register
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn> */}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Header;