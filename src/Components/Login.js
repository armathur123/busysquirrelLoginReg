import React, {useState, useContext, useEffect} from 'react';
import { AccountContext } from './Accounts';

const Login = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {authenticate} = useContext(AccountContext);

    const onSubmit = e => {
        e.preventDefault();
        authenticate(email, password)
            .then(data => {
                console.log('Logged in!', data);
            })
            .catch(err => {
                setMessage('Failed to login!');
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
            <h2>{message}</h2>
        </div>
    );
};
 
export default Login;