import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import LessonServiceClient from "../services/LessonServiceClient";
import TabItem from "../components/TabItem";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LessonEditor from "./LessonEditor";


class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {
                title: 'Untitled Lesson',
                lessonId :''},
            lessons: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson =this.deleteLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.lessonService = LessonServiceClient.instance;

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }



    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);

    }

    createLesson() {
        this.lessonService.createLesson(
            this.state.courseId,
            this.state.moduleId,
            this.state.lesson
        ).then(() => {
            this.findAllLessonsForModule
            (this.state.courseId,
                this.state.moduleId);
        })
    }

    deleteLesson(lessonId)
    {
        console.log("DEelte" + lessonId + " : " +this.state.courseId + " : " + this.state.moduleId);
        this.lessonService
            .deleteLesson(lessonId)
            .then(()=>
                this.findAllLessonsForModule(
                    this.state.courseId,
                    this.state.moduleId));
     }

    updateLesson(lessonId,lessonTitle){
        console.log("Update" + ": "+  lessonId + ":" + lessonTitle);
        var les = {title:lessonTitle,id:lessonId};

        this.lessonService
            .updateLesson(lessonId,les)
            .then(()=>
                this.findAllLessonsForModule(
                    this.state.courseId,
                    this.state.moduleId));
        console.log("after update");
        console.log(les.title +  ": : " +les.id);

    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(
                courseId, moduleId)
            .then((lessons) => {
                this.setLessons(lessons)
            });
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    render() {
        return (
            <Router>
                <div>

                <ul className="nav nav-tab nav-justified ">
                    {this.renderTab()}
                    <button className="fa fa-plus btn-secondary" onClick={this.createLesson}></button>
                </ul>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                           component={LessonEditor}/>
                </div>
            </Router>
        );
    }

    renderTab() {
        var tabs =
            this.state.lessons.map((lesson) => {
                return  <TabItem key={lesson.id}
                                courseId={this.state.courseId}
                                moduleId={this.state.moduleId}
                                lesson={lesson}
                                delete={this.deleteLesson}
                                edit={this.updateLesson}
                />

            });
        return tabs;
    }

}

export default LessonTabs;
