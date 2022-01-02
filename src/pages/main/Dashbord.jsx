import React, { useEffect } from 'react'
import SocketIOClient from 'socket.io-client'


export default function Dashbord() {
    let assets = ' bitcoin, tron, ethereum, usdt'
    // const socket = React.useRef(SocketIOClient.connect(`wss://ws.coincap.io/prices?assets=${assets}`));
    useEffect(() =>{
            // console.log('socket' , socket)
    },[])
    return (
        <div>

        </div>
    )
}

