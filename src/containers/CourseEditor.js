import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from "./LessonTabs";
import ModuleEditor from './ModuleEditor'
import CourseService from "../services/CourseService";


export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        console.log("inside cons ");
        this.state = {
            courseId: '',
            course:''};
        this.selectCourse = this.selectCourse.bind(this);
        this.courseService =CourseService.instance;
        this.findCourseById =this.findCourseById.bind(this);

    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);

    }

    componentWillReceiveProps(newProps) {
        this.selectCourse
        (newProps.match.params.courseId);
    }


    selectCourse(courseId) {
        this.findCourseById(courseId);
        this.setState({
            courseId: courseId
        });


    }


    findCourseById(courseId)
    {
       return this.courseService.findCourseById(
            courseId
        ).then((course) =>
       {
           this.setState({
               course:course
           })

       });

    }


    render() {
        return (
            <div>
                <h1>{this.state.course.title}</h1>
                <ModuleList courseId={this.state.courseId}/>
            </div>
        );
    }
}
