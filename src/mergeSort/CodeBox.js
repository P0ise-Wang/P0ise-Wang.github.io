import React, { Component } from 'react';
import '../aCss/color.css';
import '../aCss/app.css';
import Code from '../aCode/code';


class CodeBox extends Component {

    codeBox(preCodeArr){

        var codebox = [];
        for(var i = 0; i < preCodeArr.length; i++){
            var flag = "";
            if(i===this.props.hlp){
                flag = "_h";
            }
            if(i !== this.props.hlp){
                flag = "";
            }
            if(this.props.sorting===0){
                flag = "";
            }
            var code = (
                <Code key={i} value={preCodeArr[i]} highLightFlag={flag}></Code>
            );
            codebox.push(code);
        }
        return codebox;
    }

    render() {
        //var arr = [53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35];
        return (
            <div className = "CodeBox1" id="scrollbar">
                {this.codeBox(this.props.preCodeArr)}
            </div>
        );
    }
}

export default CodeBox;