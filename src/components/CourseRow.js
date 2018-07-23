import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Modal from '../../node_modules/react-modal'



class CourseRow extends React.Component
{

    constructor(props)
    {
        super(props);
    }



    render(){
    return(
        <tr>

            <td>
                <Link to=
                          {`/course/${this.props.course.id}/edit`}>
                {this.props.course.title}
                </Link>
                </td>
            <td>me</td>
            <td>{this.props.course.modified}</td>
            {/*<td>
                <Link to=
                          {`/course/${this.props.course.id}/edit`}>
                    {this.props.course.title}
                </Link>
            </td>*/}
            <td>
                <button
                className="fa fa-times btn-danger"
                data-toggle="modal"
                data-target="#deleteCourseRow"
                onClick={(event)=>{
                    if(window.confirm("You are about to delete course "+ `${this.props.course.title}`))
                        this.props.delete(this.props.course.id)}}>
            </button>
            </td>
            <td>
                <button
                    className="fa fa-pencil btn-secondary"
                    onClick={() =>
                    {this.props.edit(this.props.course.id,
                        this.props.course.title)}}>
                </button>
            </td>

        </tr>

    )
}




}

export  default CourseRow;