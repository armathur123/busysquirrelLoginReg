import React, {useState, useContext} from 'react';
import { AccountContext } from './Accounts';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);
    const {authenticate, getSession, logout} = useContext(AccountContext);


    const onSubmit = e => {
        e.preventDefault();
        authenticate(email, password)
            .then(data => {
                console.log('Logged in!', data);
                getSession()
                .then(session => {
                    console.log('Session:',session);
                    setStatus(true);
                })
            })
            .catch(err => {
                console.error('Failed to login!', err);
            })
    };

    return (
        <div>
            <form onSubmit ={onSubmit}  className = 'fields'>
                <input value = {email} onChange = {e => setEmail(e.target.value)} placeholder = 'email' />
                <input value = {password} onChange = {e => setPassword(e.target.value)} placeholder = 'password' />
                <button type = "submit">Login</button>
            </form>
            <div>
                {status ? (
                    <div>
                        You are logged in.
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : 'Please login Above.'}
            </div>
        </div>
    );
};
 
export default Login;