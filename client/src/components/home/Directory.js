import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

export class Directory extends Component {

    constructor(props){
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/67322249_463117184418842_2695296889079353193_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=8&oh=d6b18873e25ba6f1d95d75aaed91b90a&oe=5E0DB8E0&ig_cache_key=MjExMzg2MDI1NDM0NDYxOTE5Ng%3D%3D.2',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://fashionhandbook.co.za/wp-content/uploads/2015/01/david-beckham-modern-essentials-2.jpg',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, id, imageUrl, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory
