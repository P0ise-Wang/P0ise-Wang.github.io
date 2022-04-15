import React, { Component } from 'react';
import '../aCss/app.css';
import ItemList from './itemList';
import IsCodeBox from './isCodeBox';
import $ from "jquery/dist/jquery.min";
import CodeBox from './CodeBox';

class InsertApp extends Component {

  constructor(proprs) {
    super(proprs);
    var n = 15;
    var r = 50;
    var speed = 500;
    var arr = this.randomArr(n, r);
    var oArr = [];
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    var preCodeArr = ['for i = 1 to i = 末尾元素位置: // a[i]是待插入元素',
                      '\xa0\xa0for j = i - 1 to j = 0: // a[j]是当前要与a[i]比较的元素',
                      '\xa0\xa0\xa0\xa0if 待插入元素a[i] &lt; 当前元素a[j]: 将a[j]右移一位',
                      '\xa0\xa0\xa0\xa0else: 插入元素a[i], 跳出当前循环'];
    this.state = {                       
      arr: arr,
      n: n,
      r: r,
      timeID: 0,
      index: [],
      interval: speed,
      sorting: 0,
      resetArr: oArr,
      initMeansRandom: 'none',
      initMeansInput: 'none',
      speeds:['慢速', '中速', '极速'],
      preCodeArr: preCodeArr,
      hlp: -1,
      id:0
    }
  }

  randomArr(n, r) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      var value = Math.floor(Math.random() * r) + 1;
      arr.push(value)
    }
    return arr;
  }

  init() {
    this.stop();
    var arr = [];
    for (var i=0; i<this.state.n; i++){
      arr[i] = this.state.resetArr[i];
    }
    this.setState({
      arr: arr,
      n: this.state.n,
      timeID: 0,
      index: [],
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      hlp: -1
    });
  }
  
  changeInitMeansInput(){
    this.setState({
      initMeansInput: 'block',
      initMeansRandom: 'none'
    });
  }

  changeInitMeansRandom(){
    this.setState({
      initMeansInput: 'none',
      initMeansRandom: 'block'
    });
  }
  
  render() {
    return (
      <div  className="app">
        <div className="Visualizer">
          <div className={"tutorial"+this.state.sorting}><code>i = {this.state.index[0]}, 待插入元素a[i] = {this.state.arr[this.state.index[2]]}, 比较元素a[j] = {this.state.arr[this.state.index[2]-1]}</code></div>
          <div className="canvas">
            <ItemList arr={this.state.arr} max={this.state.r} index={this.state.index} sorting={this.state.sorting}></ItemList>
          </div>
          <div className="buttons">
              <form action="insertApp.js">
                  排序：<button type="button" className="btn-light" onClick={() => this.start()}>插入排序</button><span >&nbsp;&nbsp;&nbsp;</span>
                  <button type="button" className="btn-light" onClick={() => this.init()}>重置</button><span >&nbsp;&nbsp;&nbsp;</span>
                  <button type="button" className="btn-light" onClick={() => this.stop()}>暂停</button><span >&nbsp;&nbsp;&nbsp;</span>
                  <button type="button" className="btn-light" onClick={() => this.nextstep()}>下一步</button><span >&nbsp;&nbsp;&nbsp;</span>
                  <button type="button" className="btn-light" onClick={() => this.laststep()}>上一步</button><span >&nbsp;&nbsp;&nbsp;</span>
                  <br></br><br></br>
                  生成数组方式：&nbsp;&nbsp;
                  <button type="button" className="btn-light" onClick={() => this.changeInitMeansRandom()}>随机化生成</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="button" className="btn-light" onClick={() => this.changeInitMeansInput()}>自定义数组</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  排序速度：
                    <select onChange={(e)=>this.getValue(e)}>
                      {
                        this.state.speeds.map((ele,index)=>{
                          return(
                            <option key={index}>{ele}</option>
                          )
                        })
                      }
                    </select>
                    <br></br><br></br>
                  <div id="console1" style={{display: this.state.initMeansInput}}>
                  请输入生成数组元素：<input placeholder="请输入至多20个不大于50的数字，用空格分隔" maxLength = "100" size="50" id="inputArray"/>
                  &nbsp;&nbsp;<button type="button" className="btn-light" onClick={() => this.getUserInput()}>确定</button><br></br>
                  </div>
                  <div id="console2" style={{display: this.state.initMeansRandom}}>
                  请输入生成数组元素个数：<input placeholder="请输入1至20之间的数字" id="randomNum"/>
                  &nbsp;&nbsp;<button type="button" className="btn-light" onClick={() => this.count(parseInt($('input#randomNum').val()))}>随机化</button>
                  <br></br>
                  </div>
              </form>  
            </div>
        </div>
        <div className="CodeBox">
                <div className="CodeTitle">伪代码：</div>
                <CodeBox preCodeArr={this.state.preCodeArr} hlp={this.state.hlp} sorting={this.state.sorting}></CodeBox>
                <div className="CodeTitle">代码：</div>
                <IsCodeBox></IsCodeBox>
        </div>
      </div>
    );
  }
  
  getUserInput(){
    this.stop();
    var a=$('input#inputArray').val().split(" ");
    var arr=[];
    for (var i=0; i<a.length; ++i){
      arr[i] = parseInt(a[i]);
    }
    var oArr = [];
    for (var j = 0; j<arr.length; j++){
      oArr[j] = arr[j];
    }
    this.setState({
      arr: arr,
      n: arr.length,
      timeID: 0,
      index: [],
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      resetArr: oArr,
      hlp: -1
    })
  }

  getValue=(event)=>{
    console.log(event.target.value);
    if (event.target.value === '慢速') this.speed(500);
    else if (event.target.value === '中速') this.speed(100);
    else if (event.target.value === '极速') this.speed(1);
  }

  count(n){
    this.stop();
    var arr = this.randomArr(n, this.state.r);
    var oArr = [];
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    this.setState({
      arr: arr,
      n: n,
      timeID: 0,
      index: [],
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      resetArr: oArr,
      hlp: -1
    });
  }
  speed(speed) {
    var arr = [];
    for(var x = 0; x < this.state.n; x++){
      arr[x] = this.state.arr[x];
    }
    var arrStates = this.insertionSort(arr);
    if (this.state.sorting === 1) {
      this.stop();
      var timeID = setInterval(
        () => this.sort(arrStates),
        speed
      );
      this.setState({
        timeID: timeID,
        sorting: 1,
        interval: speed
      });
    }else{
      this.setState({
        interval: speed
      });
    }

  }


  sort(arrStates) {
    this.setState({sorting: 1})
    if(this.state.id < arrStates.length){
      const { arr: state, index: changing, highlight } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          index: changing,
          hlp: highlight,
          id: this.state.id + 1});}
    else{this.stop();}
    
  }

  revSort(arrStates) {
    
    if(this.state.id >= 1){
      const { arr: state, index: changing, highlight } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          index: changing,
          hlp: highlight,
          id: this.state.id - 1});}
    else{this.stop();}
    
  }

  insertionSort(arr) {
    var arrStates = [];
    for (var i = 1; i < arr.length; i++) {
      var index_insert = i;
      const temp0 = { arr: arr.slice(), index:[i,i,index_insert], highlight: 0};
      arrStates.push(temp0);
      for (var j = i - 1; j >= 0; j--) {
        const temp1 = { arr: arr.slice(), index:[i,j+1,index_insert], highlight: 1};
        arrStates.push(temp1);
        if(arr[j + 1] < arr[j]){
          const temp0 = { arr: arr.slice(), index:[i,j+1,index_insert], highlight: 2};
          arrStates.push(temp0);
          const tempVal = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempVal;
          index_insert = j;
          const temp2 = { arr: arr.slice(), index:[i,j,index_insert], highlight: 2};
          arrStates.push(temp2);
        }
        else{
          const temp3 = { arr: arr.slice(), index:[i,j,index_insert], highlight: 3};
          arrStates.push(temp3); 
          break;
        }
      } 
    }
    return arrStates;
 } 

  insertionSort00(arr) {
    var arrStates = [];
    var p = [];
    for(var i = 1; i < arr.length; i++){
      const temp0 = { arr: arr.slice(), index1: i, index2: -1, complete: p.slice(), highlight: 0};
      arrStates.push(temp0);
      var value = arr[i];
      for(var j = i - 1; j >= 0; j--){
        if(arr[j] < value){
          const temp0 = { arr: arr.slice(), index1: j, index2: j - 1, complete: p.slice(), highlight: 1};
          arrStates.push(temp0);
          arr[j + 1] = arr[j];
          const temp1 = { arr: arr.slice(), index1: j, index2: j - 1, complete: p.slice(), highlight: 1};
          arrStates.push(temp1);
        }else{
          
          arr[j] = value;
          const temp1 = { arr: arr.slice(), index1: j, index2: i, complete: p.slice(), highlight: 1};
          arrStates.push(temp1);
          break;
        }
      }
  }
  return arrStates;
 } 

  start() {
    var arr = [];
    for(var x = 0; x < this.state.n; x++){
      arr[x] = this.state.arr[x];
    }
    var arrStates = this.insertionSort(arr);
    var timeID = this.state.timeID;
    var sorting = this.state.sorting;
    if (timeID === 0 && (sorting === 0||sorting === 2)) {
      timeID = setInterval(
        () => this.sort(arrStates),
        this.state.interval
      );
      this.setState({
        timeID: timeID,
        sorting: 1
      });
    }

  }

  nextstep(){
    this.stop();
    this.sort(this.state.arrStates);
    this.setState({
      sorting: 2
    });
  }

  laststep(){
    this.stop();
    this.revSort(this.state.arrStates);
    this.setState({
      sorting: 2
    });
  }
  

  stop() {
    var timeID = this.state.timeID;
    var sorting = this.state.sorting;
    if (timeID !== 0 && sorting === 1) {
      clearInterval(timeID);
      this.setState({
        timeID: 0,
        sorting: 0,
        hlp: -1
      });
    }

  }
}

export default InsertApp;
