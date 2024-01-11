import  {useState} from 'react';

function Layout() {
    const [user, setUser] = useState(undefined);

    return(
        <div className="h-full flex flex-col">
            <div className="sticky top-0 px-6 py-3 flex justify-between flex-wrap">
                <a href="/">BLOGS</a>
                <nav>
                    <ul className="flex gap-4">
                        {!user ? (
                            <>
                                <li>
                                    <a href='/login'>LOG IN</a>
                                </li>
                                <li>
                                    <a href='/signup'>SIGN UP</a>
                                </li>
                            </>
                        ): (
                            <>
                                <a className="px-4 py-2" href="/account">
                                   Account
                                </a>
                                <a className="px-4 py-2" href="/logout">
                                    Log out
                                </a>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Layout;