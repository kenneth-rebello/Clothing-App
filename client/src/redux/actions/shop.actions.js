import { UPDATE_COLLECTION } from "../types";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const updateCollections = () => dispatch => {

    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
        const collections = convertCollectionsSnapshotToMap(snapshot);
        dispatch({
            type: UPDATE_COLLECTION,
            payload: collections
        })
    });

}