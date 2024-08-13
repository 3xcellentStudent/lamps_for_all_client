import { takeLatest, takeEvery, put, take } from 'redux-saga/effects';
import {GET_PRODUCT_ID, SAVE_DATA_FROM_DB_REDUCER, SAVE_DATA_FROM_DB} from '../constants'
import {
  actionSETProductID, actionChangeOpenCart, actionSaveDataFromDbReducer
} from '../actions'
import { CALL_OPEN_CART, REDUCER_PUT_CART_ITEM } from '../reducers/cart/constants';
import { ProductIdType } from '@/types/productPage.types/mainTypes';
import { actionChangeCartReducer } from '../reducers/cart/actions';
import { SHIPPING_DATA } from '../reducers/payment/constants';
import { actionChangeShippingData } from '../reducers/payment/actions';

function* putCartItem({payload}: {type: string, payload: {type: string, payload: {}}}){
  yield put(actionChangeCartReducer(payload))
}

function* isOpenCart({type}: {type: string}){
  yield put(actionChangeOpenCart())
}

function* getProductID(action: {type: string, payload: any}){
  // const data = yield getProduct(action.payload)
  // yield put(actionSETProductID(data))
}

function* saveDataFromDb({payload: {data}}: {payload: {data: ProductIdType}}){
  yield put(actionSaveDataFromDbReducer(data));
}

function* shippingData({payload}: {type: string, payload: any}){
  yield put(actionChangeShippingData(payload))
}

export default function* rootSaga(){
  yield takeLatest(SAVE_DATA_FROM_DB, saveDataFromDb)
  yield takeEvery(REDUCER_PUT_CART_ITEM, putCartItem)
  yield takeEvery(CALL_OPEN_CART, isOpenCart)
  yield takeLatest(GET_PRODUCT_ID, getProductID)
  yield takeEvery(SHIPPING_DATA, shippingData)
  // yield takeLatest(SAVE_DATA_FROM_DB, getProductID)
}