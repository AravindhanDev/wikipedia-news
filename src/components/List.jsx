import React from 'react'

const List = (props) => {
    const renderedList = props.info.map((item) => {
        return (
            <div key={item.pageid} className="ui segment content" style={{padding: "2rem"}}>
                <h2>
                <a href={"https://en.wikipedia.org?curid="+item.pageid} 
                className="header" 
                target="_blank"
                rel="noreferrer">{item.title}</a> 
                </h2>
                <p dangerouslySetInnerHTML={{__html: item.snippet}}></p>
            </div>
        );
    });

    return renderedList;
};

export default List