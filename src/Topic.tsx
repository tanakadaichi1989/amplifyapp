import React from 'react';

interface Props {
    name: string
}

class Topic extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className="Topic">
                <div className="topicPhoto">     
                </div>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Topic;
