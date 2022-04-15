import React, { Component } from 'react';
import '../aCss/color.css';
import '../aCss/app.css';
import Item from '../aItem/item';


class ItemList extends Component {

    itemList(arr){

        var itemList = [];
        for(var i = 0; i < arr.length; i++){
            var color = "_arr";
            if(i===this.props.index[1]){
                color = "_indexp";
            }
            if(i <= this.props.index[0] && i !== this.props.index[1]){
                color = "_complete";
            }
            if(this.props.sorting===0){
                color = "_arr";
            }
            var item = (
                <Item key={i} value={arr[i]} max={this.props.max} color={color} w={this.props.arr.length}></Item>
            );
            itemList.push(item);
        }
        return itemList;
    }

    render() {
        //var arr = [53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35,53,96,84,75,62,35,15,42,85,96,85,73,51,42,53,96,84,75,62,35];
        return (
            <div className = "canvas _background">
                {this.itemList(this.props.arr)}
            </div>
        );
    }
}

export default ItemList;