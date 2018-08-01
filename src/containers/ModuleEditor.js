import React from 'react';
import LessonTabs from "./LessonTabs";
import LessonEditor from "./LessonEditor";
import ModuleServiceClient from "../services/ModuleServiceClient";

class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.setCourseId =this.setCourseId.bind(this);
        this.setModuleId =this.setModuleId.bind(this);
        this.setModule=this.setModule.bind(this);
        this.findModuleByID =this.findModuleByID.bind(this);
        this.moduleService = ModuleServiceClient.instance;
        this.state = {
            module: {title: '',
                moduleId:''},
            courseId: '',
            moduleId: ''
        };
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.findModuleByID(moduleId);
        this.setState
        ({moduleId: moduleId});
    }

    setModule(module)
    {
        this.setState({module:{
            title:module.title,moduleId:module.moduleId
            }});
    }

    findModuleByID(moduleId){
        this.moduleService.findModuleById(moduleId)
            .then((module) => {
                this.setModule(module)
            });
    }

    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);
        this.setModuleId(
            this.props.match.params.moduleId);


        /*this.setModule(this.props.match.params.modu)*/
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps of ModuleEditor");
        //console.log("Inside module editor componentWillReceiveProps" + newProps.match.params.module.title);
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);
        //this.findModuleByID(this.props.match.params.moduleId);
        //this.setModule(newProps.match.params.module);
    }


    render() {
        console.log(this.state.module)
        return (
            <div>
            {/*<h1>Module Editor</h1>*/}
                <h4>{this.state.module.title}  - {this.state.courseId}- {this.state.moduleId}</h4>
                <LessonTabs courseId = {this.state.courseId}
                            moduleId ={this.state.moduleId}/>
            </div>
    )}
}

export default ModuleEditor;
