'use client'

import {Box, IconButton, Typography, styled} from '@mui/material';
import {
  Menu as MenuIcon, ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import styles from "./styles.module.scss"
import "./styles.scss"
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import BadgeButton from '../BadgeButton/BadgeButton';
import { useEffect, useState } from 'react';
import { ProductIdType } from '@/types/main/product.type';

const CustomHeader = styled("header")({});

export default function Header(){

  const pathname = usePathname()

  const {backgrounds, text: {optional}} = useSelector(({data: {theme: {colors}}}: {data: ProductIdType}) => colors)

  const [headerState, setHeaderState] = useState<boolean>(true)

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY > 100) setHeaderState(false);
      else setHeaderState(true);
    }
  }, [])

  return (
    <CustomHeader className={'header'} sx={{"--headerBg": backgrounds.elementsPrimary.rgb, "--headerOpacity": headerState ? 1 : 0}}>
      <div className='toolbar'>
        <Box className='w-min flex items-center pl-6 pr-8 toolbar_left_side' 
        sx={{borderColor: headerState ? "transparent" : backgrounds.secondary.hex, borderBottomWidth: 2, borderRightWidth: 2}}>
          <IconButton size="large" edge="start" color="inherit" 
          aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon htmlColor={`rgba(${backgrounds.secondary.rgb}, 1)`} />
          </IconButton>
          <Typography className='w-min' variant="h6" noWrap component="h6"
            sx={{display: { xs: 'none', sm: 'block' }, color: optional.hex}}
          >Lamps For All</Typography>
        </Box>

        <Box className="w-min flex items-center pl-8 pr-6 toolbar_right_side" 
        sx={{borderColor: headerState ? "transparent" : backgrounds.secondary.hex, borderBottomWidth: 2, borderLeftWidth: 2}}>
          {!pathname.includes("purchase") && 
          <BadgeButton color={backgrounds.elementsPrimary.hex} cls="pointer-events-none">
            <ShoppingCartIcon sx={{color: optional.hex, width: "28px", height: "28px"}} />
          </BadgeButton>}
        </Box>
      </div>
      <Box sx={{backgroundColor: backgrounds.secondary.hex}} className='bottom_line'></Box>
    </CustomHeader>
  );
}