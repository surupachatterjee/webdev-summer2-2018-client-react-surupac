import React from 'react'

const ImageWidget = ({widget, updateWidget}) => {
    let src;
    return (
        <div>
            <h1>Image Widget({widget.id})</h1>
            <label htmlFor="url">Image URL</label>
            <input className="form-control"
                   ref={node => src=node}
                   onChange={() =>
                   {
                       widget.src = src.value;
                       updateWidget(widget);
                   }}
                    placeholder="Enter Image URL  here"
                    id="url"/> <br/>
            <label htmlFor="iname">Widget Name</label>
            <input className="form-control"
                   placeholder="Widget Name"
                   id="iname"/> <br/>
            <h4>Preview</h4>
            {widget.src}
            <div className="embed-responsive embed-responsive-4by3">
                <iframe
                    className="embed-responsive-item"
                    src={widget.src}
                    frameBorder="0"
                    width="560"
                    height="315"
                >
                </iframe>
            </div>
        </div>
    )
};

export default ImageWidget;