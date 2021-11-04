
import '../styles/globals.css';

import useOnScreen from '../customHooks/useOnScreen';

//Layout Component
import Layout from '../components/Layout';
import Home from './Home';
import Community from './Community';


function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Home/>
      <Home/>
      <Community/>
    </Layout>
  )
}

export default MyApp;
