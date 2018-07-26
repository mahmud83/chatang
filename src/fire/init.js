import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyC5Tp3BYD0ZsVYVAc20PEIKQeO49lWdgk0',
  authDomain: 'chatang-01.firebaseapp.com',
  databaseURL: 'https://chatang-01.firebaseio.com',
  projectId: 'chatang-01',
  storageBucket: 'chatang-01.appspot.com',
  messagingSenderId: '307391607662'
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
