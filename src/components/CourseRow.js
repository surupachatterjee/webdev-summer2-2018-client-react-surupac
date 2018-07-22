import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class CourseRow extends React.Component
{

    constructor(props)
    {
        super(props);
        //this.modalrender =this.modalrender.bind(this);

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
                className="fa fa-times"
                data-toggle="modal"
                data-target="#deleteCourseRow"
                onClick={(event)=>{
                    if(window.confirm("Are you sure you want to delete this course?"))
                        this.props.delete(this.props.course.id)}}
                >
            </button>

            </td>
            <td>
                <button
                    className="fa fa-pencil"
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