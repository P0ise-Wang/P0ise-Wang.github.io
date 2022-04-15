import React, { Component } from 'react';
import '../aItem/item.css';
import '../aCss/color.css';

class Item extends Component{
    
    render() {

        var percent = (1-this.props.value / this.props.max)*100;
        return (
            <div className="shape position" style={{ width: "20px" }}>
                <div className={"fill "+this.props.color}>
                    <div className="_background"  style={{ height: percent+"%" }}></div>
                </div>
                <div className="arrayValue">
                    {this.props.value}
                </div>
            </div>
          );
    }

  
}

export default Item;