import React from 'react';
import ModuleServiceClient from '../services/ModuleServiceClient'
import ModuleListItem from '../components/ModuleListItem'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleEditor from './ModuleEditor'


class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: '',
                moduleId:''},
            modules: []
        };
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleTitle =
            this.setModuleTitle.bind(this);
        this.createModule =
            this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.updateModule = this.updateModule.bind(this);
        this.saveModule =this.saveModule.bind(this);

        this.moduleService = ModuleServiceClient.instance;


    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleTitle(module,id) {
        this.setState({
            module: {
                moduleId:id,
                title: module.title
            }
        })
    }

    saveModule(event)
    {

        this.setState(
            {
                module:{
                    title:event.target.value,
                    moduleId:this.state.module.moduleId

                }
            }
        )
        console.log(event.target.value +":"+ this.state.module.moduleId);
    }


    createModule() {
        this.moduleService
            .createModule
            (this.state.courseId,
                this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            })

    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }

    updateModule()
    {
        console.log("updateModule : " +this.state.module.title+
          ":" + this.state.module.moduleId);
        this.moduleService
            .updateModule(this.state.module.moduleId,
                this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);

    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }


    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    render() {
        console.log("inside modulelist.render" + this.state.courseId);
        return (
            <Router>
                {/*<div className="p-3 mb-2 bg-dark text-white">*/}
                <div className="row">
                    <div className="col-4">
                        {/* <h4>Module List for Course:{this.state.courseId}</h4>*/}
                        <div>
                            {this.renderModules()}
                        </div>
                        <br/>
                        <br/>
                        <div className="input-group mb-3">
                            <input placeholder="New Module"
                                   className="form-control"
                                   defaultValue={this.state.module.title}
                                   onChange={this.saveModule}/>
                            <div className="input-group-append">
                                <button onClick={this.createModule}
                                className="fa fa-plus btn-danger"></button>
                            </div>
                            <div className="input-group-append">
                                <button
                                    onClick={this.updateModule}
                                        className="fa fa-check btn-success"></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}/>
                    </div>
                </div>
               {/* </div>*/}


            </Router>

        )
    }


    renderModules() {

        var modules =
            this.state.modules.map((module) => {
                return <ModuleListItem key={module.id}
                                       courseId={this.state.courseId}
                                       module={module}
                                       delete={this.deleteModule}
                                        edit={this.setModuleTitle}/>

            });
        return (<ul className="list-group">{modules}</ul>);

    }


}


export default ModuleList;