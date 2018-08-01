import React from 'react'


const HeadingWidget = ({widget, updateWidget, preview}) => {
    let htext;
    let size;
    let name;
    return (
        <div>

            {/*<h1>{widget.name}</h1>*/}
            {!preview &&
            <div>
                <h1>Heading Widget</h1>
                <label htmlFor="htext">Heading Text</label>
                <input placeholder="Heading Text"
                       ref={node => htext = node}
                       defaultValue={widget.text}
                       className="form-control"
                       onChange={() => {
                           widget.text = htext.value;
                           updateWidget(widget)
                       }}
                       id="htext"/><br/>
                <label htmlFor="hsize">Heading Size</label>
                <select className="form-control"
                        defaultValue={widget.size}
                        onChange={() => {
                            widget.size = Number.parseInt(size.value);
                            updateWidget(widget)
                        }}
                        ref={node => size = node}
                        id="hsize">
                    <option value="" selected disabled hidden>Choose Heading Size</option>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                </select><br/>
                <label htmlFor="hname">Widget Name</label>
                <input placeholder="Widget Name"
                       defaultValue={widget.name}
                       ref={node => name = node}
                       className="form-control"
                       onChange={() => {
                           widget.name = name.value
                           updateWidget(widget)
                       }}
                       id="hname"/>

                <h4>Preview</h4>
            </div>}
            {widget.size === '' && <h1>{widget.text}</h1>}
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}

        </div>
    )
};


export default HeadingWidget;