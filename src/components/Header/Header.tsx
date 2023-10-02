'use client'

import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss'

export default function SearchAppBar() {
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
        <div className="header_search">
          <div className="header_search_icon_wrapper">
            <SearchIcon htmlColor='#2196F3' />
          </div>
          <input className='header_search_input' type="text" placeholder="Search…" />
        </div>
      </div>
    </header>
  );
}