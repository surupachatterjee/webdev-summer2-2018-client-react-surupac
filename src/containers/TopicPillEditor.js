import React,{Component} from 'react'
import WidgetListComponent from "./widgets/WidgetListComponent";
import WidgetListContainer from './widgets/WidgetListContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "../reducers/widgetReducer";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import store from '../store'

/*let initialState = {
    courseId: '',
    moduleId:'',
    lessonId:'',
    topicId : '',
    widgets: []};
    preview: 'false'*/
//let store
    //= createStore(widgetReducer,initialState);

class TopicPillEditor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           /* courseId: '',
            moduleId: '',
            lessonId: '',*/
            topicId : ''

        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        //this.setTopicId = this.setTopicId.bind(this);
        /*initialState.courseId = this.props.match.params.courseId;
        initialState.moduleId = this.props.match.params.moduleId;
        initialState.lessonId = this.props.match.params.lessonId;
        initialState.topicId =  this.props.match.params.topicId;
        initialState.preview = false;
        store = createStore(widgetReducer,initialState);*/
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


   /* setTopicId(topicId) {
        this.setState({topicId: topicId});
    }*/

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        //this.setTopicId(this.props.match.params.topicId);
        this.setState({topicId:this.props.match.params.topicId});

    }

    /*componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(newProps.match.params.lessonId);
        this.setTopicId(newProps.match.params.topicId);

    }
*/
    componentWillReceiveProps(newProps){
        this.setState({topicId:newProps.match.params.topicId})
    }

    render(){
        console.log("inside: " + this.state.topicId);
        return (
            <Provider store={store}>
                <div className="container-fluid">
                <WidgetListContainer topicId={this.state.topicId}/>
                </div>
            </Provider>
    )
    }


}

export default TopicPillEditor;