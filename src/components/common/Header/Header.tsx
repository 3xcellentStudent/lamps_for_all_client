'use client'

import {Box, IconButton, Typography, styled} from '@mui/material';
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

  const [{mainBg, secondaryBg}, setColors] = useState<
    {mainBg: string, secondaryBg: string}
  >({mainBg: "", secondaryBg: ""})

  const data = useSelector(({data}: {data: ProductIdType}) => data)

  const cart = useSelector(({cart}: CartObjectType) => cart)

  const [headerState, setHeaderState] = useState<boolean>(true)

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY > 100) setHeaderState(false);
      else setHeaderState(true);
    }
  }, [])

  useEffect(() => {
    const {mainBg, secondaryBg} = data.common.theme.colors
    setColors({mainBg, secondaryBg: `rgb(${secondaryBg})`})
  }, [data])

  return (
    <CustomHeader className={'header'} sx={{"--headerBg": mainBg, "--headerOpacity": headerState ? 1 : 0}}>
      <div className='toolbar'>
        <Box className='w-min flex items-center pl-6 pr-8 toolbar_left_side' 
        sx={{borderColor: headerState ? "transparent" : secondaryBg, borderBottomWidth: 2, borderRightWidth: 2}}>
          <IconButton size="large" edge="start" color="inherit" 
          aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon htmlColor={`rgba(${secondaryBg}, 1)`} />
          </IconButton>
          <Typography className='w-min' variant="h6" noWrap component="h6"
            sx={{display: { xs: 'none', sm: 'block' }, color: secondaryBg}}
          >Lamps For All</Typography>
        </Box>

        <Box className="w-min flex items-center pl-8 pr-6 toolbar_right_side" 
        sx={{borderColor: headerState ? "transparent" : secondaryBg, borderBottomWidth: 2, borderLeftWidth: 2}}>
          {!pathname.includes("purchase") && 
          <BadgeButton color={secondaryBg} cls="pointer-events-none">
            <ShoppingCartIcon sx={{color: secondaryBg, width: "28px", height: "28px"}} />
          </BadgeButton>}
        </Box>
      </div>
      <Box sx={{backgroundColor: secondaryBg}} className='bottom_line'></Box>
    </CustomHeader>
  );
}