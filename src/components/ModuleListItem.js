import React from 'react';
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            modTitle:''
        };

       // this.renderInput = this.renderInput.bind(this);
        this.setmodTitle=this.setmodTitle.bind(this);
    }

    setmodTitle(event)
    {
        this.setState({
            modTitle:event.target.value
        })
    }

    render() {
        return (


            <li className="list-group-item">
            <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                {this.props.module.title}
            </Link>
                <span className="float-right">
                <button className="fa fa-times btn-danger"
                        onClick={() =>
                        {
                            if(window.confirm("You are about to delete module " + `${this.props.module.title}` ))
                            this.props.delete(this.props.module.id)}}>
                </button>
                <button className="fa fa-pencil btn-secondary"
                onClick={()=>
                {this.props.edit(this.props.module,
                                this.props.module.id)}}>
                </button>
                </span>
            </li>




        );
    }





}
export default ModuleListItem;