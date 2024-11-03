import { takeLatest, takeEvery, put, take } from 'redux-saga/effects';
import {GET_PRODUCT_ID, SAVE_DATA_FROM_DB_REDUCER, SAVE_DATA_FROM_DB} from '../constants'
import {
  actionSETProductID, actionChangeOpenCart, actionSaveDataFromDbReducer
} from '../actions'
import { ProductIdType } from '@/types/productPage.types/mainTypes';
import { actionChangeCartReducer } from '../cart/actions';
import { actionChangeShippingData } from '../payment/actions';
import { ACTION_CHANGE_OPEN_CART, SAGA_CHANGE_CART } from '../cart/constants';
import { SHIPPING_DATA } from '../payment/constants';

function* changeCartItem({payload}: {type: string, payload: {type: string, payload: {}}}){
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
  yield takeEvery(SAGA_CHANGE_CART, changeCartItem)
  yield takeLatest(SAVE_DATA_FROM_DB, saveDataFromDb)
  yield takeEvery(ACTION_CHANGE_OPEN_CART, isOpenCart)
  yield takeLatest(GET_PRODUCT_ID, getProductID)
  yield takeEvery(SHIPPING_DATA, shippingData)
  // yield takeLatest(SAVE_DATA_FROM_DB, getProductID)
}