'use client'

import {IconButton, Typography, styled} from '@mui/material';
import {
  Menu as MenuIcon, ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import styles from "./styles.module.scss"
import "./styles.scss"
import { useSelector } from 'react-redux';
import { InitialState } from '@/types/storeTypes';
import { usePathname } from 'next/navigation';
import BadgeButton from '../BadgeButton/BadgeButton';
import { CartObjectType } from '@/types/cartTypes/cartObject.types';
import { useEffect, useRef, useState } from 'react';
import { ProductIdType } from '@/types/productPage.types/mainTypes';

const CustomHeader = styled("header")({});

export default function Header(){

  const pathname = usePathname()

  const [{elementsMainBg, elementsSecondaryBg}, setHeaderColors] = useState<{elementsMainBg: string, elementsSecondaryBg: string}>({elementsMainBg: "", elementsSecondaryBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)

  const cart = useSelector(({cart}: CartObjectType) => cart)

  const [headerState, setHeaderState] = useState<boolean>(true)

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY > 100) setHeaderState(false);
      else setHeaderState(true);
    }
  }, [])

  useEffect(() => {
    const {elementsMainBg, elementsSecondaryBg} = data.common.theme.colors
    setHeaderColors({elementsMainBg, elementsSecondaryBg})
  }, [data])

  return (
    // <CustomHeader className={'header px-6'} style={{"--headerOpacity": headerState ? .9 : 0, "--headerBgColor": headerBgColor}}>
    <CustomHeader className={'header px-6'} 
    style={{"--headerBg": headerState ? elementsMainBg : "transparent", "--headerBgColor": elementsMainBg}}>
      <div className='toolbar'>
        <IconButton size="large" edge="start" color="inherit" 
        aria-label="open drawer" sx={{ mr: 2 }}>
          <MenuIcon htmlColor={elementsSecondaryBg} />
        </IconButton>
        <Typography variant="h6" noWrap component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Lamps For All
        </Typography>
        {!pathname.includes("purchase") && 
        <BadgeButton count={cart?.length} color={elementsSecondaryBg} cls="pointer-events-none">
          <ShoppingCartIcon sx={{color: elementsSecondaryBg}} />
        </BadgeButton>}
      </div>
      <div className='bottom_line'></div>
    </CustomHeader>
  );
}