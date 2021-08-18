
import { useState } from 'react';
import Choose from './Choose';

const Home = () => {

    const [choose, setChoose] = useState(0);


    return (
        <div className = 'home'>
            <h2>
                BusySquirrels Intern Project
            </h2>
            <div id = 'bottom'>
                <button onClick = {() =>setChoose(1)}>Signup</button>
                <h3>Or</h3>
                <button onClick = {() =>setChoose(2)}>Login</button>
            </div>
            <div>
                <Choose choose = {choose} className = 'fields'></Choose>
            </div>
        </div>
    );
}
 
export default Home;