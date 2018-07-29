import React from 'react'

const ListWidget =({widget ,updateWidget}) => {
    let text;
    let ordered;
    return(
        <div>
            <h1>List Widget</h1>
            <label htmlFor="ltext">List Text</label>
            <textarea className="form-control"
                      placeholder="Enter one list item per line"
                      value={widget.listItems}
                      ref={node => text=node}
                      id='ltext'
                      onChange={() =>
                      {
                          widget.listItems = text.value;
                          updateWidget(widget)
                      }}
            /><br/>
            <label htmlFor="ltype">List Type</label>
            <select className="form-control"
                    ref={node => ordered=node}
                    id="ltype"
                    onChange={() =>
                    {
                        widget.ordered=ordered.value
                        updateWidget(widget)
                    }}>
                <option value='ul'>Unordered List</option>
                <option value='ol'>Ordered List</option>



            </select>
            <h4>Preview</h4>
            {widget.ordered ==='ol'  &&
            <ol>
                {widget.listItems.split('\n').map((item,index) => (
                    <li key={index}>{item}</li>
                    )
                )}
            </ol>}
            {widget.ordered==='ul' &&
            <ul>
                {widget.listItems.split('\n').map((item,index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
            }
        </div>
    )
};

export default ListWidget;