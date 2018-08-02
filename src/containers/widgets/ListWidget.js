import React from 'react'

const ListWidget = ({widget, updateWidget, preview}) => {
    let text;
    let ltype;
    return (
        <div>
            {!preview &&
            <div>
                <h1>List Widget</h1>
                <label htmlFor="ltext">List Text</label>
                <textarea className="form-control"
                          placeholder="Enter one list item per line"
                          value={widget.listItems}
                          ref={node => text = node}
                          id='ltext'
                          onChange={() => {
                              widget.listItems = text.value;
                              updateWidget(widget)
                          }}
                /><br/>
                <label htmlFor="ltype">List Type</label>
                <select className="form-control"
                        ref={node => ltype = node}
                        defaultValue={widget.listType}
                        id="ltype"
                        onChange={() => {
                            widget.listType = ltype.value
                            updateWidget(widget)
                        }}>
                    {/*<option value="" selected disabled hidden>Choose List Type</option>*/}
                    <option value='UNORDERED'>Unordered List</option>
                    <option value='ORDERED'>Ordered List</option>


                </select>
                <h4>Preview</h4>
            </div>}
            {/*{!widget.listItems === '' &&*/}
            <div>
            {widget.listType === '' &&
            <ul>
                {widget.listItems.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
            }
            {widget.listType === 'ORDERED' &&
            <ol>
                {widget.listItems.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ol>}
            {widget.listType === 'UNORDERED' &&
            <ul>
                {widget.listItems.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
            }
            </div>/*}*/
        </div>
    )
};

export default ListWidget;