import firebase from 'firebase'

// .env に設定した値を取得してる
const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const Timestamp = firebase.firestore.Timestamp
export const FieldValue = firebase.firestore.FieldValue
export const db = firebase.firestore()
//  export const auth = firebase.auth()
export const storage = firebase.storage()
// export const functions = firebase.app().functions('asia-northeast1')
export const database = firebase.database()
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export default firebase.app()
