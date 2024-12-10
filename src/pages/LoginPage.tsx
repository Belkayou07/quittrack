import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const { login, signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await login(email, password);
        navigate('/dashboard');
      } else {
        await signup(email, password, name);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Failed to authenticate. Please check your credentials.');
      console.error(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Google Sign-In failed');
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-panel">
          <h2>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            )}
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            {isLogin ? (
              <>
                <button type="submit">Log In</button>
                <button 
                  type="button" 
                  onClick={handleGoogleSignIn}
                  className="google-signin"
                >
                  Sign in with Google
                </button>
                <p>
                  New here? 
                  <span onClick={() => setIsLogin(false)}>Create an account</span>
                </p>
              </>
            ) : (
              <>
                <button type="submit">Sign Up</button>
                <p>
                  Already have an account? 
                  <span onClick={() => setIsLogin(true)}>Log in</span>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
