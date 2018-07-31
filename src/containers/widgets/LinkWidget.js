import React from 'react'

const LinkWidget = ({widget,updateWidget,preview}) =>
{
    let linkurl;
    let linktext;
    let name;
    return(
        <div>
            <h1>Link Widget({widget.id}) - {widget.name}</h1>
            {!preview &&
            <div>
            <label htmlFor="linkurl">Link URL</label>
            <input placeholder="Link URL"
                   className="form-control"
                   ref={node => linkurl=node}
                   onChange={() =>
                   {
                       widget.href=linkurl.value
                       updateWidget(widget)
                   }}

                    id="linkurl"/><br/>

            <label htmlFor="linktext">Link Text</label>
            <input placeholder="Link Text"
                   className="form-control"
                   ref={node => linktext=node}
                   onChange={() =>
                   {
                       widget.text =linktext.value;
                       updateWidget(widget)

                   }}
                   id="linktext"/><br/>

            <label htmlFor="wname">Widget Name</label>
            <input placeholder="widget Name"
                   ref={node =>name=node}
                   onChange={() => {
                       widget.name=name.value
                       updateWidget(widget)
                   }}
                   className="form-control"
                   id="wname"/><br/>

            <h4>Preview</h4>
            </div>}
            <a href={widget.href}>{widget.text}</a>

        </div>
    )
}

export default LinkWidget;