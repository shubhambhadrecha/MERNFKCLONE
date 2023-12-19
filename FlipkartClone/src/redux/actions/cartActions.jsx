
import axios from "axios"

import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_CAR_FAIL } from "../constants/cartConstants"

const URL = 'http://localhost:8000'




export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`)
        dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: ADD_TO_CAR_FAIL, payload: error.message })
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
}