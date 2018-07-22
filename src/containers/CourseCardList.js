import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseRow from '../components/CourseRow';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService';
import CourseCard from '../components/CourseCard';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


class CourseCardList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            courses: [],
            course: {
                title: '',
                id: '',
                created: '',
                modified: ''
            },

        };

        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.saveCourse = this.saveCourse.bind(this);

    }

    setCourse(id, title) {
        this.setState(
            {
                course: {
                    title: title,
                    id: id
                }
            }
        )
    }

    saveCourse(event) {
        this.setState(
            {
                course:
                    {
                        title: event.target.value,
                        id: this.state.course.id,
                        modified: new Date()
                    }
            }
        )
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


    createCourse() {
        var c = {
            title: this.state.course.title,
            created: new Date()
        }
        console.log(this.state.course);

        this.courseService
            .createCourse(c)
            .then(() => {
                this.findAllCourses();
            });
    }

    updateCourse() {
        console.log("Course State change : " +
            this.state.course.title +
            " : " + this.state.course.id);
        this.courseService
            .updateCourse(
                this.state.course.id,
                this.state.course
            ).then(() => {
            this.state.course.id = '';
            this.findAllCourses();
        });
    }

    render() {
        console.log("inside course card");
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <i className="fa fa-align-justify navbar-brand " style={{color: "white"}}></i>
                    <h1 className="navbar-brand" style={{color: "white"}}>Course Manager</h1>
                    <input id="titleFld"
                           onChange={this.saveCourse}
                           defaultValue={this.state.course.title}
                           className="form-control col-sm-2 navbar-brand font-italic"
                           placeholder="New Course Title"/>
                    <button className="fa fa-plus navbar-brand"
                            onClick={this.createCourse}></button>
                    <button className="fa fa-check navbar-brand"
                            onClick={this.updateCourse}></button>

                </nav>
                {/*<h2>Course List</h2>*/}

                <table className="table table- table-hover table-responsive-sm table-striped">
                    <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Owned By</th>
                        <th>Last Modified By</th>
                        <th>
                            <Link to="/course/list">
                            <button className="fa fa-th" style={{"fontSize": "36px;"}}
                                    onClick={this.cardView}></button></Link>
                        </th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.courseCardRows()}
                    </tbody>

                </table>

            </div>
        )
    }

    courseCardRows() {
        var rows = this.state.courses.map((course) => {
            return <CourseCard key={course.id}
                              course={course}
                              delete={this.deleteCourse}
                              edit={this.setCourse}/>


        });
        return <div className="card-deck">{rows}</div>
    }

}

export default CourseCardList;