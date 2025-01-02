import { actionChangeOpenCart } from '@/redux/actions';
import { SwipeableDrawer } from '@mui/material';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  children: ReactNode
  anchor: "right"
}

export default function DrawerComponent({anchor, children}: Props){

  const dispatch = useDispatch()
  const isOpenCart = useSelector(({isOpenCart}: {isOpenCart: boolean}) => isOpenCart)

  return (
    <SwipeableDrawer anchor={anchor} onOpen={() => true} open={isOpenCart} onClose={() => dispatch(actionChangeOpenCart())}>
      {children}
    </SwipeableDrawer>
  );
}