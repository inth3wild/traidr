import React from 'react';
import { HeaderContainer, Logo, Nav } from './Styledheader';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>traïdr</Logo>
      <Nav>
        <Link to="/login">Log in</Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
