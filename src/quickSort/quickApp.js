import React, { Component } from 'react';
import '../aCss/app.css';
import ItemList from './itemList';
import QsCodeBox from './qsCodeBox'
import $ from "jquery/dist/jquery.min";
import CodeBox from './CodeBox';


class QuickApp extends Component {
  constructor(props) {
    super(props);
    var n = 15;
    var r = 50;
    var speed = 800;
    var arr = this.randomArr(n, r);
    var oArr = arr;
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    var preCodeArr = ['Partition(A, start, end) //start、end为数组下标',
                      '\xa0\xa0pivot = A[end]   //将最后一个元素作为主元素',
                      '\xa0\xa0i = start - 1 // i指向的是比主元素小的位置',
                      '\xa0\xa0for  j = start  to  end-1',
                      '\xa0\xa0//从第一个元素开始到倒数第二个元素结束,比较确定主元素的位置',
                      '\xa0\xa0\xa0\xa0if  A[j] < pivot',
                      '\xa0\xa0\xa0\xa0\xa0\xa0i = i + 1',
                      '\xa0\xa0\xa0\xa0\xa0\xa0swap:交换A[i]与A[j]',
                      '\xa0\xa0\xa0\xa0//如果比主元素小,则把j位置上的元素提到主元素之前',
                      '\xa0\xa0\xa0\xa0else continue',
                      '\xa0\xa0swap:交换A[i + 1]与A[end]//最终确定主元的位置',
                      '\xa0\xa0return i + 1//返回主元的位置',
                      'end',
                      'QuickSort(A,start,end)',
                      '\xa0\xa0if start < end',
                      '\xa0\xa0\xa0\xa0pivot = Partition(A, start, end)//确定划分位置',
                      '\xa0\xa0\xa0\xa0QuickSort(A, start, q - 1)//排序子数组A[start...q-1]',
                      '\xa0\xa0\xa0\xa0QuickSort(A, q + 1, end)//排序子数组A[q+1...end]',
                      'end'];
    this.state = {
      arr: arr,
      n: n,
      r: r,
      timeID: 0,
      i: 0,
      j: 0,
      p: arr.length - 1,
      interval: speed,
      sorting: 0,
      resetArr: oArr,
      id: 0,
      initMeansRandom: 'none',
      initMeansInput: 'none',
      speeds:['慢速', '中速', '极速'],
      preCodeArr:preCodeArr,
      hlp: -1
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
      i: 0,
      j: 0,
      p: arr.length - 1,
      interval: this.state.interval,
      resetArr: this.state.resetArr,
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
      <div className = "app">
          <div className="Visualizer">
            <div className={"tutorial"+this.state.sorting}><code>i = {this.state.i}, j = {this.state.j}, a[i] = {this.state.arr[this.state.i]}, a[j] = {this.state.arr[this.state.j]}, 基准值为a[{this.state.p}] = {this.state.arr[this.state.p]}</code></div>
            <div className="canvas">
              <ItemList arr={this.state.arr} max={this.state.r} i={this.state.i} j={this.state.j} p={this.state.p} sorting={this.state.sorting}></ItemList>
            </div>
            <div className="buttons">
              <form action="quickApp.js">
                  排序：<button type="button" className="btn-light" onClick={() => this.start()}>快速排序</button><span >&nbsp;&nbsp;&nbsp;</span>
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
                <QsCodeBox></QsCodeBox>
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
      i: 0,
      j: 0,
      p: arr.length - 1,
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      resetArr: oArr,
      hlp: -1
    })
  }

  getValue=(event)=>{
    console.log(event.target.value);
    if (event.target.value === '慢速') this.speed(800);
    else if (event.target.value === '中速') this.speed(200);
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
      i: 0,
      j: 0,
      p: this.state.arr.length - 1,
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      resetArr: oArr,
      hlp: -1
    });
  }

  speed(speed) {
    if (this.state.sorting === 1) {
      this.stop();
      var timeID = setInterval(
        () => this.sort(),
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

  sort() {
    var arr = [];
    for(var x = 0; x < this.state.n; x++){
      arr[x] = this.state.arr[x];
    }
    var arrStates = this.quickSortStates(arr);
    if(this.state.id < arrStates.length){
      const { arr: state, index1, index2, pivot, highlight } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          i: index1,
          j: index2,
          p: pivot, 
          hlp: highlight,
          id: this.state.id + 1});}
    else{this.stop();}
    
  }

  revSort() {
    var arr = [];
    for(var x = 0; x < this.state.n; x++){
      arr[x] = this.state.arr[x];
    }
    var arrStates = this.quickSortStates(arr);
    if(this.state.id >= 1){
      const { arr: state, index1, index2, pivot, highlight } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          i: index1,
          j: index2,
          p: pivot, 
          hlp: highlight,
          id: this.state.id - 1});}
    else{this.stop();}
  }
  
  quickSortStates(arr) {
    var arrStates = [];
    this.qsHelper(arr, 0, arr.length - 1, arrStates);
    return arrStates;
  }
  
  qsHelper(arr, start, end, arrStates){
    if (start < end) {
      var pivot = this.partition(arr, start, end, arrStates);
      this.qsHelper(arr, start, pivot - 1, arrStates);
      this.qsHelper(arr, pivot + 1, end, arrStates);
  }
  }

  partition(arr, start, end, arrStates) {
    var pivot = arr[end];
    const temp0 = { arr: arr.slice(), index1: -1, index2: -1, pivot: end, highlight: 0};
    arrStates.push(temp0);

    var i = start - 1;
    
    for (let j = start; j < end; j++) {
        const temp3 = { arr: arr.slice(), index1: i, index2: j, pivot: end, highlight: 3};
        arrStates.push(temp3);
        if (arr[j] < pivot) {
           const temp5 = { arr: arr.slice(), index1: i, index2: j, pivot: end, highlight: 5};
           arrStates.push(temp5);

            i++;
            const temp6 = { arr: arr.slice(), index1: i, index2: j, pivot: end, highlight: 6};
            arrStates.push(temp6);

            const temp1 = { arr: arr.slice(), index1: i, index2: j, pivot: end, highlight: 7};
            arrStates.push(temp1);
            const tempVal = arr[i];
            arr[i] = arr[j];
            arr[j] = tempVal;
            const temp2 = { arr: arr.slice(), index1: i, index2: j, pivot: end, highlight: 7};
            arrStates.push(temp2);
        }
        else{
          const temp = { arr: arr.slice(), index1: i, index2: j, pivot: end, highlight: 9};
          arrStates.push(temp);
        }
    }
    const temp4 = { arr: arr.slice(), index1: i+1, index2: end, pivot: end, highlight: 10};
    arrStates.push(temp4);
    const tempVal = arr[i+1];
    arr[i+1] = arr[end];
    arr[end] = tempVal;
    const temp2 = { arr: arr.slice(), index1: i+1, index2: end, pivot: end, highlight: 10};
    arrStates.push(temp2);
    return i + 1;
 }

  start() {
    var timeID = this.state.timeID;
    var sorting = this.state.sorting;
    if (timeID === 0 && (sorting === 0||sorting === 2)) {
      timeID = setInterval(
        () => this.sort(),
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
    this.sort();
    this.setState({
      sorting: 2
    });
  }

  laststep(){
    this.stop();
    this.revSort();
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

export default QuickApp;
