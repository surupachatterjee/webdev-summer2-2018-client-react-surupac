import React from 'react'
import HeadingWidget from './HeadingWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from './LinkWidget'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Toggle from 'react-toggle'
import '../../css/toggle.css'


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
                <div className="float-right">
                <label>
                    <Toggle
                        className="react-toggle pull-right"
                        defaultChecked={this.props.preview}
                        onChange={() =>{
                            console.log(this.props.preview)
                            this.props.changePreviewStatus()}} />
                    <span>Preview</span>
                </label>
                {/*<button className="btn btn-primary float-right"
                        onClick={() =>{
                            console.log(this.props.preview)
                            this.props.changePreviewStatus()}}>
                    Preview</button>*/}
                {!this.props.preview &&
                <button onClick={() => {
                    this.props.saveWidgets(
                        this.props.topicId,
                        this.props.widgets)}}
                        className="btn btn-secondary float-right">
                    Save
                </button>}
                </div>

                {/*<h1>Widget List ({this.props.widgets.length},{this.props.topicId})</h1>*/}
                <div>
                <ul className="list-group">
                    {!this.props.preview &&
                    <li className="list-group-item">
                        <div className="input-group mb-3">
                        <input  ref={(node) => {
                            this.widgetTitle =node
                        }}
                                className="form-control"
                                placeholder="Enter Widget Title"/>
                            <div className="input-group-append">
                        <button className="btn btn-success float-right fa fa-plus"
                                onClick={() =>
                                {
                                    let widget ={
                                        title : this.widgetTitle.value,
                                        id : -1* (this.props.widgets.length+1),
                                        widgetType:this.widgetType.value,
                                        widgetOrder:0
                                    }
                                    this.props.createWidget(widget)
                                    this.widgetTitle.value=''
                                }}>
                        </button>
                            </div>
                        </div>
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
                    </li>}
                    {this.props.widgets.map((widget, index) =>
                        <li className="list-group-item"
                            key={index}>
                            {widget.title}
                            { widget.widgetOrder !== 0 && !this.props.preview &&
                            <button className="float-right btn btn-warning fa fa-arrow-up"
                                    onClick={() => {this.props.moveUpWidget(widget.id)}}></button>
                            }{widget.widgetOrder !== this.props.widgets.length-1 && !this.props.preview &&
                        <button className="float-right btn btn-warning fa fa-arrow-down"></button>
                        }
                            {!this.props.preview &&
                            <select className="float-right"
                                    value={widget.widgetType}
                                    onChange={(event) => {
                                        console.log(widget.id +' : '+widget.widgetType + ' : '+ event.target.value);
                                        this.props.changeWidgetType(widget.id, event.target.value)}}
                            >
                                <option value="HEADING">Heading Widget</option>
                                <option value="PARAGRAPH">Paragraph Widget</option>
                                <option value="LIST">List Widget</option>
                                <option value="LINK">Link Widget</option>
                                <option value="IMAGE">Image Widget</option>

                            </select>}
                            {!this.props.preview &&
                            <button onClick={() => {
                                this.props.deleteWidget(widget.id)
                            }}
                                    className=" fa fa-times btn btn-danger float-right">
                            </button>}
                            <div>
                                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
                                {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
                                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
                                {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
                                {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
                            </div>

                        </li>


                    )}
                </ul>
                </div>
            </div>)
    }
}

export default WidgetListComponent;