import React from 'react'
import TopicPills from './TopicPills'
import LessonTabs from "./LessonTabs";

class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setSelectedLID=this.setSelectedLID.bind(this);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            selectedLID:''
        };
    }

    setSelectedLID(lid)
    {
        this.setState({
            selectedLID:lid
        })
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
        this.setState({courseId:this.props.match.params.courseId});
        this.setState({moduleId:this.props.match.params.moduleId});
        this.setState({lessonId:this.props.match.params.lessonId});
        /*this.setCourseId(
            this.props.match.params.courseId);
        this.setModuleId(
            this.props.match.params.moduleId);
        this.setLessonId(
            this.props.match.params.lessonId);

*/
    }

    componentWillReceiveProps(newProps) {
        this.setState({courseId:newProps.match.params.courseId});
        this.setState({moduleId:newProps.match.params.moduleId});
        this.setState({lessonId:newProps.match.params.lessonId});
        /*console.log("inside componentWillReceiveProps of LessonEditor" +
            newProps.match.params.courseId + " : " +
            newProps.match.params.moduleId+ " : " +
            newProps.match.params.lessonId);
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);
        this.setSelectedLID(newProps.selectedLID);

        this.setLessonId(newProps.match.params.lessonId);
        console.log("inside componentWillReceiveProps of LessonEditor  State Values" +
        this.state.courseId + " : " +
        this.state.moduleId + " : " +
        this.state.lessonId);*/

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