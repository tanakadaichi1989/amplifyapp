import React from 'react';

interface Props {
    name: string;
}

class SNS extends React.Component<Props> {
    render(){
        return(
            <div className = "SNS">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default SNS;