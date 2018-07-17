import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseRow from '../components/CourseRow';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses:[]};


    }

    componentDidMount()
    {
        this.courseService.findAllCourses()
            .then(courses =>
            {
                this.setState({courses : courses});
            });
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified By</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.courseRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    courseRows() {
        var rows = this.state.courses.map(function(course) {
            return <CourseRow  key={course.id}
                course={course}/>
        });
        return (rows)
    }


}

export default CourseList;