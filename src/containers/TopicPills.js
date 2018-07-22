import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPillItem from "../components/TopicPillItem";
import TopicService from '../services/TopicService'

class TopicPills extends React.Component {

    constructor(props) {
        super(props)
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


    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input placeholder="New Topic"
                           value={this.state.topic.title}
                           className="form-control"
                           onChange={this.setTopicTitle}/>
                    <div className="input-group-append">
                        <button onClick={this.createTopic}
                                className="fa fa-plus-square btn-success"></button>
                        {/*<button onClick={this.createTopic}
                                className="fa fa-pencil-square btn-secondary"></button>*/}
                    </div>
                </div>
                <div>
                    <ul className="nav nav-pills nav-justified">
                        {this.renderTopics()}
                    </ul>
                </div>
            </div>

        );
    }


    renderTopics() {
        var topics = this.state.topics.map((topic) => {
            return (
                <TopicPillItem key={topic.id}
                               courseId={this.state.courseId}
                               moduleId={this.state.moduleId}
                               lessonId={this.state.lessonId}
                               topic={topic}/>
            )
        });
        return topics;
    }

}

export default TopicPills;