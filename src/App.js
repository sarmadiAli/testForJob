
import Layout from "./pages/layout";
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Main from './components/Main'
function App() {

  return (

    <>
      <Provider store={store} >
        <Router>
         <Main>
            <Layout />
         </Main>
        </Router>
      </Provider>
    </>
  );
}

export default App;
