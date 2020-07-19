const SHOP_DATA = {
  womens: {
    id: 1,
    title: 'Womens',
    routeName: 'womens',
    collections:{
      hats:{     
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 1,
            name: 'Fedora Brown',
            imageUrl: 'https://i.ibb.co/0FVQjCf/Fedora-Brown-Australia-Hat-Tough.png',
            price: 25
          },
          {
            id: 2,
            name: 'Fedora Hat',
            imageUrl: 'https://i.ibb.co/DVgJ7Jx/Fedora-Hat-Designer.png',
            price: 18
          },
          {
            id: 3,
            name: 'Fedora Braid',
            imageUrl: 'https://i.ibb.co/DgpBxsW/Fedora-Braid-decorated-camel-wide-brimmed.png',
            price: 35
          },
          {
            id: 4,
            name: 'Hat Baseball cap',
            imageUrl: 'https://i.ibb.co/znXcbHm/Hat-Baseball-cap.png',
            price: 25
          },
          {
            id: 5,
            name: 'Hat Pink Gratis',
            imageUrl: 'https://i.ibb.co/gFGW9wF/Hat-Pink-Gratis.png',
            price: 18
          },
          {
            id: 6,
            name: 'Straw hat Cap ',
            imageUrl: 'https://i.ibb.co/MpQXK76/Straw-hat-Cap-Sombrero.png',
            price: 14
          },
          {
            id: 7,
            name: 'Baseball cap',
            imageUrl: 'https://i.ibb.co/qWqcbXz/Baseball-cap-Reebok-Streetwear-Hat.png',
            price: 18
          },
          {
            id: 8,
            name: 'Flat cap',
            imageUrl: 'https://i.ibb.co/rwmcVWM/Baseball-cap-T-shirt-Hat-Flat-cap.png',
            price: 14
          },
          {
            id: 9,
            name: 'Sun hat Cap',
            imageUrl: 'https://i.ibb.co/gmf9vfV/Sun-hat-Cap-Fedora.png',
            price: 16
          }
        ]
      },
      sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: 10,
            name: 'Louisiana Sneakers',
            imageUrl: 'https://i.ibb.co/kJChY5k/Louisiana-State-University-Sneakers.png',
            price: 220
          },
          {
            id: 11,
            name: 'Nike Air Max',
            imageUrl: 'https://i.ibb.co/4wqGMMd/Nike-Air-Max-Sneakers-Womens.png',
            price: 280
          },
          {
            id: 12,
            name: 'Sneakers Shoe',
            imageUrl: 'https://i.ibb.co/Z89GXcC/Sneakers-Shoe-Footwear.png',
            price: 110
          },
          {
            id: 13,
            name: 'Sneakers Skechers',
            imageUrl: 'https://i.ibb.co/pzgjKf5/Sneakers-Skechers-Shoe-Running-Nike.png',
            price: 160
          },
          {
            id: 14,
            name: 'Sneakers Slipper Skate',
            imageUrl: 'https://i.ibb.co/rZYnY2N/Sneakers-Slipper-Skate-shoe-Footwear.png',
            price: 160
          },
          {
            id: 15,
            name: 'VansShoe',
            imageUrl: 'https://i.ibb.co/KxgyrPQ/Vans-Shoe-Clothing-Sneakers-Orange.png',
            price: 160
          },
          {
            id: 16,
            name: 'Nike Air Max Huarache',
            imageUrl: 'https://i.ibb.co/1fxJSVB/Nike-Air-Max-Huarache-Shoe-Sneakers.png',
            price: 190
          }
        ]
      },
      jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 18,
            name: 'Coat Jacket Hood',
            imageUrl: 'https://i.ibb.co/3SPRqxv/Coat-Jacket-Hood-Winter-clothing.png',
            price: 125
          },
          {
            id: 19,
            name: 'Raincoat Jacket Daunenjacke',
            imageUrl: 'https://i.ibb.co/NTNR6Md/Raincoat-Jacket-Daunenjacke-Hood-Pocket.png',
            price: 90
          },
          {
            id: 20,
            name: 'T-shirt Leather jacket',
            imageUrl: 'https://i.ibb.co/8rq4xmq/T-shirt-Leather-jacket-Denim-Coat.png',
            price: 90
          },
          {
            id: 21,
            name: 'Black zip up leather',
            imageUrl: 'https://i.ibb.co/Qm0M47L/Black-zip-up-leather-jacket.png',
            price: 165
          },
          {
            id: 22,
            name: 'Jeans Jacket Denim',
            imageUrl: 'https://i.ibb.co/wrk3gFJ/Jeans-Jacket-Denim-Pants-Blouson.png',
            price: 185
          }
        ]
      } 
    }
  },
  mens: {
    id: 2,
    title: 'Mens',
    routeName: 'mens',
    collections:{
      hats:{
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 23,
            name: 'bowler hat',
            imageUrl: 'https://i.ibb.co/McvzBMz/Mens-hat-black-and-red-bowler-hat.png',
            price: 25
          },
          {
            id: 24,
            name:'Hexendoktor Hut',
            imageUrl: 'https://i.ibb.co/7bjM6t6/Top-hat-Hexendoktor-Hut-schwarz-Bone-Feather.png',
            price: 18
          },
          {
            id: 25,
            name: 'T-shirt Hat',
            imageUrl: 'https://i.ibb.co/k99GX7w/T-shirt-Hat-Louis-Vuitton-Baseball-cap-Clothing.png',
            price: 35
          },
          {
            id: 26,
            name: 'Fullcap Sports',
            imageUrl: 'https://i.ibb.co/D9pdJSV/Baseball-cap-Hat-Fullcap-Sports.png',
            price: 25
          },
          {
            id: 27,
            name: 'Bucket hat China',
            imageUrl: 'https://i.ibb.co/hZgH1sN/Bucket-hat-China-Cap-Camouflage.png',
            price: 18
          },
          {
            id: 28,
            name: 'Palm Tree Cap',
            imageUrl: 'https://i.ibb.co/9G9yV1p/Cap-Sun-hat-Arc-teryx-Bucket-hat.png',
            price: 14
          },
          {
            id: 29,
            name: 'Red Beanie',
            imageUrl: 'https://i.ibb.co/qDkPxkY/Cowboy-hat-Mxfasica.png',
            price: 18
          },
          {
            id: 30,
            name: 'Wolf Cap',
            imageUrl: '	https://i.ibb.co/K2KLFCS/Hat-Yellow.png',
            price: 14
          },
          {
            id: 31,
            name: 'Baseball cap',
            imageUrl: 'https://i.ibb.co/7jH9Z1n/Baseball-cap-Designer-Hat.png',
            price: 16
          }
        ]
      },
      sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [

          {
            id: 32,
            name: 'Nike Air Max',
            imageUrl: 'https://i.ibb.co/L01dSTq/Nike-Air-Max-Sneakers.png',
            price: 220
          },
          {
            id: 33,
            name: 'Nike Air Max',
            imageUrl: 'https://i.ibb.co/xhszM43/Nike-Free-Shoe-Sneakers-Nike-Air-Max.png',
            price: 280
          },
          {
            id: 34,
            name: 'Nike Flywire',
            imageUrl: 'https://i.ibb.co/2SrTwdk/Nike-Free-Shoe-Sneakers-Nike-Flywire.png',
            price: 110
          },
          {
            id: 35,
            name: 'Mizuno Corporation',
            imageUrl: 'https://i.ibb.co/8s6W4qY/Sneakers-Mizuno-Corporation-Shoe-Adidas.png',
            price: 160
          },
          {
            id: 36,
            name: 'Adidas Salomon',
            imageUrl: 'https://i.ibb.co/qFj753M/Sneakers-Shoe-Adidas-Salomon-Group.png',
            price: 160
          },
          {
            id: 37,
            name: 'Puma Oakley',
            imageUrl: 'https://i.ibb.co/vxRwRSD/Sneakers-Shoe-Puma-Oakley.png',
            price: 160
          },
          {
            id: 38,
            name: 'Converse Sneaker',
            imageUrl: 'https://i.ibb.co/wwmsWKf/Chuck-Taylor-All-Stars-Converse-Sneakers-Shoe-High-top.png',
            price: 190
          },
          {
            id: 39,
            name: 'Hiking Boot',
            imageUrl: 'https://i.ibb.co/3SjcWH4/Hiking-boot-Jack-Wolfskin.png',
            price: 200
          }
        ]
      },
      jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 40,
            name: 'Leather jacket Flight',
            imageUrl: 'https://i.ibb.co/Drzn11T/Leather-jacket-Flight.png',
            price: 125
          },
          {
            id: 41,
            name: 'Motorcycle Zipper',
            imageUrl: 'https://i.ibb.co/gJR2SMg/Leather-jacket-Motorcycle-Zipper.png',
            price: 90
          },
          {
            id: 42,
            name: 'Flight Jacket',
            imageUrl: 'https://i.ibb.co/zSrMwts/MA-1-bomber-jacket-Flight-jacket-Alpha-Industries-Clothing.png',
            price: 90
          },
          {
            id: 43,
            name: 'Jacket Hoodie Down',
            imageUrl: 'https://i.ibb.co/K6rGZbr/Jacket-Hoodie-Down-feather-Patagonia-Daunenjacke.png',
            price: 165
          },
          {
            id: 44,
            name: 'Sheepskin Shearling',
            imageUrl: 'https://i.ibb.co/tZCNDjw/Leather-jacket-Flight-jacket-Sheepskin-Shearling-A-2-jacket.png',
            price: 185
          }
        ]
      } 
    }
  },
  girls: {
    id: 3,
    title: 'Girls',
    routeName: 'girls',
    collections:{
      hats:{
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 45,
            name: 'Bucket Hat',
            imageUrl: 'https://i.ibb.co/TKrbM04/Bucket-hat-Sun-hat-Cap-Clothing.png',
            price: 25
          },
          {
            id: 46,
            name: 'Pom Knitting',
            imageUrl: 'https://i.ibb.co/pJV6nPM/Cap-Hat-Pom-pom-Knitting-Wool.png',
            price: 18
          },
          {
            id: 47,
            name: 'Cap Winter Beret',
            imageUrl: 'https://i.ibb.co/nQXr8bB/Hat-Cap-Winter-Beret.png',
            price: 35
          },
          {
            id: 48,
            name: 'Hat Sombrero Winter',
            imageUrl: 'https://i.ibb.co/YXd1LS8/Hat-Sombrero-Winter.png',
            price: 25
          },
          {
            id: 49,
            name: 'Hat Winter Cap',
            imageUrl: 'https://i.ibb.co/X53c4LR/Hat-Winter-Cap.png',
            price: 18
          },
          {
            id: 50,
            name: 'Sun Hat Designer',
            imageUrl: 'https://i.ibb.co/TBVSrMk/Sun-hat-Designer-Children-s-summer-straw-hat.png',
            price: 14
          },
          {
            id: 51,
            name: 'Brown Straw',
            imageUrl: 'https://i.ibb.co/y5mSKGm/Brown-straw-hat-with-pink-flower-accent.png',
            price: 18
          },
          {
            id: 52,
            name: 'Sombrero xchng',
            imageUrl: 'https://i.ibb.co/Fz71wGY/Brown-red-and-blue-hat-Sombrero-xchng-Hat.png',
            price: 14
          }
        ]
      },
      sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: 54,
            name: 'Chuck Taylor',
            imageUrl: 'https://i.ibb.co/6mhwkfh/Sneakers-Chuck-Taylor-All-Stars-Converse-Shoe-Skroutz.png',
            price: 220
          },
          {
            id: 55,
            name: 'British Knights',
            imageUrl: 'https://i.ibb.co/sFBBwHs/Sneakers-British-Knights-Air-Force-1-Shoe-High-top.png',
            price: 280
          },
          {
            id: 56,
            name: 'Skech Air',
            imageUrl: 'https://i.ibb.co/qpptwmw/Skech-Air-Extreme-Skechers.png',
            price: 110
          },
          {
            id: 57,
            name: 'Footwear Snow Boot',
            imageUrl: 'https://i.ibb.co/q1CCqn7/Shoe-Sneakers-Footwear-Snow-boot.png',
            price: 160
          },
          {
            id: 58,
            name: 'Shoe Sneakers Pink',
            imageUrl: 'https://i.ibb.co/qpwVqs2/Shoe-Sneakers-Pink-Child-Leather.png',
            price: 160
          },
          {
            id: 59,
            name: 'Air Jordan Sneakers',
            imageUrl: 'https://i.ibb.co/my3GGmh/Air-Jordan-Sneakers-Nike-Skate-shoe.png',
            price: 160
          },
          {
            id: 60,
            name: 'Shoe Fashion Accessory',
            imageUrl: 'https://i.ibb.co/xfsKxV0/T-shirt-Sneakers-Shoe-Fashion-accessory-Clothing.png',
            price: 190
          },
          {
            id: 61,
            name: 'Sneakers Sportswear',
            imageUrl: 'https://i.ibb.co/xf8Rx7J/Sneakers-Sportswear-Shoe-Walking.png',
            price: 200
          }
        ]
      },
      jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 62,
            name: 'Raincoat Hood Bluza',
            imageUrl: 'https://i.ibb.co/ynCNMhq/Raincoat-Hood-Bluza-Jacket-Sleeve.png',
            price: 125
          },
          {
            id: 63,
            name: 'T-shirt Bluza Feather',
            imageUrl: 'https://i.ibb.co/K627VNC/T-shirt-Bluza-Feather-Clothing.png',
            price: 90
          },
          {
            id: 64,
            name: 'Down Feather',
            imageUrl: 'https://i.ibb.co/x3nDpPj/Down-feather-Red.png',
            price: 90
          },
          {
            id: 65,
            name: 'Fur Jacket Kappa',
            imageUrl: 'https://i.ibb.co/nwPG5Xn/Fur-clothing-Fake-fur-Jacket-Kappa.png',
            price: 165
          },
          {
            id: 66,
            name: 'Jeans Jacket',
            imageUrl: 'https://i.ibb.co/wrk3gFJ/Jeans-Jacket-Denim-Pants-Blouson.png',
            price: 185
          }
        ]
      } 
    }
  },
  boys: {
    id: 4,
    title: 'Boys',
    routeName: 'boys',
    collections:{
      hats:{
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 67,
            name: 'Black beret Cloche',
            imageUrl: 'https://i.ibb.co/YZtWj48/Black-beret-Cloche-hat-Military-beret.png',
            price: 25
          },
          {
            id: 68,
            name: 'Cowboy hat Cap',
            imageUrl: 'https://i.ibb.co/Z8CN3B1/Cowboy-hat-Cap-Stetson-Bucket-hat.png',
            price: 18
          },
          {
            id: 69,
            name: 'Baseball cap',
            imageUrl: 'https://i.ibb.co/tH3Tyhj/Hat-Baseball-cap-Clothing.png',
            price: 35
          },
          {
            id: 70,
            name: 'Hoodie T-shirt cap',
            imageUrl: 'https://i.ibb.co/1qqjBj3/Hoodie-T-shirt-Baseball-cap-Hat.png',
            price: 25
          },
          {
            id: 71,
            name: 'New York Yankees',
            imageUrl: 'https://i.ibb.co/Ptfk3SD/New-York-Yankees.png',
            price: 18
          },
          {
            id: 72,
            name: 'Sherlock Holmes',
            imageUrl: 'https://i.ibb.co/42DvT5h/Sherlock-Holmes-Top-hat-Deerstalker-Cap.png',
            price: 14
          },
          {
            id: 73,
            name: 'Trucker hat',
            imageUrl: 'https://i.ibb.co/5nGhcVL/Trucker-hat-Baseball-cap-Bucket-hat.png',
            price: 18
          },
          {
            id: 74,
            name: 'Military camouflage Hat',
            imageUrl: 'https://i.ibb.co/D8vZDm7/Baseball-cap-Military-camouflage-Hat-Army-Peaked-cap.png',
            price: 14
          },
          {
            id: 75,
            name: 'Baseball cap',
            imageUrl: 'https://i.ibb.co/R42WZfp/Baseball-cap.png',
            price: 16
          }
        ]
      },
      sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [

          {
            id: 76,
            name: 'Skate shoe Leather',
            imageUrl: 'https://i.ibb.co/rtxzpVT/Sneakers-Skate-shoe-Leather-Casual-attire.png	',
            price: 220
          },
          {
            id: 77,
            name: 'Vans Sneakers Skate',
            imageUrl: 'https://i.ibb.co/8xPjtn0/Vans-Sneakers-Skate-shoe-Toddler.png',
            price: 280
          },
          {
            id: 78,
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/ZHsgTL1/Adidas-Yeezy-Adidas-Originals-Shoe-Homo-sapiens.png',
            price: 110
          },
          {
            id: 79,
            name: 'Armour Clothing',
            imageUrl: 'https://i.ibb.co/m8Q1xsP/Armour-Clothing-Sneakers.png',
            price: 160
          },
          {
            id: 80,
            name: 'Canterbury Boys',
            imageUrl: 'https://i.ibb.co/DDkM80G/Canterbury-Boys-Thrillseeker.png',
            price: 160
          },
          {
            id: 81,
            name: 'NikeAir Max',
            imageUrl: 'https://i.ibb.co/mGHQ59R/Shoe-Nike-Air-Max-Sneakers-Running.png',
            price: 160
          },
          {
            id: 82,
            name: 'Shoe Limited',
            imageUrl: 'https://i.ibb.co/Xs9JXCD/Shoe-Sneakers.png',
            price: 190
          },
          {
            id: 83,
            name: 'Skate shoe',
            imageUrl: 'https://i.ibb.co/dk9VzX1/Skate-shoe-Sneakers-Boy.png',
            price: 200
          }
        ]
      },
      jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 84,
            name: 'Jacket Hoodie Down',
            imageUrl: 'https://i.ibb.co/K6rGZbr/Jacket-Hoodie-Down-feather-Patagonia-Daunenjacke.png',
            price: 125
          },
          {
            id: 85,
            name: 'Jean jacket',
            imageUrl: 'https://i.ibb.co/mJJK2H3/Jean-jacket-Coat-Leather-jacket-Denim.png',
            price: 90
          },
          {
            id: 86,
            name: 'Raincoat Jacket',
            imageUrl: 'https://i.ibb.co/NTNR6Md/Raincoat-Jacket-Daunenjacke-Hood-Pocket.png',
            price: 90
          },
          {
            id: 87,
            name: 'Hood Winter',
            imageUrl: 'https://i.ibb.co/3SPRqxv/Coat-Jacket-Hood-Winter-clothing.png',
            price: 165
          },
          {
            id: 88,
            name: 'Parka Daunenjacke Hood',
            imageUrl: 'https://i.ibb.co/N1NxNPC/Jacket-Child-Parka-Daunenjacke-Hood.png',
            price: 185
          }
        ]
      } 
    }
  },
  babies: {
    id: 5,
    title: 'Boys',
    routeName: 'boys',
    collections:{
      hats:{
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 89,
            name: 'Knit cap Hat',
            imageUrl: 'https://i.ibb.co/zF34tvZ/Knit-cap-Hat-Wool-Bonnet.png',
            price: 25
          },
          {
            id: 90,
            name: 'Toddler S Blue',
            imageUrl: 'https://i.ibb.co/VjZMfmB/Toddler-s-blue-and-white-hat.png',
            price: 18
          },
          {
            id: 91,
            name: 'Beanie Knit cap',
            imageUrl: 'https://i.ibb.co/02BVtxX/Beanie-Knit-cap-Hat-Clothing.png',
            price: 35
          },
          {
            id: 92,
            name: 'Bowler hat Bucket',
            imageUrl: 'https://i.ibb.co/s6bgmxs/Bowler-hat-Bucket-hat-Fashion-Cap.png',
            price: 25
          },
          {
            id: 93,
            name: 'Sherlock Holmes',
            imageUrl: 'https://i.ibb.co/42DvT5h/Sherlock-Holmes-Top-hat-Deerstalker-Cap.png',
            price: 18
          },
          {
            id: 94,
            name: 'Cap Hat Keffiyeh',
            imageUrl: 'https://i.ibb.co/rMdYP0c/Cap-Hat-Keffiyeh-Sleeve.png',
            price: 14
          },
          {
            id: 95,
            name: 'Gray-beanie',
            imageUrl: 'https://i.ibb.co/R7DLmLc/Gray-beanie-Beanie-Babies-Hat.png',
            price: 18
          },
          {
            id: 96,
            name: 'Hat Sombrero Cotton',
            imageUrl: 'https://i.ibb.co/pZNPnLL/Hat-Sombrero-Cotton-Infant.png',
            price: 14
          },
          {
            id: 97,
            name: 'Infant Sun hat',
            imageUrl: 'https://i.ibb.co/161tr10/Infant-Sun-hat-Cap-Child.png',
            price: 16
          }
        ]
      },
      sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: 98,
            name: 'Blue Shoe Sneakers',
            imageUrl: 'https://i.ibb.co/WDCpYrY/Blue-Shoe-Sneakers-Leather.png',
            price: 200
          },
          {
            id: 99,
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/VWb0K9L/Chuck-Taylor-All-Stars.png',
            price: 280
          },
          {
            id: 100,
            name: 'Nike Shoe',
            imageUrl: 'https://i.ibb.co/8sbpzQC/Nike-Free-Shoe-Sneakers-Child.png',
            price: 110
          },
          {
            id: 101,
            name: 'Shoe Sneakers Pink',
            imageUrl: 'https://i.ibb.co/qpwVqs2/Shoe-Sneakers-Pink-Child-Leather.png',
            price: 160
          },
          {
            id: 102,
            name: 'Slipper Shoe Sandal',
            imageUrl: 'https://i.ibb.co/YyhMJrP/Slipper-Shoe-Sandal-Infant.png',
            price: 160
          },
          {
            id: 103,
            name: 'Sandal Shoe',
            imageUrl: 'https://i.ibb.co/TbKmG4h/Sneakers-Sandal-Shoe-Walking.png',
            price: 160
          },
          {
            id: 104,
            name: 'Sportswear Shoe',
            imageUrl: 'https://i.ibb.co/xf8Rx7J/Sneakers-Sportswear-Shoe-Walking.png',
            price: 190
          }
        ]
      },
      jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 106,
            name: 'Infant Zipper Hood',
            imageUrl: 'https://i.ibb.co/rHpvgkT/H-M-Child-Infant-Zipper-Hood.png',
            price: 125
          },
          {
            id: 107,
            name: 'Burberry boys',
            imageUrl: 'https://i.ibb.co/sJcsgpB/Burberry-boys.png',
            price: 90
          },
          {
            id: 108,
            name: 'Shiba Inu Winter',
            imageUrl: 'https://i.ibb.co/d2JzLtH/Shiba-Inu-Winter-clothing.png',
            price: 90
          },
          {
            id: 109,
            name: 'Jacket Coat Windbreaker',
            imageUrl: 'https://i.ibb.co/RBgj3XD/Hoodie-Jacket-Coat-Windbreaker-Childrens-clothing.png',
            price: 165
          },
          {
            id: 110,
            name: 'Hoodie Jacket',
            imageUrl: 'https://i.ibb.co/HtHsDX0/Hoodie-Jacket-Childrens-clothing-Outerwear.png',
            price: 185
          }
        ]
      } 
    }
  }
}

export default SHOP_DATA;
