import {
  http
} from '../utils/http.js'

const getGallery = (page = 1, size = 12) => {
  return http({
    url: `photos/gallery?page=${page}&size=${size}`
  })
}

const getGalleryDetail = id => {
  return http({
    url: `photos/gallery/${id}`
  })
}

export {
  getGallery,
  getGalleryDetail
}