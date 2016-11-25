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
  console.log(response)
  return response.json()
}

// {
//       method: 'GET',
//       headers: {
//         'Authorization': 'Client-ID beba972e29f0b1d'
//       }
// }

export function dataReceivedMultiProcess(data) {

  return function (dispatch) {
    dispatch(ApplicationReceivedData())
    return dispatch(UpdateGalleryContent(data))
  }
}


export function fetchImages(state) {

  let imgurGallery = state.GalleryView || 'hot'
  let imgurWindow = imgurGallery == 'top' ? (`/${state.GalleryWindow}/` || '/day/') : '';
  let imgurSort = state.GallerySort || 'viral'

  return function (dispatch) {

    dispatch(ApplicationFetchingData())

    fetch('/api')
// https://api.imgur.com/3/gallery/${imgurGallery}/${imgurSort}/0?showViral=${state.GalleryViralCheck}.json
    return fetch(`/api`,
    {
      method: 'POST',
      body: {
        imgurGallery,
        imgurSort,
        GalleryViralCheck: state.GalleryViralCheck
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(json => {
        if (json.data) {
          dispatch(dataReceivedMultiProcess(json.data))
        } else {
          let error = new Error("Response didn't have data")
          error.response = response
          throw error
        }
      }).catch(e => {
        dispatch(ApplicationErroredData(e.message))
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

module.exports = fetchImages;
