import React from 'react'
import CourseList from './CourseList'

class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>WhiteBoard</h1>
                <CourseList/>
            </div>
        )

    }

}

export default WhiteBoard;