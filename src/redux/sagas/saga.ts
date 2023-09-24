import { takeLatest, put } from 'redux-saga/effects';
import {actionSETProductID} from '../actions/actions'
import {GET_PRODUCT_ID} from '../constants/product'
import {getProductID} from '@/api/post_product'

function* workerSaga(action: {type: string, payload: any}){
  const data = yield getProductID(action.payload)
  yield put(actionSETProductID(data))
}

function* rootSaga(){
  yield takeLatest(GET_PRODUCT_ID, workerSaga)
}

export default rootSaga
