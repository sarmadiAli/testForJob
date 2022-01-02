import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Card from '../../components/Card'
import axios from './../../instanceAxios'
import * as actions from './../../store/actions'

function Products({ stateStore }) {
    const { products } = stateStore
    const dispatch = useDispatch()
    useEffect(() => {
        axios(`products`).then(res => {
            dispatch(actions.getProductsData(res.data.data))
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                {products.map(ele => ((
                    <div key={ele.id} className="col-lg-4 mt-2 col-sm-6 col-xs-6 ">
                        <Card data={ele} toRout="product" />
                    </div>

                )))}
            </div>

        </div>
   )
}

function mapStateToProps(state) {
    return {
        stateStore: state,
    };
}

export default connect(mapStateToProps)(Products)