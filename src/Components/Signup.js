import { useState } from 'react';
import {CognitoUserAttribute} from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const attributeList = [];
    const [signupStatus, setSignupStatus] = useState('');
  
    const onSubmit = e => {
      e.preventDefault();
      const attributeAddress = new CognitoUserAttribute().setName('address').setValue(address);
      const attributeGender = new CognitoUserAttribute().setName('gender').setValue(gender);
      attributeList.push(attributeAddress);
      attributeList.push(attributeGender);
      UserPool.signUp(email, password, attributeList, null, (err, data) => {
        if (err) { 
          console.error(err);
        }
        console.log(data)
        setSignupStatus('Successful sign up!')
      })
    }
  
    return (
        <div>
          <form onSubmit={onSubmit}  className="fields">
              <input value={email} onChange = {e => setEmail(e.target.value)} placeholder = 'email' />
              <input value={password} onChange = {e => setPassword(e.target.value)} placeholder = 'password'/>
              <input value={address} onChange = {e => setAddress(e.target.value)} placeholder = 'address'/>
              <input value={gender} onChange = {e => setGender(e.target.value)} placeholder = 'gender'/>
              <button type='submit'>Signup</button>
          </form>
          <h3>{signupStatus}</h3>

        </div>
    );
}
 
export default Signup;