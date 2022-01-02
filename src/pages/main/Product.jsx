import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Card from '../../components/Card'
import axios from './../../instanceAxios'
import * as actions from './../../store/actions'

function Product({ stateStore }) {
    const { product } = stateStore

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            axios(`products/${id}`).then(res => {
                dispatch(actions.getProductData(res.data.data))
            })
        }
    }, [id])


    return (
        <>
            <Card data={product} width={"100%"} moreData={false} />
        </>
    )
}
function mapStateToProps(state) {
    return {
        stateStore: state,
    };
}

export default connect(mapStateToProps)(Product)