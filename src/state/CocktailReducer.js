export const itemsInitialState = {
  itemsList: [],
  loadingItemsList: false,
  item: undefined,
  loadingItem: false,
  itemId: undefined
}

export const SET_ITEMS_LIST = 'SET_ITEMS_LIST'
export const LOADING_ITEMS_LIST = 'LOADING_ITEMS_LIST'
export const SET_ITEM = 'SET_ITEM'
export const LOADING_ITEM = 'LOADING_ITEM'
export const ITEM_ID = 'ITEM_ID'
export const ADD_ITEM = 'ADD_ITEM'

export const itemsReducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_ITEMS_LIST:
      return { ...state, itemsList: payload, item: undefined }
    case LOADING_ITEMS_LIST:
      return { ...state, loadingItemsList: payload }
    case SET_ITEM:
      return { ...state, item: payload }
    case LOADING_ITEM:
      return { ...state, loadingItem: payload }
    case ITEM_ID:
      return { ...state, itemId: payload }
    case ADD_ITEM:
      return { ...state, itemsList: [payload, ...state.itemsList], item: payload }
    default:
      return state
  }
}
