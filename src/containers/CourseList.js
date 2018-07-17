import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseRow from '../components/CourseRow';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);

    }

    componentDidMount() {
        this.findAllCourses();
    }

    deleteCourse(courseId) {
        console.log('delete' + courseId);
        this.courseService
            .deleteCourse(courseId)
            .then(() => this.findAllCourses());

    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
                console.log(courses);
            });

    }

    titleChanged(event) {
        this.setState({
            course: {title: event.target.value}
        })
    }

    createCourse() {
        console.log(this.state.course);
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table table-dark">
                    <thead>



                    <tr>
                        <th> Course Title</th>
                        <th>Owned By</th>
                        <th>Last Modified By</th>

                    </tr>

                    <tr>
                        <th><input id="titleFld"
                                   onChange={this.titleChanged}
                                   placeholder="New Course Title"/>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                            <button className="fa-2x fa fa-plus" onClick={this.createCourse}></button>
                        </th>
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
        var rows = this.state.courses.map((course) =>
        {
            return <CourseRow key={course.id}
                              course={course}
                              delete={this.deleteCourse}/>
        });
        return (rows)
    }


}

export default CourseList;