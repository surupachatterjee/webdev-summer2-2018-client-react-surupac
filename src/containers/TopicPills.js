import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPillItem from "../components/TopicPillItem";
import TopicService from '../services/TopicService';
import '../css/topicpillitem.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WidgetListContainer from "./widgets/WidgetListContainer";
import TopicPillEditor from "./TopicPillEditor";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "../reducers/widgetReducer";


let store = createStore(widgetReducer);

class TopicPills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.topicService = TopicService.instance;
        this.deleteTopic=this.deleteTopic.bind(this);
        this.updateTopic=this.updateTopic.bind(this);
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setTopicTitle(event) {
        this.setState({
            topic: {
                title: event.target.value
            }
        })
    }

    setTopics(topics) {
        this.setState(
            {topics: topics}
        )
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(
            newProps.courseId,
            newProps.moduleId,
            newProps.lessonId);
    }


    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopicsForLesson(
                courseId,
                moduleId,
                lessonId
            ).then((topics) => {
            this.setTopics(topics)
        });

    }

    createTopic() {
        this.topicService
            .createTopic(
                this.state.courseId,
                this.state.moduleId,
                this.state.lessonId,
                this.state.topic
            ).then(() => {
            this.findAllTopicsForLesson
            (this.state.courseId,
                this.state.moduleId,
                this.state.lessonId);
        })

    }


    deleteTopic(topicId)
    {
        console.log("Inside delete");
        this.topicService
            .deleteTopic(topicId)
            .then(() => {
                this.findAllTopicsForLesson
                (this.state.courseId,
                    this.state.moduleId,
                    this.state.lessonId);
            })
    }


    updateTopic(topicId,topictitle)
    {
        console.log("inside update");
        var top = {title:topictitle,id:topicId}
        console.log("Topic Title Fetched :" + topictitle + "; Topic Id is :" +topicId);
        this.topicService
            .updateTopic(topicId,top)
            .then(() => {
                this.findAllTopicsForLesson
                (this.state.courseId,
                    this.state.moduleId,
                    this.state.lessonId);
            })
    }



    render() {
        return (
            <Router>
            <div>
                <div className="input-group mb-3">
                    <input placeholder="New Topic"
                           value={this.state.topic.title}
                           className="form-control"
                           onChange={this.setTopicTitle}/>
                    <div className="input-group-append">
                        <button onClick={this.createTopic}
                                className="fa fa-plus btn-secondary">
                        </button>
                        {/*<button onClick={this.createTopic}
                                className="fa fa-pencil-square btn-secondary"></button>*/}
                    </div>
                </div>
                <div>

                        {this.renderTopics()}
                </div>
                <div>

                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           component={TopicPillEditor}/>
                </div>
            </div>
            </Router>

        );

    }


    renderTopics() {
        var topics = this.state.topics.map((topic) => {
            return (
                <TopicPillItem key={topic.id}
                               courseId={this.state.courseId}
                               moduleId={this.state.moduleId}
                               lessonId={this.state.lessonId}
                               topic={topic}
                               delete={this.deleteTopic}
                                edit={this.updateTopic}/>
            )
        });
        return <ul className="nav nav-pills">{topics}</ul>;
    }

}

export default TopicPills;