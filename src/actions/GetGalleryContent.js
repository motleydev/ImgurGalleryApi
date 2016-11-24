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



export function fetchImages() {

  return function (dispatch) {

    dispatch(ApplicationFetchingData())

    return fetch(`https://api.imgur.com/3/gallery/hot/viral/0.json`, {
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID beba972e29f0b1d'
      }
    })
      .then(checkStatus)
      .then(response => {
        console.log(response)
        response.json()
      })
      .then(json => {
        dispatch(UpdateGalleryContent(json.data))
      }

      ).catch(e => {
        dispatch(ApplicationErroredData(e.message))
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

module.exports = fetchImages;
