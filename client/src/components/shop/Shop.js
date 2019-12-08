import React, { Component } from 'react';
import {connect} from 'react-redux';
import CollectionOverview from '../collection/CollectionOverview';
import {Route} from 'react-router-dom';
import Collection from '../collection/Collection';
import { updateCollections } from '../../redux/actions/shop.actions';
import withSpinner from '../with-spinner/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

export class Shop extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        this.props.updateCollections();
    }

    render() {

        const {match, loading} = this.props;

        return (
            <div>
                <Route exact path={`${match.path}`} 
                    render={(props) => 
                        <CollectionOverviewWithSpinner isLoading={loading} {...props}/>
                    }
                />
                <Route path={`${match.path}/:collectionId`} 
                    render={(props) => 
                        <CollectionWithSpinner isLoading={loading} {...props}/>
                    }
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    loading: state.shop.isLoading
})

const mapDispatchToProps = dispatch =>({
    updateCollections: () => dispatch(updateCollections())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);