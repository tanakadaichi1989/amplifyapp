import React from 'react';

interface Props {
    photoURL: string
    kind: string
    title: string
}

class Topic extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className="Topic">
                <div className="topicPhoto"></div>
                <p className="topicKind">{this.props.kind}</p>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Topic;
