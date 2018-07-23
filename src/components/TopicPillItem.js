import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';


class TopicPillItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topic :{
                currTitle: ''
            }
        };

        this.setCurrTitle = this.setCurrTitle.bind(this);
    }

    setCurrTitle(event) {
        this.setState(
            {topic :{
                currTitle: event.target.value
            }})
    }


    


    render() {
        return (
            <div>
            <li className="nav-item col-sm-auto">
                <div className="col-xs-3">
                <span className="nav-link alert-info">
                    <input defaultValue={this.props.topic.title}
                           className=" form-control nav-link alert-info"
                           style={{"border": "none", "size":"12"}}
                            onChange={this.setCurrTitle}>
                    </input>
                    <button className="fa fa-check btn-success" onClick={(event) =>
                    {
                        this.props.edit(this.props.topic.id,this.state.topic.currTitle)

                    }}>
                    </button>
                    <button className="fa fa-times btn-danger" onClick={
                        () =>{
                            if(window.confirm("You are about to delete topic " + `${this.props.topic.title}`))
                        this.props.delete(this.props.topic.id)}}>
                </button>
                </span>

                </div>


            </li>


            </div>


        )
    }
}

export default TopicPillItem;