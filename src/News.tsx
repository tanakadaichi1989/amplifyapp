import React from 'react';

interface Props {
    name: string
}

class News extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className="News">
                <div className="newsPhoto">     
                </div>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default News;