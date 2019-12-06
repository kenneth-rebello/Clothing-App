const initialState = {
    sectionData: [
        {
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl:'shop/hats'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl:'shop/jackets'
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl:'shop/sneakers'
        },
        {
            title: 'Womens',
            imageUrl: 'https://todateen.com.br/wp-content/uploads/2018/10/lili-reinhart-tem-novo-crush-descubra.jpg',
            size: 'large',
            id: 4,
            linkUrl:'shop/womens'
        },
        {
            title: 'Mens',
            imageUrl: 'https://fashionhandbook.co.za/wp-content/uploads/2015/01/david-beckham-modern-essentials-2.jpg',
            size: 'large',
            id: 5,
            linkUrl:'shop/mens'
        }
    ]
}

const dirReducer = (state=initialState, action) => {

    const {type} = action;
    
    switch(type){
        default: 
            return state   
    }
}

export default dirReducer;