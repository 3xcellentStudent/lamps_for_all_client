import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import {GET_PRODUCT_ID, CART_DATA_SAGA, CALL_OPEN_CART, SELECTED_CART_ELEMENTS} from '../constants'
import {actionCartReducer, actionSETProductID, actionCHANGEOpenCart, actionCartSelectedSaga} from '../actions'
// import {getProduct} from '../../api/services/products'

function* sagaCartData(action: {type: string, payload: any}){
  yield put(actionCartReducer(action.payload))
}

function* sagaIsOpenCart({type}: {type: string}){
  yield put(actionCHANGEOpenCart())
}

function* sagaGetProductID(action: {type: string, payload: any}){
  // const data = yield getProduct(action.payload)
  // yield put(actionSETProductID(data))
}

export default function* rootSaga(){
  yield takeEvery(CART_DATA_SAGA, sagaCartData)
  yield takeEvery(CALL_OPEN_CART, sagaIsOpenCart)
  yield takeLatest(GET_PRODUCT_ID, sagaGetProductID)
}