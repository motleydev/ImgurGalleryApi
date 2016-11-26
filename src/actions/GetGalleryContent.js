import fetch from 'isomorphic-fetch'

import UpdateGalleryContent from './UpdateGalleryContent.js'
import ApplicationFetchingData from './ApplicationFetchingData.js'
import ApplicationReceivedData from './ApplicationReceivedData.js'
import ApplicationErroredData from './ApplicationErroredData.js'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export function dataReceivedMultiProcess(data) {

  return function (dispatch) {
    dispatch(ApplicationReceivedData())
    return dispatch(UpdateGalleryContent(data))
  }
}

export function fetchImages(state) {

  let imgurGallery = state.GalleryView || 'hot'
  let imgurWindow = imgurGallery === 'top' ? (`/${state.GalleryWindow}/` || '/day/') : '';
  let imgurSort = state.GallerySort || 'viral'

  return function (dispatch) {

    dispatch(ApplicationFetchingData())

    return fetch(`/api`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        imgurGallery,
        imgurSort,
        imgurWindow,
        galleryViralCheck: state.GalleryViralCheck
      })
    })
      .then(parseJSON)
      .then(checkStatus)
      .then(response => {
        if (response.data) {
          dispatch(dataReceivedMultiProcess(response.data))
        } else {
          let error = new Error("Response didn't have data")
          throw error
        }
      })
      .catch(e => {
        dispatch(ApplicationErroredData(e.message))
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

module.exports = fetchImages;
