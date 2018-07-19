import React from 'react'
import TopicPills from './TopicPills'
import LessonTabs from "./LessonTabs";

class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.lessonId = this.setLessonId.bind(this);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: ''
        };
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState
        ({lessonId: lessonId});
    }

    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);
        this.setModuleId(
            this.props.match.params.moduleId);
        this.lessonId(
            this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(newProps.match.params.lessonId);
    }

    render() {
        return (

                <TopicPills courseId={this.state.courseId}
                            moduleId={this.state.moduleId}
                            lessonId={this.state.lessonId}/>

        )
    }


}

export default LessonEditor;