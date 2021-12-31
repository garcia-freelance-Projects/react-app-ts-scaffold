import {BrowserRouter, Navigate, NavLink} from "react-router-dom";
import {Routes, Route} from "react-router-dom";

import logo from '../logo.svg'

import {LazyPage1,LazyPage2,LazyPage3}  from '../01-lazyload/pages'

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo"/>
                        <ul>
                            <li>
                                <NavLink to="/lazy1"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy2"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy3"
                                         className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1/>}/>
                    <Route path="lazy2" element={<LazyPage2/>}/>
                    <Route path="lazy3" element={<LazyPage3/>}/>

                    <Route path="/*" element={<Navigate to="/lazy1" replace/>}/>
                </Routes>
            </BrowserRouter>,
        </>
    );
};

export default Navigation;
