import React from 'react'
import { connect } from 'react-redux';
import {
    Link,
} from "react-router-dom";
function Header({ stateStore }) {
    const { admin } = stateStore
    return (
        <header className="p-3 bg-dark text-white w-80 h-10 ">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link className="nav-link px-2 text-white" to="/">لیست افراد</Link>

                        </li>
                        <li>
                            <Link className="nav-link px-2 text-white" to="/products">لیست محصولات</Link>

                        </li>
                        <li>
                            <Link className="nav-link px-2 text-white" to="/dashbord">داشبورد</Link>

                        </li>
                    </ul>

                    {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"> */}
                    {/* <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" /> */}
                    {/* </form> */}
                    <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <p>{admin.first_name} {admin.last_name}</p>
                    </div>


                    <div className="text-end">
                        <img src={admin.avatar} style={{ width: '55px', borderRadius: '40%' }} alt={admin.first_name + "avatar"} />
                    </div>

                </div>
            </div>
        </header>
    )
}


function mapStateToProps(state) {
    return {
        stateStore: state,
    };
}

export default connect(mapStateToProps)(Header)