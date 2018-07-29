let initialState = {
    courseId: '',
    moduleId:'',
    lessonId:'',
    topicId : '',
    widgets: [
        {title: 'Heading Widget', id: '1', widgetType: 'HEADING'},
        {title: 'Paragraph Widget', id: '2', widgetType: 'PARAGRAPH'},
        {title: 'List Widget', id: '3', widgetType: 'LIST', listItems:'',ordered:'ul'},
        {title: 'Link Widget', id: '4', widgetType: 'LINK'},
        {title: 'Image Widget', id: '5', widgetType: 'IMAGE'}

    ]
};


export const widgetReducer = (state /*= initialState*/, action) => {
    switch (action.type) {
        case 'SAVE_WIDGETS':
            console.log("IN Save Widgets" + state.topicId);
            fetch('http://localhost:8080/api/topic/' + state.topicId + '/widget' ,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(state.widgets)
            });
            console.log();
            return state;
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            return {
                courseId: state.courseId,
                moduleId: state.moduleId,
                lessonId: state.lessonId,
                topicId : state.topicId,
                widgets: [
                    action.widget,
                    ...state.widgets,

                ]
            }
        case 'UPDATE_WIDGET':
            return {
                courseId: state.courseId,
                moduleId: state.moduleId,
                lessonId: state.lessonId,
                topicId : state.topicId,
                widgets: state.widgets.map(
                    widget => {
                        if (widget.id === action.widget.id) {
                            return action.widget
                        } else {
                            return widget
                        }
                    }
                )
            }

        default :
            return state
    }
};