import WidgetService from '../services/WidgetService';

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

let widgetService = WidgetService.instance;

export const widgetReducer = (state /*= initialState*/, action) => {
    switch (action.type) {
        case 'SAVE_WIDGETS':
            return{
                ...state,
                widgets:action.widgets
            }
        case 'DELETE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            return {
                ...state,
                widgets: [
                    action.widget,
                    ...state.widgets,

                ]
            }
        case 'UPDATE_WIDGET':
            return {
                ...state,
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
        case 'FINDALL_WIDGETS_FOR_TOPIC':
            //state.widgets = widgetService.findAllWidgetsForTopic(state.topicId);
            return {
                ...state,
                widgets: action.widgets
            }
        default :
            return state
    }
};