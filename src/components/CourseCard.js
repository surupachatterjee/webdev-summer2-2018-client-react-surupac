import React from 'react'
import {Link} from 'react-router-dom'

class CourseCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card" styles={{width: '18rem'}}>
                    {/*<img className="card-img-bottom"
                         src="https://picsum.photos/279/200"/>*/}
                    <div className="card-body">
                        <a href={`/course/${this.props.course.id}/edit`} className="card-title">{this.props.course.title}</a>

                        <p className="card-text">Last Modified {this.props.course.modified}
                        <a  className="fa fa-ellipsis-v pull-right align-bottom"></a>
                        </p>

                    </div>
                </div>
            </div>
        )
    }

}


export default CourseCard;