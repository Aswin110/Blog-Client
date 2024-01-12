import  {useState} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Link} from 'react-router-dom'

function Layout({title}) {
    const [user, setUser] = useState(undefined);

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
                                        <Link className="px-4 py-2" to="account">
                                            Account
                                        </Link>
                                        <Link className="px-4 py-2" to="logout">
                                            Log out
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