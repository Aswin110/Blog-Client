import Layout from "./layout";
import { useEffect, useState } from "react";
import LoadingSpinner from "./loading";
import axios from 'axios'
axios
function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiUrl = import.meta.env.VITE_URL;
    console.log(apiUrl)
    const id = window.location.pathname.split('/')[2];

    useEffect(()=>{
        async function post () {
            try{
                const res = await axios.get(`${apiUrl}/post/${id}`)
                setPost(res.data);
                setLoading(false);
            }
            catch(err) {
                console.log(err);
            }
        }
        post()
    },[id])

    return (
        <>
            {loading?
                <div className="flex justify-center content-center h-full"> 
                   <LoadingSpinner/> 
                </div>:
                <>
                    <Layout title={post.title}/>
                    <div className="max-w-2xl mx-auto mt-8">
                        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                        <p className="text-gray-500">@{post.author}</p>
                        <p className="text-gray-500">{post.formatted_date}</p>
                        <p className="mt-4">{post.content}</p>
                        <hr/>

                        <form className="mt-8">
                            <label htmlFor="commentContent" className="block text-sm font-medium text-gray-700">
                                Add a Comment
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="commentContent"
                                    name="commentContent"
                                    rows="3"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"onChange={(e) => setCommentContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mt-3">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add Comment
                                </button>
                            </div>
                        </form>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Comments</h2>
                            {post.comments.map((comment) => (
                                <div key={comment._id} className="mb-4">
                                <p className="text-gray-500">
                                    <strong>{comment.author}</strong> on {comment.time}
                                </p>
                                <p>{comment.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Post;