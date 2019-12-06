const SHOP_DATA = {
  hats:{
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      },
      {
        id:38,
        name: 'Checked Overcoat',
        imageUrl: 'http://www.stylishfashionme.com/wp-content/uploads/2019/03/2-5-831x1024.jpg',
        price: 250
      },
      {
        id:39,
        name: 'Blue Dress',
        imageUrl: 'https://www.gotceleb.com/wp-content/uploads/photos/jessica-clements/rimowa-x-alexandre-arnault-pop-up-event-in-la/Jessica-Clements:-Rimowa-x-Alexandre-Arnault-Pop-Up-Event--01-662x993.jpg',
        price: 150
      },
      {
        id:40,
        name: 'Blue Denim',
        imageUrl: 'https://i.pinimg.com/originals/fc/e4/7d/fce47df177bc92dd59c14f9fbb32dd3b.jpg',
        price: 150
      },
      {
        id:42,
        name: 'White Sweater',
        imageUrl: 'https://i.pinimg.com/originals/59/3b/bb/593bbbce9ea515806de32e464de0181a.jpg',
        price: 150
      },
      {
        id:43,
        name: 'Grey Tie-Up',
        imageUrl: 'http://picture-cdn.wheretoget.it/ah76cq-l-610x610--jessica+clements-grey-tie-low+cut.jpg',
        price: 150
      }      

    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      },
      {
        id: 42,
        name: 'Red Sweater',
        imageUrl: 'http://m.blkfz.com/uploads/201920971/red-sweater-mens-fashion27440103186.png',
        price: 35
      },
      {
        id: 43,
        name: 'Checked Shirt',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2116968/2018/9/18/42973b63-44a9-489a-b75f-572420202e2f1537242959334-Roadster-Men-Maroon--Navy-Blue-Slim-Fit-Checked-Casual-Shirt-2081537242959073-1.jpg',
        price: 25
      },
      {
        id: 44,
        name: 'Shirt Hoodie',
        imageUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/9/038cf4e6-34ba-4fa7-ae3d-3356192c9e0c1568048285665-1.jpg',
        price: 80
      },
      {
        id: 45,
        name: 'Green Hoodie',
        imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6832928/2018/9/3/b30d609c-3a1e-4931-b964-890673761c5a1535967696376-WROGN-Men-Black-Printed-Hooded-Sweatshirt-7391535967695201-1.jpg',
        price: 150
      },
      {
        id: 46,
        name: 'Red T-shirt',
        imageUrl: 'https://i.pinimg.com/originals/78/2d/6b/782d6b571679572dab03161c1cb37ffc.jpg',
        price: 25
      },
      {
        id: 47,
        name: 'Red Kurta',
        imageUrl: 'https://www.dealsmagnet.com/Assets/Product/2019/May/22/Deal_13omY4hc.jpg',
        price: 30
      }
    ]
  }
};

export default SHOP_DATA;
