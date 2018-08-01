/*
const MODULE_API_URL ='http://localhost:8080/api/course/CID/module';
const MODULE_API_URLD = 'http://localhost:8080/api/module/MODULE_ID';
const BASE_MODULE_URL ="http://localhost:8080/api/"
*/

const MODULE_API_URL ='https://course-management-stc.herokuapp.com/api/course/CID/module';
const MODULE_API_URLD = 'https://course-management-stc.herokuapp.com/api/module/MODULE_ID';
const BASE_MODULE_URL ="https://course-management-stc.herokuapp.com/api/";


let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findModuleById(moduleId)
    {
        return fetch(
            BASE_MODULE_URL + "module/" +moduleId)
            .then(function (response) {
                return response.json();
            })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URLD.replace
        ('MODULE_ID', moduleId), {
            method: 'delete'
        })
    }

    updateModule(moduleId,module)
    {
        return fetch(BASE_MODULE_URL + 'module/'+moduleId,
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then(function (response)
        { return response.json(); })
    }



}
