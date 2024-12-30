// import { ProductIdType } from '@/types/productPage.types/mainTypes';
// import {SAVE_DATA_FROM_DB_REDUCER, SET_PRODUCT_ID} from '../constants'
// import { CHANGE_OPEN_CART, REDUCER_PUT_CART_ITEM, SELECTED_CART_ELEMENTS } from '../constants/cartConst';
// import cartReducer from './cart/reducer';
// import { InitialState } from '@/types/storeTypes';

// const data: ProductIdType = {
//   common: {
//     rating: 5,
//     title: "",
//     category: {id: "", name: ""},
//     theme: {
//       colors: {
//         textColor: "#fff",
//         backgroundColor: "fff"
//       },
//       shadows: {
//         sxCircle: {boxShadow: "none"}
//       }
//     },
//     productLogo: "",
//     sxQuantity: {},
//   },
//   sectionTitle: {
//     description: "",
//     price: "",
//     quantityMax: 0,
//     sx: {},
//     purchasePart: {
//       sxCont: {},
//       components: {
//         titleC: {
//           ratingC: {content: "", sxText: {}, sxRating: {}, sxBox: {}},
//         },
//         addCartC: {sxBtn: {}},
//         selectionC: {
//           sxBox: {},
//           // sxQuantity: {},
//           fieldC: [
//             {
//               sxField: {colorLabel: ""},
//               name: "", type: "", items: [
//               {value: "", fill: "", stroke: "",},
//               ]
//             }
//           ]
//         }
//       }
//     },
//   },
//   sectionDescr: {
//     sx: {sxBtn: {}, sxIcon: {}, sxSection: {}},
//     images: [[{media: "", src: ""}]],
//     description: [],
//   },
//   sectionDetails: {
//     sx: {sxBtn: {}, sxItem: {}, sxList: {}, sxText: {}, sxIcon: {}},
//     array: []
//   },
//   sectionReviews: {
//     reviewsSnaphot: {five: 0, four: 0, three: 0, two: 0, one: 0},
//     sxFilter: {sxBtn: {}, sxIcon: {}},
//     sxRating: {},
//     sxText: {},
//     userReviews: {
//       reviewsArray: [],
//       theme: {
//         elementsBg: "",
//         cardSx: {},
//       }
//     },
//   },
//   images: [],
// }

// const initialState: InitialState = {
//   data,
//   cart: [],
//   statusCode: 100,
//   isOpenCart: false,
//   selectedCartElements: [],
// }

// const reducer = (state = initialState, {type, payload}: {type: string, payload: any}) => {
  // switch (type) {
  //   case SAVE_DATA_FROM_DB_REDUCER:
  //     return {...state, data: payload}
  //   case SET_PRODUCT_ID:
  //     return {...state, data: payload}
    // case REDUCER_PUT_CART_ITEM:
    //   const {statusCode, result} = cartReducer(state.cart, payload)
    //   return {...state, statusCode, cart: result}
//     case SELECTED_CART_ELEMENTS:
//       const {type} = payload
//       switch(type){
//         case 'SELECTED': return {
//           ...state, selectedCartElements: [...state.selectedCartElements, payload.idx]
//         }
//         case 'DELETE': 
        // const filtered = state.cart.filter(($, index) => index !== payload.idx)
        //   return{...state, cart: filtered}
//         default: return state
//       }
    // case CHANGE_OPEN_CART:
    //   return {...state, isOpenCart: !state.isOpenCart}
    // default:
    //   return state;
//   }
// };

// export default reducer;

import { combineReducers } from 'redux';
// import {cartReducer, statusCodeReducer} from './cart/cartReducer';
import cartReducer from '../cart/reducer';
import dataReducer from './database/dataReducer';
import openCartReducer from './openCart/openCartReducer';
import shippingReducer from '../payment/reducer';
// import statusCodeReducer from './cart/statusCodeReducer';

const rootReducer = combineReducers({
  // statusCode: statusCodeReducer,
  // cart: cartReducer,
  cartObject: cartReducer,
  data: dataReducer,
  shipping: shippingReducer,
  isOpenCart: openCartReducer,
});

export default rootReducer;