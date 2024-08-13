import { SAVE_DATA_FROM_DB_REDUCER, SET_PRODUCT_ID } from "@/redux/constants"
import { ProductIdType } from "@/types/productPage.types/mainTypes"


const initialState: ProductIdType = {
  common: {
    rating: 5,
    title: "",
    category: {id: "", name: ""},
    theme: {
      colors: {
        textColor: "#fff",
        elementsBg: "fff",
        pageBg: "#fff"
      },
      shadows: {
        sxCircle: {boxShadow: "none"}
      }
    },
    productLogo: "",
    sxQuantity: {},
  },
  sectionTitle: {
    description: "",
    price: "",
    quantityMax: 0,
    sx: {},
    purchasePart: {
      sxCont: {},
      components: {
        titleC: {
          ratingC: {content: "", sxText: {}, sxRating: {}, sxBox: {}},
        },
        addCartC: {sxBtn: {}},
        selectionC: {
          sxBox: {},
          // sxQuantity: {},
          fieldC: [
            {
              sxField: {colorLabel: ""},
              name: "", type: "", items: [
              {value: "", fill: "", stroke: "",},
              ]
            }
          ]
        }
      }
    },
  },
  sectionDescr: {
    sx: {sxBtn: {}, sxIcon: {}, sxSection: {}},
    images: [[{media: "", src: ""}]],
    description: [],
  },
  sectionDetails: {
    sx: {sxBtn: {}, sxItem: {}, sxList: {}, sxText: {}, sxIcon: {}},
    array: []
  },
  sectionReviews: {
    reviewsSnaphot: {five: 0, four: 0, three: 0, two: 0, one: 0},
    sxFilter: {sxBtn: {}, sxIcon: {}},
    sxRating: {},
    sxText: {},
    userReviews: {
      reviewsArray: [],
      theme: {
        elementsBg: "",
        cardSx: {},
      }
    },
  },
  images: [],
}


export default function dataReducer(state = initialState, {type, payload}: {type: string, payload: any}){
  switch (type) {
    case SAVE_DATA_FROM_DB_REDUCER: return {...state, data: payload}
    case SET_PRODUCT_ID: return {...state, data: payload}
    default: return state
  }
}