import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';


class TopicPillItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item ">
                <a className="nav-link alert-info"
                   href="#">
                    {this.props.topic.title}
                </a>
            </li>
        )
    }
}

export default TopicPillItem;