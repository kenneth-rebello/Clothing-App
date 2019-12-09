import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import { DirectoryDiv } from './directory.styles.js';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingData } from '../../redux/selectors/directory.selector';

const Directory = (props) => {

    const [sections] = useState(props.sections)

    return (
        <DirectoryDiv>
            {sections.map(({id, ...sectionProps}) => (
                <MenuItem key={id} {...sectionProps}/>
            ))}
        </DirectoryDiv>
    )

}

const mapStateToProps = createStructuredSelector({
    sections: selectShoppingData
})
export default connect(mapStateToProps)(Directory)