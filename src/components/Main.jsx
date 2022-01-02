import React, { useEffect } from 'react'
import axios from './../instanceAxios'
import { useDispatch } from 'react-redux'
import * as action from './../store/actions/index'
export default function Main(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        axios('users').then(res => {
            dispatch(action.getUsersData(res.data.data))
        })
    }, [])


    return (
        <>
            {props.children}
        </>
    )
}
