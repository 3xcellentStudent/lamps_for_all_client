export interface ProductIdType {
  id: string
  title: string,
  rating: string
  theme: {
    colors: {
      text: {
        primary: ThemeColorsTypes
        secondary: ThemeColorsTypes
        optional: ThemeColorsTypes
      },
      backgrounds: {
        primary: ThemeColorsTypes
        secondary: ThemeColorsTypes
        optional: ThemeColorsTypes
        elementsPrimary: ThemeColorsTypes
        elementsSecondary: ThemeColorsTypes
        elementsOptional: ThemeColorsTypes
      }
    }
  },
  reviews: {
    countOfReviews: number,
    reviewsSnaphot: {five: number, four: number, three: number, two: number, one: number},
    reviewsList: {name: string, text: string, title: string, rating: string, attachments: string[]}[],
  },
  category: {name: string},
  descriptions: {
    summary: string,
    presentable: string[]
  },
  stockInfo: {
    quantityMax: 5,
    price: 20
  },
  productOptions: {name: string, type: string, items: {value: string, fill: string, stroke: string, stockStatus: boolean}[]}[],
  mediaContent: {
    titleContent: {
      productLogo: string
      descriptionVideo: string
    },
    images: {media: string, src: string}[][],
    videos: []
  },
  specifications: {
    titles: {name: string}[],
    properties: {
      name: string,
      array: {name: string, value: string}[]
    }[]
  }
}

export interface ThemeColorsTypes {hex: string, rgb: string}