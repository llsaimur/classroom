import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users.js'
import Signup from './user/Signup.js'
import Signin from './auth/Signin.js'
import Profile from './user/Profile.js'
import EditProfile from './user/EditProfile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu.js'
import NewCourse from './course/NewCourse'
import MyCourses from './course/MyCourses.js'
import Course from './course/Course.js'
import EditCourse from './course/EditCourse.js'
import Enrollment from './enrollment/Enrollment.js'

const MainRouter = () => {
 return ( <div>
    <Menu></Menu>
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/users" component={Users}/>
 <Route path="/signup" component={Signup}/>
 <Route path="/signin" component={Signin}/>
 <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
 <Route path="/user/:userId" component={Profile}/>

 <Route path="/course/:courseId" component={Course}/>


 <PrivateRoute path="/teach/courses" component={MyCourses}/>

 <PrivateRoute path="/teach/course/new" component={NewCourse}/>
 <PrivateRoute path="/teach/course/edit/:courseId" component={EditCourse}/>
 <PrivateRoute path="/teach/course/:courseId" component={Course}/>

 <PrivateRoute path="/learn/:enrollmentId" component={Enrollment}/>



 
 </Switch>
 </div>
 )
}
export default MainRouter