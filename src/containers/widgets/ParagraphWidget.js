import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) => {
    let text;
    return (
        <div>
            <h1>Paragraph Widget</h1>
            <label htmlFor="ptext">Paragraph Text</label>
            <textarea className="form-control"
                      placeholder="Paragraph Text"
                      ref={node => text = node}
                      onChange={() =>
                      {
                          widget.text = text.value;
                          updateWidget(widget)
                      }}
                      id="ptext"/>
            <label htmlFor="pname">Widget Name</label>
            <input className="form-control"
                   placeholder="Widget Name"
                   id="pname"/>
            <h4>Preview</h4>
            {widget.text}
        </div>
    )
}

export default ParagraphWidget;