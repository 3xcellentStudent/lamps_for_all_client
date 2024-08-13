'use client'

import {IconButton, Typography, styled} from '@mui/material';
import {
  Menu as MenuIcon, ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.scss'
import { useSelector } from 'react-redux';
import { InitialState } from '@/types/storeTypes';
import { usePathname } from 'next/navigation';
import BadgeButton from '../BadgeButton/BadgeButton';
import { CartObjectType } from '@/types/cartTypes/cartObject.types';

const CustomHeader = styled("header")({});

export default function Header(){

  const pathname = usePathname()

  const data = useSelector(({data}: InitialState) => data)

  const {cart} = useSelector(({cartObject}: CartObjectType) => cartObject)

  return (
    <CustomHeader className='header px-6'>
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
        {!pathname.includes("purchase") && 
        <BadgeButton count={cart?.length} color='primary' cls="pointer-events-none">
          <ShoppingCartIcon/>
        </BadgeButton>}
      </div>
    </CustomHeader>
  );
}