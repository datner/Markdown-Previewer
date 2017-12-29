import React from 'react';

// React Components
import Dropzone from 'react-dropzone';
import ExportButtons from './ExportButtons';

const WriteBox = (props) => {
    return (
        <div className="box">
            <div className="level">
                <div className="level-left">
                    <h1 className="title">Enter Markdown</h1>
                </div>
                <div className="level-right">
                    <ExportButtons input={props.input} html={props.html} />
                </div>
            </div>
            <textarea cols="10" rows="10" value={ props.input } onChange={props.updateInput} />
            <Dropzone style={{ height: '10%', width: '100%', border: 'solid 1px black'}}
                    multiple={false}
                    accept="text/plain, text/html"
                    onDrop={ props.onDrop }
                    >
                <span>Drag and drop a markdown .txt or an html file. Click for file dialog :)</span>
            </Dropzone>
        </div>
    );
}

export default WriteBox;
                            