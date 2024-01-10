
import Layout from './Layout.js'
import Main from './routes/service/Main.js'
import { Routes, Route } from 'react-router-dom';
function App()
{

    return (
     <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main/>}/>    

      </Route>

      </Routes>
    </>
    )
}


export default App;
