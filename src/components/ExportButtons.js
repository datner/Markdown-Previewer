import React from 'react';

const ExportButtons = ( props ) => {
    return (
        <div className="field is-grouped">
            <a className="control button is-danger" href={ `data:text/plain;charset=utf-8,${encodeURIComponent(props.input)}` } download="myMarkdownRaw.txt">Save to txt</a>
            <a className="control button is-warning" href={ `data:text/plain;charset=utf-8,${encodeURIComponent(props.input)}` } download="myMarkdown.md">Save to md</a>
            <a className="control button is-success" href={ `data:text/plain;charset=utf-8,${encodeURIComponent(props.html)}` } download="myMarkdownToHTML.html">Save to html</a>
        </div>
    );
};

export default ExportButtons;
