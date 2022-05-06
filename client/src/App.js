import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {Routes, Navigate, BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen.js'

import './components/componentStyling/Room.css'
import AddAssessmentScreen from './screens/AddAssessmentScreen';
import ViewSubmissionScreen from './screens/ViewSubmissionScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
         
        
          <Route path='/addAssessment' element={<AddAssessmentScreen/>}/>
          <Route path='/viewSubmission' element={<ViewSubmissionScreen/>}/>
      </Routes>
      </BrowserRouter>
     
      
     
    </div>
  );
}

export default App;
