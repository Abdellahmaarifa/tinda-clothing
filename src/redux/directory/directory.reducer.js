const INTIAL_STATE = {
    sections :  [
        {
          title: 'Girls',
          imageUrl: 'https://i.ibb.co/51WmKCk/winter-wonderland-1082511-640.jpg',
          id: 1,
          linkUrl: 'shop/girls'
        },
        {
          title: 'boys',
          imageUrl: 'https://i.ibb.co/942HNKk/cap-2923682-640.jpg',
          id: 2,
          linkUrl: 'shop/boys'
        },
        {
          title: 'babies',
          imageUrl: 'https://i.ibb.co/bXTsKRm/brothers-457237-640.jpg',
          id: 3,
          linkUrl: 'shop/babies'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/1qjKLCr/woman-837156-640.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/KwQphKL/male-3139289-640.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state=INTIAL_STATE, action) => { 
    switch (action.type) {
        default :
            return state;
    };
};

export default directoryReducer;