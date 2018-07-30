const TOPIC_API_URL = "https://course-management-stc.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic";
const BASE_URL ="https://course-management-stc.herokuapp.com/api/";

let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    upsertWidgets(topicID,widgets){
        return fetch('http://localhost:8080/api/topic/' + topicID+ '/widget' ,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(widgets)
        }).then(function (response){
            return response.json();
        });
    }

    findAllWidgetsForTopic(topicID){
        return fetch('http://localhost:8080/api/topic/' + topicID+ '/widget'
        ).then(function (response){
            return response.json();
        });
    }

    deleteWidgetByID(widgetId){
        return fetch('http://localhost:8080/api/widget/' + widgetId,{
            method:'DELETE'
        });
    }
}