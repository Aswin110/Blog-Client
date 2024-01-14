import Layout from './layout'
import  {useState} from 'react'
import axios from 'axios';

function SignUp() {
    const [user, setUser] = useState({
        username:'',
        first_name:'',
        last_name:'',
        password:'',
        confirmPassword:''
    });
    const apiUri = import.meta.env.VITE_URL;
    const [validation, setValidation] = useState([])
    const [Error, setError ]= useState(false);

    const handleUsername = async () => {
        const response = await fetch(`${apiUri}/signup/check-username`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: user.username }),
        });
    
        const data = await response.json();
    
        if (!data.usernameTaken) {
            setError(false);
        } else {
            setValidation((prev)=>([...prev,'Username is already taken']));
            setError(true);
        }
      };

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword){
            setValidation((prev)=> ([...prev,'Password is not same' ]))
            setError(true);
            console.log(validation)
        } else {           
            console.log(user)
        }
        
    }

    return (
        <>
            <Layout
                title = 'Sign Up'
            />
            <div className='m-auto flex flex-col items-center'>
                <h1 className='text-5xl px-2 py-8'>Sign Up</h1>
                <form action="/signup" method='POST' onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
                    <label htmlFor ="first_name">First Name:</label>
                    <input 
                        type="text" 
                        id='first_name' 
                        name='first_name' 
                        value={user.first_name}
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, first_name: e.target.value}))} 
                        placeholder='First name' 
                        required={true} 
                        className='p-2 rounded border-solid border-2 border-indigo-600'
                    />
                    <label htmlFor ="last_name">Last Name:</label>
                    <input 
                        type="text" 
                        id='last_name' 
                        name='last_name' 
                        value={user.last_name} 
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, last_name: e.target.value}))} 
                        placeholder='Last name' 
                        required={true}  
                        className='p-2 rounded border-solid border-2 border-indigo-600'
                    />
                    <label htmlFor ="username">Username:</label>
                    <input 
                        type="text" 
                        id='username' 
                        name='username' 
                        value={user.username} 
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, username: e.target.value}))} 
                        placeholder='Username'
                        onBlur={handleUsername} 
                        required={true}  
                        className='p-2 rounded border-solid border-2 border-indigo-600'
                    />
                    <label htmlFor ="password">Password:</label>
                    <input 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={user.password} 
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, password: e.target.value}))} 
                        placeholder='Password' 
                        required={true} 
                        className='p-2 rounded border-solid border-2 border-indigo-600'
                    />
                    <label htmlFor ="confirmPassword">Confirm password:</label>
                    <input 
                        type="password" 
                        id='confirmPassword' 
                        name='confirmPassword' 
                        value={user.confirmPassword} 
                        onChange={(e)=>setUser((prevUser)=>({...prevUser, confirmPassword: e.target.value}))} 
                        placeholder='Confirm password' 
                        required={true} 
                        className='p-2 rounded border-solid border-2 border-indigo-600'
                    />
                    <button 
                        type='submit' 
                        className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                            Submit
                    </button>
                </form>
                {Error?<div>{validation}</div>:<div>{}</div>}
            </div>
        </>
    )
}

export default SignUp;