import React from 'react';

interface Props {
    photoURL: string
    kind: string
    title: string
}

class News extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className="News">
                <div className="newsPhoto"></div>
                <p className="newsKind">{this.props.kind}</p>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default News;