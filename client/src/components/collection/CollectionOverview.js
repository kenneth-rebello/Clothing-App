import React, { Component } from 'react';
import {connect} from 'react-redux';
import './collections-overview.styles.scss';
import { selectShopDataForPreview } from '../../redux/selectors/shop.selector';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from './PreviewCollection';

export class CollectionOverview extends Component {

    render() {
        const {collections} = this.props;
        
        return (
            <div>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataForPreview
})

export default connect(mapStateToProps)(CollectionOverview);