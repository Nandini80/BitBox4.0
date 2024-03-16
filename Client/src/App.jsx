import { Route, Routes } from 'react-router-dom';
import FileUpload from './Components/FileUpload';
import Report from './Components/Report';
import './App.css';

function App() {
  return (
    <>
     <Routes>
         <Route path='/' element={<FileUpload/>}></Route>
         <Route path='/report' element={<Report/>}></Route>
     </Routes>
    </>
  )
}

export default App
