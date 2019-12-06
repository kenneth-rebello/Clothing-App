import React, { Component } from 'react'
import CollectionOverview from '../collection/CollectionOverview';

import {Route} from 'react-router-dom';
import Collection from '../collection/Collection';

export class Shop extends Component {

    render() {

        const {match} = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        )
    }

}

export default Shop