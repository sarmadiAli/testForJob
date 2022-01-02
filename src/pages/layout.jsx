import React from 'react'
import Header from "../components/Header";
import MainContent from '../components/MainContent';
export default function layout() {
    return (
        <div className=" h-100 d-flex">
                <div style={{width:"100%"}}>
                    <Header />
                    <MainContent />     
                </div>
                

        </div>
    )
}
