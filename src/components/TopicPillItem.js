import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class TopicPillItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ul className="nav nav-pills nav-justified">
                <li className="nav-item ">
                    <a className="nav-link"
                       href="#">
                      {this.props.topic.title}
                    </a>
                      </li>
            </ul>

        )
    }
}

export default TopicPillItem;