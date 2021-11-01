import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = async () => {
    try {
        await auth.signInWithPopup( GoogleProvider )
    } catch(err) {
        // WILL DO REDIRECT TO ERROR PAGE!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        console.error(err)
    }
}

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return
    const { uid } = userAuth

    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const timestamp = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            })
        } catch(err) {
            console.error(err)
        }
    }

    return userRef
}