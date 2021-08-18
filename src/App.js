import Home from './Components/Home';
import './index.css';


function App() {
  return (
    <Home>
    </Home>
  );
}

export default App;


{/*function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/create">
              <Create></Create>
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route>
              <NotFound path="*"></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
*/}