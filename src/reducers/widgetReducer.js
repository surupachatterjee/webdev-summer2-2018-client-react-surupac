import WidgetService from '../services/WidgetService';

let initialState = {
    courseId: '',
    moduleId:'',
    lessonId:'',
    topicId : 0,
    widgets: [],
    preview:false,

};

let widgetService = WidgetService.instance;
let fromIndex;
let toIndex;
let wdgtBfr;
let wdgtAfter;

export const updateOrder = (widget,order) => {
    return {
        ...widget,
        widgetOrder:order
    }
}

export const updateType = (widget,wdType) => {
    return {
        ...widget,
        widgetType:wdType
    }

}

export const widgetReducer = (state =initialState, action) => {
    switch (action.type) {
        case 'SET_TOPICID' :
            return{
                ...state,
                topicId:action.topicId
            }
        case 'CHANGE_PREVIEW':
            console.log(state.preview)
            return{
                ...state,
                preview:!state.preview
            }
        case 'CHANGE_TYPE' :
            let index = state.widgets.findIndex((wdgt) => wdgt.id === action.widgetID);
            console.log(index+':'+action.widgetID);
            return {
                ...state,
                widgets:
                state.widgets.map((wdgt) => {
                        if (wdgt.id === action.widgetID)
                            return {...wdgt,
                                widgetType: action.wdType};
                        return wdgt;
                })

            };
        case 'MOVEUP_WIDGET' :
            fromIndex = state.widgets.findIndex((wdgt) => wdgt.id === action.widgetId);
            toIndex = fromIndex-1;
            return {
                ...state,
                widgets:[
                    ...state.widgets.slice(0,toIndex),
                    updateOrder(state.widgets[fromIndex],toIndex),
                    updateOrder(state.widgets[toIndex],fromIndex),
                    ...state.widgets.slice(fromIndex+1)
                ]
            };
        case 'MOVEDOWN_WIDGET' :
            fromIndex = state.widgets.findIndex((wdgt) => wdgt.id === action.widgetId);
            toIndex = fromIndex+1;
            return {
                ...state,
                widgets:[
                    ...state.widgets.slice(0,fromIndex),
                    updateOrder(state.widgets[toIndex],fromIndex),
                    updateOrder(state.widgets[fromIndex],toIndex),
                    ...state.widgets.slice(toIndex+1)
                ]
            };
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
                    ...state.widgets.map((wgt) => {return {...wgt,widgetOrder:wgt.widgetOrder+1}}),

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