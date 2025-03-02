import { takeLatest, takeEvery, put, take } from 'redux-saga/effects';
import {GET_PRODUCT_ID, DATA_FROM_DB} from './constants'
// import {
//   actionSETProductID, actionChangeOpenCart, actionSaveDataFromDb
// } from '../actions'
import { actionSaveIsOpenCart } from './cart/isOpenCart/actions';
import { actionChangeShippingData } from './payment/actions';
import { CART_IS_OPEN_CALL, } from './cart/isOpenCart/constants';
import { SHIPPING_DATA } from './payment/constants';
import { PRODUCT_DATA_CALL, GLOBAL_DATA_CALL } from './database/constants';
import { GlobalDataType } from '@/types/main/globalData.type';
import { actionSaveProductData, actionSaveGlobalData } from './database/actions';
import {  } from './database/types';
import { ProductDataType } from '@/types/main/productData.type';


// function* changeCartItem({payload}: {type: string, payload: {type: string, payload: {}}}){
//   yield put(actionChangeCartReducer(payload))
// }

function* isOpenCart(){
  yield put(actionSaveIsOpenCart())
}

function* getProductID(action: {type: string, payload: any}){
  // const data = yield getProduct(action.payload)
  // yield put(actionSETProductID(data))
}

function* saveProductData({payload}: {payload: ProductDataType}){
  yield put(actionSaveProductData(payload));
}

function* saveGlobalData({payload}: {payload: GlobalDataType}){
  yield put(actionSaveGlobalData(payload));
}

function* shippingData({payload}: {type: string, payload: any}){
  yield put(actionChangeShippingData(payload))
}

export default function* rootSaga(){
  // yield takeEvery(SAGA_CHANGE_CART, changeCartItem)
  yield takeEvery(CART_IS_OPEN_CALL, isOpenCart)
  yield takeLatest(GET_PRODUCT_ID, getProductID)
  yield takeEvery(SHIPPING_DATA, shippingData)
  yield takeLatest(PRODUCT_DATA_CALL, saveProductData)
  yield takeLatest(GLOBAL_DATA_CALL, saveGlobalData)
  // yield takeLatest(SAVE_DATA_FROM_DB, getProductID)
}