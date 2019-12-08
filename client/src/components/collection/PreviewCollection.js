import React from 'react';

import CollectionItem from './CollectionItem';
import { CollectionPreview, Title, Preview } from './collection-preview.styles';

const PreviewCollection = ({title, items}) => {
    return (
        <CollectionPreview>
            <Title to={`/shop/${title.toLowerCase()}`}>{title}</Title>
            <Preview className="preview">
                {items.filter((item, idx) => idx < 4 ).map( item => (
                    <CollectionItem key={item.id} item={item}/>
                ) )}
            </Preview>
        </CollectionPreview>
    )
}

export default PreviewCollection;