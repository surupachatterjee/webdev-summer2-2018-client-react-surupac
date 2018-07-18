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
            module: {title: ''},
            modules: []
        };
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleTitle =
            this.setModuleTitle.bind(this);
        this.createModule =
            this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

        this.moduleService = ModuleServiceClient.instance;


    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleTitle(event) {
        this.setState({
            module: {
                title: event.target.value
            }
        })
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
        return (
            <Router>
                <div className="row">
                    <div className="col-4">
                    <h4>Module List for Course:{this.state.courseId}</h4>
                        {this.renderModules()}
                    <input placeholder="New Module"
                           value={this.state.module.title}
                           onChange={this.setModuleTitle}/>
                    <button onClick={this.createModule}>Create</button>

                    </div>
                    <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}/>
                    </div>
                </div>


            </Router>

        )
    }


    renderModules() {

        var modules =
            this.state.modules.map((module) => {
                return <ModuleListItem key={module.id}
                                       courseId = {this.state.courseId}
                                       module={module}
                                       delete={this.deleteModule}/>

            });
        return (<ul>{modules}</ul>);

    }


}


export default ModuleList;