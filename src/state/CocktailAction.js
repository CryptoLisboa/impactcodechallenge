import {
  SET_ITEMS_LIST, LOADING_ITEMS_LIST, SET_ITEM, LOADING_ITEM, ITEM_ID, ADD_ITEM
} from './CocktailReducer'

export const setItemList = val => ({ payload: val, type: SET_ITEMS_LIST })
export const loadingItemList = val => ({ payload: val, type: LOADING_ITEMS_LIST })

export const setItem = val => ({ payload: val, type: SET_ITEM })
export const loadingItem = val => ({ payload: val, type: LOADING_ITEM })

export const setItemId = val => ({ payload: val, type: ITEM_ID })

export const addItem = val => ({ payload: val, type: ADD_ITEM })
