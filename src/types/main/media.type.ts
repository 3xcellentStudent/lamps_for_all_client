export interface MediaContentType {
  id: string
  titleContent: {
    productLogo: string
    descriptionVideo: string
  }
  images: {media: string, src: string}[][]
  // videos: never[]
  createdAt: number
  updatedAt: number
}

// "descriptionVideo": "//vitruvi.ca/cdn/shop/files/preview_images/f7e3669e31214c2784b8397c480a6987.thumbnail.0000000000_1500x.jpg?v=1719510183"