import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { pathConstant } from '../../constents/pathConstant';
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks';
import { loginUser } from '../../redux/features/auth/authThunk';
import { useEffect, useState } from 'react';

const Login = () => {
    const {logedInUser} = useAppSelector(s=>s.authData)
    const dispatch = useAppDispatch();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.currentTarget);
        const appendData = Object.fromEntries(formData) as { email: string, password: string };

        dispatch(loginUser(appendData))
            .unwrap()
            .then((res:any) => {
                if (res?.success === true) {
                    navigate(pathConstant.users.home)
                } else {
                    setError(res?.message || "An unexpected error occurred.");
                }
            })
            .catch((err:any) => {
                setError(err.message || "Failed to login.");
            });
    };

    useEffect(()=>{

        if(logedInUser && Object.keys(logedInUser).length)
            navigate('/home')

    }, [logedInUser]);

    return (
        <div className='base'>
            <div className="login-container">
                <div className="left-section">
                    <div className="content">
                        <h1>Welcome to Our Dashboard</h1>
                        <p>Simplify your e-commerce management with our user-friendly admin dashboard.</p>
                        <div className="illustration">
                            <img src="/phone.png" alt="Illustration" />
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="logo">
                        <img src="/logo.svg" height={300} width={300} alt="E Spurt Logo" />
                        <span>E Dashboard</span>
                    </div>
                    <div className="login-form">
                        <h2>Welcome Back</h2>
                        <p>Please login to your account</p>
                        {error && <p className="error-message">{error}</p>}
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name='email' placeholder="Email address" required />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' placeholder="Password" required />
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>
                            <button type="submit" className="login-button">Login</button>
                        </form>
                        <div className="divider">
                            <span>Or Login with</span>
                        </div>
                        <div className="social-login">
                            <button className="google-btn">
                                <img src="/search.png" alt="Google" />
                                Google
                            </button>
                            <button className="facebook-btn">
                                <img src="/facebook.png" alt="Facebook" />
                                Facebook
                            </button>
                        </div>
                        <p className="signup-text">
                            Don't have an account? <Link to={pathConstant.users.signup}>Signup</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
