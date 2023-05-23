 import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/const';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';


const NavBar = observer( () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white', fontSize:'20px', textDecorationLine: 'none'}} to={SHOP_ROUTE}>BuyDevice.ru</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Панель администратора</Button>
            <Button className="ms-2" variant={'outline-light'} onClick={() => {logOut(); navigate(SHOP_ROUTE)}}>Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
}
        </Container>
      </Navbar>
        </div>
    );
});

export default NavBar;