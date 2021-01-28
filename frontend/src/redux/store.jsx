import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducer from './reducers.jsx';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
let red=combineReducers({
    forgetpass:Reducer('forgetpass'),
    resetpass:Reducer('resetpass'),
    signin:Reducer('signin'),
    signup:Reducer('signup'),
    // studentsignin:Reducer('signin'),
    teachersignin:Reducer('teachersignin'),
    takeattendance:Reducer('takeattendance'),
    uploadattendance:Reducer('uploadattendance'),
    classblog:Reducer('classblog'),
    getclassblog:Reducer('getclassblog'),
    deletenotes:Reducer('deletenotes'),
    StudentClassBlog:Reducer('StudentClassBlog'),
    onSearchLinks:Reducer('onSearchLinks'),
    QueryBlog:Reducer('QueryBlog'),
    DashboardEvent:Reducer('DashboardEvent'),
    titleExists:Reducer('titleExists'),
    addQuestion:Reducer('addQuestion'),
    getNotifications:Reducer('getNotifications'),
    showNotifications:Reducer('showNotifications')
})
let Store=createStore(red,composeWithDevTools(applyMiddleware(logger,thunk))) 
export default Store;