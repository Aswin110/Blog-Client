import  {useState, useEffect} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Link} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';

function Layout({title}) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token) {
            const decoded = jwtDecode(token)
            setUser(decoded);
        }
      }, [])

    function logOut(){
        localStorage.removeItem('token')
        setUser(undefined)
    }

    return(
        <HelmetProvider>
            <>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <div className="h-full flex flex-col bg-slate-300">
                    <div className="sticky top-0 px-6 py-3 flex justify-between flex-wrap">
                        <Link to="/">BLOGS</Link>
                        <nav>
                            <ul className="flex gap-4">
                                {!user ? (
                                    <>
                                        <li>
                                            <Link to='/login'>LOG IN</Link>
                                        </li>
                                        <li>
                                            <Link to='/signup'>SIGN UP</Link>
                                        </li>
                                    </>
                                ): (
                                    <>
                                        {/* <Link to="account">
                                            Account
                                        </Link> */}
                                        <Link to="" refresh='true'>
                                            <button onClick={logOut}>Log out</button>
                                        </Link>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        </HelmetProvider>
    )
}

export default Layout;