import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL, UPDATE_ITEM } from './constants'

export const addItem = ({ name, quantity, priceForEach }) => ({
    type: ADD_ITEM,
    name,
    quantity,
    priceForEach
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
})

export const removeAll = () => ({
    type: REMOVE_ALL
})

export const updateItem = (id, { name, quantity, priceForEach }) => ({
    type: UPDATE_ITEM,
    id,
    name,
    quantity,
    priceForEach
})