const LESSON_API_URL = "http://localhost:8080/api/course/CID/module/MID/lesson";
const BASE_URL = "http://localhost:8080/api/";

let _singleton = Symbol();
export default class LessonServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonServiceClient(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteLesson(lessonId) {
        return fetch(BASE_URL + 'lesson/' + lessonId, {
            method: 'DELETE'
        })
    }

    updateLesson(lessonId, lesson) {
        return fetch(BASE_URL + 'lesson/' + lessonId,
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            }).then(function (response) {
            return response.json();
        })
    }

}
