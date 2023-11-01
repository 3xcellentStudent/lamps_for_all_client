import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import {GET_PRODUCT_ID, CART_DATA_SAGA, CALL_OPEN_CART} from '../constants'
import {actionCartReducer, actionSETProductID, actionCHANGEOpenCart} from '../actions'
import {getProductID} from '../../api/post_product'

function* sagaCartData(action: {type: string, payload: any}){
  yield put(actionCartReducer(action.payload))
}

function* sagaIsOpenCart({type}: {type: string}){
  yield put(actionCHANGEOpenCart())
}

function* sagaGetProductID(action: {type: string, payload: any}){
  const data = yield getProductID(action.payload)
  yield put(actionSETProductID(data))
}

export default function* rootSaga(){
  yield takeEvery(CART_DATA_SAGA, sagaCartData)
  yield takeEvery(CALL_OPEN_CART, sagaIsOpenCart)
  yield takeLatest(GET_PRODUCT_ID, sagaGetProductID)
}