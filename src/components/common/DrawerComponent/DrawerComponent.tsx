import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  anchor: "right"
  cartOpen: any
  closeCart: any
}

export default function DrawerComponent({anchor, cartOpen, closeCart, children}: Props){

  return (
    <Drawer anchor={anchor} open={cartOpen} onClose={closeCart}>
      {children}
    </Drawer>
  );
}