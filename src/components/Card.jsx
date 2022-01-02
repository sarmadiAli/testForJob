import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Link,
} from "react-router-dom";
export default function Card({ data, width = "18rem", toRout, moreData = true }) {
    const history = useHistory()
    return (
        <div className="card" style={{ width: width, background: data?.color ?? "#FFF" }}>
            {data?.avatar && <img className="card-img-top" src={data.avatar} alt={`${data.George}-image`} />}
            <div className={`card-body ${data?.color && 'text-white'}`}>
                <h5 className="card-title">  {data.first_name ? (data.first_name + data.last_name) : data?.name || ''}   </h5>
                <p className="card-text ">
                    {data.email && data.email}
                </p>
                <p className="card-text ">
                    {data.pantone_value && data.pantone_value}
                </p>
                <p className="card-text ">
                    {data.year && data.year}
                </p>
                {moreData && <Link className="btn btn-primary" to={`/${toRout}/${data.id}`}>اطلاعات بیشتر</Link>}
            </div>
        </div>
    )
}
