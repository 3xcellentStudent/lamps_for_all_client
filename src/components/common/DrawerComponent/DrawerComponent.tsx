// import Drawer from '@mui/material/Drawer';
import { SwipeableDrawer } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  anchor: "right"
  cartOpen: any
  closeCart: any
}

export default function DrawerComponent({anchor, cartOpen, closeCart, children}: Props){

  return (
    <SwipeableDrawer anchor={anchor} onOpen={() => true} open={cartOpen} onClose={closeCart}>
      {children}
    </SwipeableDrawer>
  );
}