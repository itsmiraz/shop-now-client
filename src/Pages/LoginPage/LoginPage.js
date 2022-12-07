import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { BarLoader } from 'react-spinners';
import Wave from 'react-wavify';

const Login = () => {
    const [error, setError] = useState(null)
    const { signIn, auth, googleSginIn } = useContext(AuthContext)
    const [usermail, setUsermail] = useState('')
    const [animation, setAnimation] = useState(false)

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setAnimation(true)
                saveUser(user.email, user.displayName)
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Password')
                }
                else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError('User Not Found Please Register')
                }
                else {
                    setError(error.message)
                }
                console.log('error', error);
            })
    }
    const handleGoogleSignIN = () => {
        googleSginIn()
            .then(result => {

                const user = result.user;
                const role = 'user'
                saveUser(user.email, user.displayName, role)

            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const handleEmailInput = e => {
        e.preventDefault()
        const email = e.target.value

        setUsermail(email)
    }
    const resetPasswrd = () => {

        sendPasswordResetEmail(auth, usermail)
            .then(() => {
                toast.success('Please Check Your Email box to reset your Email Password')
            })
            .catch(error => {
                console.log('error', error);
                setError(error.message)
            })
    }



    const saveUser = (email, name, role) => {
        const user = {
            email,
            name,
            role,

        }
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTimeout(() => {
                    navigate(from, { replace: true })

                    toast.success('User Created SuccessFully')
                }, 500);
            })


    }


    return (
        <div className='flex bg-white justify-center  pt-20  items-center'>
            {
                animation ?
                    <>
                        <div className='flex justify-center items-center'>
                            <BarLoader color="#ea580c" />
                        </div>
                    </>
                    :
                    <div className='relative w-full mx-auto'>

                        <div className="w-full mb-10 relative bg-white max-w-md border mx-auto z-10 border-orange-300 shadow-lg drop-shadow-2xl p-8 space-y-3 rounded-xl bg-white-900 text-gray-900">
                            <h1 className="text-2xl text-orange-600 font-bold text-center">Login</h1>
                            <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-semibold text-gray-800">Email</label>
                                    <input type="text" onBlur={handleEmailInput} name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-orange-100 text-gray-800 focus:border-violet-9200" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block font-semibold text-gray-800">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-orange-100 text-gray-800  focus:border-violet-200" />
                                    <div className="flex justify-end text-xs text-gray-400">
                                        <Link onClick={resetPasswrd} rel="noopener noreferrer" href="/">Forgot Password?</Link>
                                    </div>
                                    <div>
                                        <p className="text-red-600">{error}</p>
                                    </div>
                                </div>
                                <button type='submit' className="block w-full p-3 text-center rounded-sm font-semibold text-gray-50 bg-orange-600">Sign in</button>
                            </form>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                                <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                            </div>
                            <div className="flex z-1 justify-center space-x-4">
                                <button onClick={handleGoogleSignIN} className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 text-orange-500 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>


                            </div>
                            <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
                                <Link rel="noopener noreferrer" to="/register" className="underline  text-blue-800">Sign up</Link>
                            </p>
                        </div>
                        <div className='w-full absolute bottom-0 '>
                            <Wave fill='#f97316'
                                className='absolute bottom-0'
                                paused={false}
                                options={{
                                    height: 20,
                                    amplitude: 20,
                                    speed: 0.15,
                                    points: 6
                                }}
                            />
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;