import React from 'react'

const ParagraphWidget = ({widget, updateWidget, preview}) => {
    let text;
    let pname;
    return (
        <div>
            {!preview &&
            <div>
                <h1>Paragraph Widget</h1>
                <label htmlFor="ptext">Paragraph Text</label>
                <textarea className="form-control"
                          placeholder="Paragraph Text"
                          defaultValue={widget.text}
                          ref={node => text = node}
                          onChange={() => {
                              widget.text = text.value;
                              updateWidget(widget)
                          }}
                          id="ptext"/>
                <label htmlFor="pname">Widget Name</label>
                <input className="form-control"
                       placeholder="Widget Name"
                       defaultValue={widget.name}
                       ref={node => pname = node}
                       onChange={() => {
                           widget.name = pname.value
                           updateWidget(widget)
                       }}
                       id="pname"/>
                <h4>Preview</h4>
            </div>}
            {widget.text}
        </div>
    )
}

export default ParagraphWidget;