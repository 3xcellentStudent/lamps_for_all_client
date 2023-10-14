import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import {GET_PRODUCT_ID, SET_BASKET, SET_OPEN_CART} from '../constants/product'
import {actionPUTBasket, actionSETProductID, actionCHANGEOpenCart} from '../actions/actions'
import {getProductID} from '../../api/post_product'

function* sagaBasket(action: {type: string, payload: any}){
  yield put(actionPUTBasket(action.payload))
}

function* sagaIsOpenCart({type}: {type: string}){
  yield put(actionCHANGEOpenCart())
}

function* sagaGetProductID(action: {type: string, payload: any}){
  const data = yield getProductID(action.payload)
  yield put(actionSETProductID(data))
}

export default function* rootSaga(){
  yield takeEvery(SET_BASKET, sagaBasket)
  yield takeEvery(SET_OPEN_CART, sagaIsOpenCart)
  yield takeLatest(GET_PRODUCT_ID, sagaGetProductID)
}