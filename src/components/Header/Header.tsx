'use client'

import {Badge, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.scss'
import Search from './parts/Search/Search';
import BadgeButton from '../common/BadgeButton/BadgeButton';
import { useSelector } from 'react-redux';

export default function Header(){

  const cart = useSelector(({cart}: {cart: []}) => cart)

  return (
    <header className='header'>
      <div className='header_toolbar'>
        <IconButton size="large" edge="start" color="inherit" 
        aria-label="open drawer" sx={{ mr: 2 }}>
          <MenuIcon htmlColor='#2196F3' />
        </IconButton>
        <Typography variant="h6" noWrap component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Lamps For All
        </Typography>
        {/* <Search/> */}
        <BadgeButton count={cart?.length} color='primary' cls="pointer-events-none">
          <ShoppingBasketIcon/>
        </BadgeButton>
      </div>
    </header>
  );
}