import Layout from './layout'
import  {useState} from 'react'

function SignUp() {
    const [user, setUser] = useState({});

    return (
        <>
            <Layout
                title = 'Sign Up'
            />
            <div className='m-auto flex flex-col items-center'>
                <h1 className='text-5xl px-2 py-8'>Sign Up</h1>
                <form action="/signup" method='POST' className='flex flex-col gap-4'>
                    <label htmlFor ="first_name">First Name:</label>
                    <input type="text" id='first_name' name='first_name' placeholder='First name' required={true} className='p-2 rounded border-solid border-2 border-indigo-600'/>
                    <label htmlFor ="last_name">Last Name:</label>
                    <input type="text" id='last_name' name='last_name' placeholder='Last name' required={true}  className='p-2 rounded border-solid border-2 border-indigo-600'/>
                    <label htmlFor ="username">Username:</label>
                    <input type="text" id='username' name='username' placeholder='Username' required={true}  className='p-2 rounded border-solid border-2 border-indigo-600'/>
                    <label htmlFor ="password">Password:</label>
                    <input type="password" id='password' name='password' placeholder='Password' required={true} className='p-2 rounded border-solid border-2 border-indigo-600'/>
                    <label htmlFor ="confirmPassword">Confirm password:</label>
                    <input type="password" id='confirmPassword' name='confirmPassword' placeholder='Confirm password' required={true} className='p-2 rounded border-solid border-2 border-indigo-600'/>
                    <button type='submit' className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;