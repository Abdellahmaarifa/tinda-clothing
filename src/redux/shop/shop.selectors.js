import { createSelector } from 'reselect';
import { cartActionTypes } from '../cart/cart.types';
const selectShop = state => state.shop;

export const selectCategories = createSelector(
    [selectShop],
    shop => shop.categories
);

export const selectCollections = (type) => createSelector(
    [selectCategories],
    categories => categories[type].collections
);
export const selectCollection = (itemUrlParam, type) => createSelector(
    [selectCollections(type)],
    collections => collections[itemUrlParam]
);
