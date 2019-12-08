import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCJSBCz606EaPh_iumRLayz9lPQXRvjFdI",
    authDomain: "crowndb-ken07.firebaseapp.com",
    databaseURL: "https://crowndb-ken07.firebaseio.com",
    projectId: "crowndb-ken07",
    storageBucket: "crowndb-ken07.appspot.com",
    messagingSenderId: "469082919897",
    appId: "1:469082919897:web:14358b385ff955f2e1bfc8",
    measurementId: "G-EJ906H64P4"
}

export const createUserProfile = async (userAuth, additionalData) => {

    if(userAuth){
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        if(!snapShot.exists){

            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(err){
                console.log('Error creating message'+err.message)
            }
        }
        return userRef;
    }

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const convertedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }        
    });

    return convertedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;