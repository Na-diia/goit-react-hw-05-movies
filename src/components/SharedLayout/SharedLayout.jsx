import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from 'components/Loader/Loader';

import { Navigation, Header, WrapIcon, List, Item, HeaderLink } from './shared-layout.styled';

const SharedLayout = () => {

  return (
    <div>
  <Header>
    <WrapIcon></WrapIcon>
    <Navigation>
    <List>
    <Item><HeaderLink to="/" onClick={(e) => e.currentTarget.blur()}>Home</HeaderLink></Item>
    <Item><HeaderLink to="/movies" onClick={(e) => e.currentTarget.blur()}>Movies</HeaderLink></Item>
    </List>
    </Navigation>
    </Header>
    <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
  </div>
  )
};

export default SharedLayout;