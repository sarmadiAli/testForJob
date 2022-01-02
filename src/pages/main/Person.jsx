import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Card from '../../components/Card'
import axios from './../../instanceAxios'
import * as actions from './../../store/actions'
function Person({stateStore}) {
    const {user} = stateStore
    
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            axios(`users/${id}`).then(res => {
                dispatch(actions.getUserData(res.data.data))
            })
        }
    }, [id])


    return (
        <div>
            <Card data={user} width={"20rem"} moreData={false} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        stateStore: state,
    };
}

export default connect(mapStateToProps)(Person)