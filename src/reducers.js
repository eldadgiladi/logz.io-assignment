import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL, UPDATE_ITEM } from './constants'
import uuid from 'uuid'

const initialState = {
    itemsList: {}
}

export function shoppingList(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_ITEM:

            state = {
                ...state,
                itemsList: {
                    ...state.itemsList,
                    [uuid()]: {
                        name: action.name,
                        priceForEach: action.priceForEach,
                        quantity: action.quantity,
                    }
                }
            }
            return state;
        case REMOVE_ITEM:
            const { [action.id]: removedItem, ...newItemsList } = state.itemsList;
            return {
                ...state,
                itemsList: newItemsList
            };
        case REMOVE_ALL:
            return {
                ...state,
                itemsList:{}
            }
        case UPDATE_ITEM:
            return {
                ...state,
                itemsList:{
                    ...state.itemsList,
                    [action.id]:{
                        name: action.name,
                        priceForEach: action.priceForEach,
                        quantity: action.quantity,
                    }
                }
            }
        default:
            return state;
    }
}