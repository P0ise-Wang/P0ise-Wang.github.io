import React, { Component } from 'react';
import '../aCss/app.css';

class Code extends Component{
    
    render() {

        return (
            <code className={"code "+this.props.highLightFlag}>{this.props.value}</code>
          );
    }

  
}

export default Code;