import React from 'react'
import CourseList from './CourseList'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CourseEditor from './CourseEditor'



class WhiteBoard extends React.Component {
    render() {
        return (

            <Router>
                <div className="container-fluid">
                    <h1>WhiteBoard</h1>
                    <Route path="/course/list"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        )

    }

}

export default WhiteBoard;