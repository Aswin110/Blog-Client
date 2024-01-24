import Layout from './layout'
import  {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        username:"",
        password:""
    });

    const Navigate = useNavigate();
    const apiUri = import.meta.env.VITE_URL;
    const handleLogIn = async(e) => {
        e.preventDefault();
        if (user.username || user.password) {
            try {
                const res = await axios.post(`${apiUri}/login`, user)
                console.log(res.data);
                if (res.data.message) {
                    setError(true);
                    setMessage(res.data.message)
                    return;
                } else if (res.data.token) {
                    const token = res.data.token
                    localStorage.setItem('token', token);
                    Navigate('/');
                    return
                }

            }catch(error) {
               console.log(error);
            }
        }
    }
    return (
        <>
            <Layout
                title = 'Log In'
            />
            <div className='m-auto flex flex-col items-center'>
                <h1 className='text-5xl px-2 py-8'>Log in</h1>
                <form action="/login" method='POST' onSubmit={handleLogIn} className='flex flex-col gap-4'>
                    <label htmlFor ="username">Username:</label>
                    <input type="text" 
                        id='username' 
                        name='username' 
                        placeholder='Username' 
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, username: e.target.value}))}
                        required={true} 
                        className='p-2 rounded border-solid border-2 border-indigo-600'/>

                    <label htmlFor ="password">Password:</label>
                    <input type="password"
                        id='password'
                        name='password'
                        placeholder='Password' 
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, password: e.target.value}))}
                        required={true} 
                        className='p-2 rounded border-solid border-2 border-indigo-600'/>

                    <button type='submit' className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >Log In</button>
                </form>
                {error && <div className="text-red-500">{message}</div>}
            </div>
        </>
    )
}

export default LogIn;