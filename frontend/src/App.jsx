import React from 'react';
import './App.scss';
import {Switch,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp/SignUp.jsx';
import SignIn from './SignIn/SignIn.jsx';
import Welcome from './Welcome/Welcome';
import TeacherSignIn from './TeacherSignIn/TeacherSignIn.jsx';
import TeacherSignUp from './TeacherSignUp/TeacherSignUp.jsx';
import Mainblog from './Mainblog/Mainblog.jsx';
const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={()=><Welcome/>}></Route>
        <Route exact path='/SignIn' render={()=><SignIn/>}></Route>
        <Route exact path='/SignUp' render={()=><SignUp/>}></Route>
        <Route exact path='/TeacherSignIn' render={()=><TeacherSignIn/>}></Route>
        <Route exact path='/TeacherSignUp' render={()=><TeacherSignUp/>}></Route>
        <Route exact path='/mainblog' component={()=><Mainblog/>}></Route>
        <Route exact path='/attendance' component={()=><h1>in attendance</h1>}></Route>
      </Switch>
    </>
  )
}
export default App;
