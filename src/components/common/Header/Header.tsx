'use client'

import {Box, IconButton, styled, Typography, Link as MuiLink} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon, Menu as MenuIcon
} from '@mui/icons-material';
import styles from "./styles.module.scss"
import { useSelector } from 'react-redux';
import { usePathname, useParams } from 'next/navigation';
import BadgeButton from '../BadgeButton/BadgeButton';
import { useCallback, useEffect, useState } from 'react';
import { GlobalDataType } from '@/types/main/globalData.type';
import BasicSpeedDial from '../BasicSpeedDial/BasicSpeedDial';
import Link from 'next/link';
import navigationData from "@/data.models/navigation.json"

const CustomHeader = styled("header")({});

export default function Header(){

  const pathname = usePathname()

  const {elementsPrimaryBg, elementsOptionalBg, elementsSecondaryBg, secondaryBg, primaryText, optionalText, secondaryText} = useSelector(
    ({globalData: {colors: {backgrounds, text}}}: {globalData: GlobalDataType}) => ({...backgrounds, ...text})
  )

  const [headerState, setHeaderState] = useState<boolean>(false)

  const scrollEffects = useCallback(() => {
    if(window.scrollY > 100) setHeaderState(false)
    else if(window.scrollY < 100) setHeaderState(true)
  }, [headerState])

  useEffect(() => {
    scrollEffects()
    window.onscroll = scrollEffects
  }, [])

  return (
    <CustomHeader className={`${styles.header}`} sx={{
      backgroundColor: elementsPrimaryBg.rgb, opacity: headerState ? 1 : 0, backdropFilter: "brightness(90%) blur(2px)", 
      color: headerState ? primaryText.hex : secondaryText.hex,
      "&:hover": {opacity: 1, color: secondaryText.hex},
    }}>
      <div className={`${styles.container}`}>
        <Box className='w-6/12 flex items-center justify-between pl-6' 
        sx={{borderColor: headerState ? "transparent" : secondaryBg.hex,}}>
          {/* <IconButton size="large" edge="start" color="inherit" 
          aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon htmlColor={`rgba(${secondaryBg.rgb}, 1)`} />
          </IconButton> */}
          <Typography className='w-min' variant="h4" noWrap component="h1"
            sx={{display: { xs: 'none', sm: 'block' }, }}>My Store</Typography>

          <nav className='flex flex-row items-center ml-4'>
            {navigationData.map((item, index) => {
              return <MuiLink key={index} sx={{"&::before": {backgroundColor: elementsSecondaryBg.hex}, "&:hover": {color: elementsSecondaryBg.hex}}} 
              className={`whitespace-nowrap px-2 ${styles.navigation_link}`} href={item.href} component={Link}>
                {item.text}
              </MuiLink>
            })}
          </nav>
        </Box>

        {/* <BasicSpeedDial direction="right" speedDialProps={{className: `absolute`}} /> */}

        <Box className="w-min flex items-center pl-8 pr-6" 
        sx={{borderColor: headerState ? "transparent" : secondaryBg.hex,}}>
          {!pathname.includes("purchase") && 
          <BadgeButton color={elementsPrimaryBg.hex} cls="pointer-events-none">
            <ShoppingCartIcon sx={{width: "28px", height: "28px"}} />
          </BadgeButton>}
        </Box>
      </div>
      <Box sx={{backgroundColor: elementsSecondaryBg.hex}} className={`${styles.bottom_line}`}></Box>
    </CustomHeader>
  );
}