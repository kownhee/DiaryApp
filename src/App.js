import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css'
import './css/styles.css';
import './css/variables.css'
import './css/responsive.css'

import Layout from './Layout.js'
import Main from './routes/service/Main.js'
import MakeMandalArt from './routes/service/MakeMandalArt.js';
import { Routes, Route } from 'react-router-dom';
function App()
{

    return (
     <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main/>}/>    
        <Route path="mandalArt" element={<MakeMandalArt/>}/>
        
      </Route>

      </Routes>
    </>
    )
}


export default App;
