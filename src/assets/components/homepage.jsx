import { useState, useEffect } from "react";
import Layout from "./layout";
import LoadingSpinner from "./loading";
import axios from "axios";
import { Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function HomePage () {
    const apiUrl = import.meta.env.VITE_URL;
    const [userDetails, useUserDetails] = useState({})

    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function post () {
            try{
                const res = await axios.get(`${apiUrl}/posts`)
                setPosts(res.data)
                setLoading(false)
            } 
            catch(err) {
                console.log(err);
            }
        }
        post()
    },[] )

    return (
        <>
            <Layout 
                title='Home Page'
            />
            <div>
                {loading ?
                    <div className="flex justify-center content-center h-full">
                        <LoadingSpinner/>
                    </div>
                    :(
                        posts.map((post) => (
                            <div key={post._id} className="border p-4 my-4">
                                <Link to={`/posts/${post._id}`} className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-xl font-bold mb-2">{post.author}</h1>
                                    <p className="text-gray-700">{post.title}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-500">{post.formatted_date}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">View Post</button>
                                </div>
                                </Link>
                            </div>
                    )))
                }
            </div>
        </>
    )
}

export default HomePage;