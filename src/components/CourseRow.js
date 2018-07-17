import React from 'react'
import {Link} from 'react-router-dom'

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
            <td></td>
            <td></td>
            {/*<td>
                <Link to=
                          {`/course/${this.props.course.id}/edit`}>
                    {this.props.course.title}
                </Link>
            </td>*/}
            <td><button
                className="fa-2x fa fa-times"
                onClick={() =>
                {this.props.delete(this.props.course.id)}}>
            </button></td>
        </tr>
    )
}
}

export  default CourseRow;