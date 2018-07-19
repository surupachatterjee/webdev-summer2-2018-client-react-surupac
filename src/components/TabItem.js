import React from 'react'
import {Link} from 'react-router-dom'


class TabItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currTitle: ''
        };

        this.setCurrTitle = this.setCurrTitle.bind(this);
    }

    setCurrTitle(event) {
        this.setState({currTitle: event.target.value})
    }


    render() {
        return (
            <ul className=" nav nav-tabs">
                <li className="nav-item">
                    <span className="nav-link active">
                    <Link
                        to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                        <input defaultValue={this.props.lesson.title}
                               style={{"border": "none"}}
                               contentEditable="true"
                               onChange={this.setCurrTitle}
                        ></input>
                    </Link>
                    <button className="fa fa-times"
                            onClick={() => {
                                this.props.delete(this.props.lesson.id)
                            }}></button>
                        <button className="fa fa-save"
                                onClick={() => {
                                    this.props.lesson.title = this.state.currTitle;
                                    this.props.edit(this.props.lesson.id,
                                        this.props.lesson)
                                }}></button>
                    </span>

                </li>
            </ul>
        )
    }
}

export default TabItem;