import {connect} from 'react-redux'
import WidgetListComponent from './WidgetListComponent'
import WidgetService from '../../services/WidgetService';

let widgetService = WidgetService.instance;

const  stateToPropertyMapper = (state) =>{
    console.log("in stateToPropertyMapper");
    return({
            courseId: state.courseId,
            moduleId: state.moduleId,
            lessonId: state.lessonId,
            topicId: state.topicId,
            widgets : state.widgets
        }
    );
}

const dispatcherToPropertyMapper = (dispatch,state) => {
    console.log("inside dispatcherToPropertyMapper");
    return(
        {
            deleteWidget: (wid) => {
                widgetService.deleteWidgetByID(wid)
                    .then(() => dispatch({
                        type :'DELETE_WIDGET',
                        widgetId : wid
                    }))
            },
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