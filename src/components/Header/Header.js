import Link from 'next/link';
import React from 'react';
import { FaPlane, FaUserAlt } from 'react-icons/fa';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>

    {/* Header: icon and name. */}
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "#656d4a", marginBottom: '20px'}}>
          <FaPlane size="3rem" style={{marginRight: '5px'}}/> <Span>Tora</Span>
        </a>
      </Link>
    </Div1>

    {/* Scrolls to the corresponding section of the page. */}
    <Div2>
      <li>
        <Link href="#create-trip">
          <NavLink>Create Trip</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#view-trips">
          <NavLink>View Trips</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#past-trips">
          <NavLink>Past Trips</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Social links via React icons. */}
    <Div3>
      <SocialIcons href="https://github.com/anjerraa">
        <FaUserAlt size="2.5rem"/>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
