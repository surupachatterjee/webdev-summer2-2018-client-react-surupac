import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseRow from '../components/CourseRow';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            courses: [],
            course:{
                title:'',
                id:''
            }
        };

        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.updateCourse=this.updateCourse.bind(this);
        this.setCourse=this.setCourse.bind(this);
        this.saveCourse=this.saveCourse.bind(this);

    }

    setCourse(id,title)
    {
        this.setState(
            {
                course:{
                    title:title,
                    id:id
                }
            }
        )
    }

    saveCourse(event)
    {
        this.setState(
            {
                course:
                    {
                        title:event.target.value,
                        id:this.state.course.id
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
        console.log(this.state.course);
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    updateCourse()
    {
        console.log("Course State change : "+
        this.state.course.title+
        " : " + this.state.course.id);
        this.courseService
            .updateCourse(
                this.state.course.id,
                this.state.course
            ).then(() => {
            this.findAllCourses();
        });
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table table- table-hover table-responsive-sm table-striped">
                    <thead>



                    <tr>
                        <th> Course Title</th>
                        <th>Owned By</th>
                        <th>Last Modified By</th>

                    </tr>

                    <tr>
                        <th><input id="titleFld"
                                   onChange={this.saveCourse}
                                   defaultValue={this.state.course.title}
                                   placeholder="New Course Title"/>
                        </th>
                        <th></th>
                        <th></th>
                        <th>
                            <button className="fa fa-plus" onClick={this.createCourse}></button>
                        </th>
                        <th>
                            <button className="fa fa-check" onClick={this.updateCourse}></button>
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
                              delete={this.deleteCourse}
            edit={this.setCourse}/>
        });
        return (rows)
    }


}

export default CourseList;