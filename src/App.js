import { Account } from './Components/Accounts';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Status from './Components/Status';


function App() {
  return (
    <Account>
      <Status></Status>
      <Signup></Signup>
      <Login></Login>
    </Account>
  );
}

export default App;
