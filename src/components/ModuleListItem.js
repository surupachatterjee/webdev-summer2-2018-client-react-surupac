import React from 'react';
import {Link} from 'react-router-dom'

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (


            <li className="list-group-item">
            <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                {this.props.module.title}
            </Link>
                <span className="float-right">
                <button className="fa fa-trash"
                        onClick={() =>
                        {this.props.delete
                        (this.props.module.id)}}>
                </button>
                <button className="fa fa-pencil"></button>
                </span>
            </li>




        );
    }



}
export default ModuleListItem;