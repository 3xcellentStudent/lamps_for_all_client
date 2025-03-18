import { actionCallCartState } from '@/redux/cart/actions';
import { CART_IS_OPEN_SAVE_CONST, CALL_CART_STATE_CONST } from '@/redux/cart/constants';
import { CartObjectType } from '@/types/cartTypes/cartObject.types';
import { SwipeableDrawer } from '@mui/material';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  children: ReactNode
  anchor: "right"
}

export default function DrawerComponent({anchor, children}: Props){

  const dispatch = useDispatch()
  const isOpenCart = useSelector(({cartObject: {isOpenCart}}: {cartObject: CartObjectType}) => isOpenCart)

  return (
    <SwipeableDrawer anchor={anchor} onOpen={() => true} open={isOpenCart} onClose={
      () => dispatch(actionCallCartState({type: CART_IS_OPEN_SAVE_CONST, payload: null}))
    }>
      {children}
    </SwipeableDrawer>
  );
}