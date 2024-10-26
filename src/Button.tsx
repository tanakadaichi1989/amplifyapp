import React from 'react';

interface Props {
    text:string,
    linkURL:string
}

class Button extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className = "ButtonComponent">
                <div className = "Button">
                    <a href={this.props.linkURL}>{this.props.text}</a>
                </div>
            </div>
        )
    }
}

export default Button;