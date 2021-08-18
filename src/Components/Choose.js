import { Account } from './Accounts';
import Signup from './Signup';
import Login from './Login';
import Status from './Status';

const Choose = (props) => {
    const choice = props.choose;
    
    if (choice === 1) {
        return (
            <Account>
                <Signup></Signup>
            </Account>
        )
    }
    else if (choice === 2) {
        return (
            <Account>
                <Login></Login>
                <Status></Status>
            </Account>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}
 
export default Choose;