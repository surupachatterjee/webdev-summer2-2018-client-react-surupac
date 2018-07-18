import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from "./LessonTabs";
import ModuleEditor from './ModuleEditor'


export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
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
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <div>
                <h1>Course Editor</h1>
                <ModuleList courseId={this.state.courseId}/>
            </div>
        );
    }
}
