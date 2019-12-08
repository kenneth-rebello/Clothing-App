import React from 'react';
import {CollectionPage, Title, Items} from './collection.styles.js';
import {connect} from 'react-redux';

import CollectionItem from './CollectionItem';
import { selectCollection } from '../../redux/selectors/shop.selector';


const Collection = ({collection}) => {

    const {title, items} = collection;

    return (
        <CollectionPage>
            <Title>{title}</Title>
            <Items>
                {items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </Items>
        </CollectionPage>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);