import React from "react";
import styled from "styled-components";
import Monday from "../resources/svgexport-0.svg";

const HeaderElm = styled.header``;

const Nav = styled.nav`
  display: flex;
  padding: 12px;
  width: 100vw;
`;

const TopBarContent = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWraber = styled.div`
  flex: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Logo = styled.img``;

const NavBarMenu = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const Links = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderElm>
      <Nav>
        <TopBarContent>
          <LogoWraber>
            <Link href="#">
              <Logo src={Monday} />
            </Link>
          </LogoWraber>
          <NavBarMenu>
            <Links>Product</Links>
            <Links>Use cases</Links>
            <Links>Why Monday.com</Links>
            <Links>Pricing</Links>
            <Links>Contact Sales</Links>
            <Links>Login</Links>
          </NavBarMenu>
        </TopBarContent>
      </Nav>
    </HeaderElm>
  );
};

export default Header;
