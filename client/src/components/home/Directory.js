import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingData } from '../../redux/selectors/directory.selector';

export class Directory extends Component {

    constructor(props){
        super(props);
        this.state = {
            sections: this.props.sections
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...sectionProps}) => (
                    <MenuItem key={id} {...sectionProps}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sections: selectShoppingData
})
export default connect(mapStateToProps)(Directory)