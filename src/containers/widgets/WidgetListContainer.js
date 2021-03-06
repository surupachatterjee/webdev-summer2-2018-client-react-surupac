import {connect} from 'react-redux'
import WidgetListComponent from './WidgetListComponent'
import WidgetService from '../../services/WidgetService';

let widgetService = WidgetService.instance;



const  stateToPropertyMapper = (state,ownProps) =>{
    console.log("in stateToPropertyMapper");
    console.log(ownProps.topicId);
    return({
            /*courseId: state.courseId,
            moduleId: state.moduleId,
            lessonId: state.lessonId,
            topicId: state.topicId,
            widgets : state.widgets,
            preview:state.preview,
            newTopicId:ownProps.topicId*/

           topicId:ownProps.topicId,
            widgets : state.widgets,
            preview:state.preview,
            receivedTopicId:ownProps.topicId


        }
    );
}

const dispatcherToPropertyMapper = (dispatch,state) => {
    console.log("inside dispatcherToPropertyMapper");
    return(
        {
            changePreviewStatus :() => dispatch(
                {
                    type:'CHANGE_PREVIEW'
                }
            ),
            setTopic:(topicId)=>dispatch(
                {
                    type:'SET_TOPICID',
                    topicId: topicId
                }
            ),
            deleteWidget: (wid) => {
                widgetService.deleteWidgetByID(wid)
                    .then(() => dispatch({
                        type :'DELETE_WIDGET',
                        widgetId : wid
                    }))
            },
            moveUpWidget: (wid) => dispatch({
                type: 'MOVEUP_WIDGET',
                widgetId: wid
            }),
            moveDownWidget: (wid) => dispatch({
                type: 'MOVEDOWN_WIDGET',
                widgetId: wid
            }),
            changeWidgetType : (wid,wType) => dispatch({
                type: 'CHANGE_TYPE',
                widgetID: wid,
                wdType: wType
            }),
            createWidget: (widget) => dispatch(
                {
                    type: 'CREATE_WIDGET',
                    widget :widget
                }),
            updateWidget: (widget) => dispatch(
                {
                    type : 'UPDATE_WIDGET',
                    widget: widget
                }
            ),
            saveWidgets: (topicId,widgets)=> {
                widgetService.upsertWidgets(topicId,widgets)
                    .then(createdWidgets => dispatch({
                        type:'SAVE_WIDGETS',
                        widgets:createdWidgets
                    }))
            },
            loadAllWidgets: (topicID) => {
                widgetService.findAllWidgetsForTopic(topicID)
                    .then(widgetsFrmDB => dispatch({
                        type:'FINDALL_WIDGETS_FOR_TOPIC',
                        widgets: widgetsFrmDB
                    }))
            }
        }
    )
}

const WidgetListContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent);




export default WidgetListContainer;