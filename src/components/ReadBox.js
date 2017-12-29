import React from 'react';

const ReadBox = (props) => {
    return (
        <div className="box">
            <h1 className="title">Compiled Markdown</h1>
            <hr />
            <div className="content" dangerouslySetInnerHTML={props.getHTML()}></div>
        </div>
    );
}


export default ReadBox;
