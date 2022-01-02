import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card';
function Persons({ stateStore }) {
    const users = stateStore.users
    return (
        <>
            <div className="container">
                <div className="row">
                    {users.map(ele => ((
                        <div  key={ele.id} className="col-lg-4 mt-2 col-sm-6 col-xs-6 ">
                            <Card data={ele} toRout="person" />
                        </div>

                    )))}
                </div>

            </div>


        </>
    )
}

function mapStateToProps(state) {
    return {
        stateStore: state, 
    };
}

export default connect(mapStateToProps)(Persons)