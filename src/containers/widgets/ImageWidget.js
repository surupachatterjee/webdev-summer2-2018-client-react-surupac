import React from 'react'

const ImageWidget = ({widget, updateWidget, preview}) => {
    let src;
    let name;
    return (
        <div>
            {!preview &&
            <div>
                <h1>Image Widget</h1>
                <label htmlFor="url">Image URL</label>
                <input className="form-control"
                       ref={node => src = node}
                       defaultValue={widget.src}
                       onChange={() => {
                           widget.src = src.value;
                           updateWidget(widget);
                       }}
                       placeholder="Enter Image URL  here"
                       id="url"/> <br/>
                <label htmlFor="iname">Widget Name</label>
                <input className="form-control"
                       ref={node => name = node}
                       defaultValue={widget.name}
                       placeholder="Widget Name"
                       onChange={() => {
                           widget.name = name.value
                           updateWidget(widget)
                       }}
                       id="iname"/>
                <br/>

                <h4>Preview</h4>
            </div>}
            {/*{widget.src}*/}
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