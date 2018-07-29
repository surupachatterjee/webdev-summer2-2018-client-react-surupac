import {connect} from 'react-redux'
import WidgetListComponent from './WidgetListComponent'

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

const dispatcherToPropertyMapper = (dispatch) => {
    console.log("inside dispatcherToPropertyMapper");
    return(
        {
            deleteWidget: (wid) => dispatch({
                type :'DELETE_WIDGET',
                widgetId : wid
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
            saveWidgets: ()=> dispatch(
                {
                    type:'SAVE_WIDGETS'

                }
            )

        }
    )
}

const WidgetListContainer =
    connect(
        stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent);




export default WidgetListContainer;