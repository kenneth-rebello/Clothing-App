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
                    id: 1,
                    linkUrl:'/hats'
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl:'/jackets'
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl:'/sneakers'
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://todateen.com.br/wp-content/uploads/2018/10/lili-reinhart-tem-novo-crush-descubra.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl:'/womens'
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://fashionhandbook.co.za/wp-content/uploads/2015/01/david-beckham-modern-essentials-2.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl:'/mens'
                }
            ]
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

export default Directory
