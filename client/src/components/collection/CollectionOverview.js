import React from 'react';
import {connect} from 'react-redux';
import { selectShopDataForPreview } from '../../redux/selectors/shop.selector';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from './PreviewCollection';
import { Overview } from './collections-overview.styles';

const CollectionOverview = ({collections}) => {
    
    return (
        <Overview>
            {collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}/>
            ))}
        </Overview>
    )

}

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataForPreview
})

export default connect(mapStateToProps)(CollectionOverview);