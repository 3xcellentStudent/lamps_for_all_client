import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import {GET_PRODUCT_ID, GET_BASKET} from '../constants/product'
import {actionSETBasket, actionSETProductID} from '../actions/actions'
import {getProductID} from '../../api/post_product'

function* sagaBasket(action: {type: string, payload: any}){
  yield put(actionSETBasket(action.payload))
}

function* sagaGetProductID(action: {type: string, payload: any}){
  const data = yield getProductID(action.payload)
  yield put(actionSETProductID(data))
}

export default function* rootSaga(){
  yield takeLatest(GET_PRODUCT_ID, sagaBasket)
  yield takeEvery(GET_BASKET, sagaGetProductID)
}