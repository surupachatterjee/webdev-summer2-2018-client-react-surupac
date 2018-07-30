import React from 'react'
import HeadingWidget from './HeadingWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from './LinkWidget'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class WidgetListComponent extends React.Component{
    constructor(props)
    {
        super(props)
        console.log(this.props.topicId);
        let widgetTitle;
        let widgetType;
        let topicIDN;
        this.props.loadAllWidgets(this.props.topicId);
        console.log("Widgets count in Component:" +this.props.widgets.length);
    }

    render()
    {
        console.log(this.props.topicId);
        return(
            <div>
                <button onClick={() => {
                    this.props.saveWidgets(
                        this.props.topicId,
                        this.props.widgets)}}
                        className="btn btn-primary float-right">
                 SAVE
                </button>
                <h1>Widget List ({this.props.widgets.length},{this.props.topicId})</h1>

                <ul className="list-group">
                    <li className="list-group-item">
                        <input  ref={(node) => {
                            this.widgetTitle =node
                        }}
                                className="form-control"/>
                        <button className="btn btn-success float-right"
                                onClick={() =>
                                {
                                    let widget ={
                                        title : this.widgetTitle.value,
                                        id : -1* (this.props.widgets.length+1),
                                        widgetType:this.widgetType.value
                                    }
                                    this.props.createWidget(widget)
                                    this.widgetTitle.value=''
                                }}>Add Widget
                        </button>
                        <select className="form-control"
                                ref={(node) =>
                                {
                                    this.widgetType =node
                                }}>
                            <option value="HEADING">Heading Widget</option>
                            <option value="PARAGRAPH">Paragraph Widget</option>
                            <option value="LIST">List Widget</option>
                            <option value="LINK">Link Widget</option>
                            <option value="IMAGE">Image Widget</option>
                        </select>
                    </li>
                    {this.props.widgets.map((widget, index) =>
                        <li className="list-group-item"
                            key={index}>
                            {widget.title}
                            <button className="float-right btn btn-warning fa fa-arrow-up"></button>
                            <button className="float-right btn btn-warning fa fa-arrow-down"></button>
                            <button onClick={() => {
                                this.props.deleteWidget(widget.id)
                            }}
                                    className=" fa fa-times btn btn-danger float-right">
                            </button>
                            <div>
                                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                            </div>

                        </li>


                    )}
                </ul>
            </div>)
    }
}

export default WidgetListComponent;