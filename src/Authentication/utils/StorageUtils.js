import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'dG6EABne5a'

export function getCookie(key) {
   return Cookie.get(key)
}

function setCookie(key, value) {
   Cookie.set(key, value, {
      expires: 30,
      path: '/'
   })
}

export function getAccessToken() {
   return getCookie(ACCESS_TOKEN)
}
export function setAccessToken(accessToken) {
<<<<<<< HEAD:src/Authentication/utils/StorageUtils.js
  alert(1)
  setCookie(ACCESS_TOKEN, accessToken)
=======
   setCookie(ACCESS_TOKEN, accessToken)
>>>>>>> a3c31a2efba81e86d571285c049fc53aa502a25d:src/utils/StorageUtils.js
}

export function clearUserSession() {
   Cookie.remove(ACCESS_TOKEN, { path: '/' })
}
