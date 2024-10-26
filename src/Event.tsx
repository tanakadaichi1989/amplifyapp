import React from 'react';

interface Props {
    name: string
}

class Event extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className="Event">
                <div className="eventPhoto">     
                </div>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Event;