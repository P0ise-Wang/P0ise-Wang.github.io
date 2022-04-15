import React, { Component } from 'react';
import '../aCss/app.css';
import ItemList from './itemList';
import MsCodeBox from './msCodeBox'
import $ from "jquery/dist/jquery.min";
import CodeBox from './CodeBox';

class MergeApp extends Component {
  constructor(props) {
    super(props);
    var n = 16;
    var r = 50;
    var speed = 800;
    var arr = this.randomArr(n, r);
    var oArr = [];
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    var preCodeArr = ['merge(A,start,mid,end) //mid,end分别为两侧队伍尾部',
                      '\xa0\xa0AC = copy(A) //复制数组A至AC',
                      '\xa0\xa0i = start; //左侧队伍的头部指针,指向待比较元素',
                      '\xa0\xa0j = mid + 1; //右侧队伍的头部指针,指向待比较元素',
                      '\xa0\xa0k = start; //原数组指针,指向待填入的元素的位置',
                      '\xa0\xa0while(i <= mid and j <= end)',
                      '\xa0\xa0//当左侧队伍与右侧队伍均没有比较完成',
                      '\xa0\xa0\xa0\xa0if(AC[i] <= AC[j]): A[k++] = AC[i++];',
                      '\xa0\xa0\xa0\xa0else:A[k++] = AC[j++];',
                      '\xa0\xa0\xa0\xa0//取较小元素填入原数组并调整参数',
                      '\xa0\xa0while(i <= mid): A[k++] =AC[i++];',
                      '\xa0\xa0//当左侧没有比较完成，填入原数组并调整参数',
                      '\xa0\xa0while(j <= end): A[k++] =AC[j++];',
                      '\xa0\xa0//当右侧没有比较完成，填入原数组并调整参数',
                      'mergeSort(A,start,end)',
                      '\xa0\xa0if (start == end) return //只有一个数时直接返回',
                      '\xa0\xa0mid = (start+end)/2; //用mid划分两个区间',
                      '\xa0\xa0mergeSort(A, start, mid); //对前半段进行归并排序',
                      '\xa0\xa0mergeSort(A, mid+1, end); //对后半段进行归并排序',
                      '\xa0\xa0merge(A, start, mid, end); //归并两个已经排好的区间',
                      'end'];
    this.state = {
      arr: arr,
      arrC: [],
      n: n,
      r: r,
      timeID: 0,
      index: [],
      interval: speed,
      sorting: 0,
      resetArr: oArr,
      id: 0,
      initMeansRandom: 'none',
      initMeansInput: 'none',
      speeds:['慢速', '中速', '极速'],
      preCodeArr: preCodeArr,
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

  random(){
    this.stop();
    var arr = this.randomArr(this.state.n, this.state.r);
    var oArr = [];
    for (var i = 0; i < this.state.n; i++){
      oArr[i] = arr[i];
    }
    this.setState({
      arr: arr,
      arrC: [],
      n: this.state.n,
      timeID: 0,
      index: [],
      interval: this.state.interval,
      sorting: 0,
      resetArr: oArr,
      id: 0,
      hlp: -1
    });
  }

  init() {
    this.stop();
    var arr = [];
    for (var i=0; i<this.state.n; i++){
      arr[i] = this.state.resetArr[i];
    }
    this.setState({
      arr: arr,
      arrC: [],
      n: this.state.n,
      timeID: 0,
      index: [],
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
          <div className="Visualizer0">
            <div className={"tutorial"+this.state.sorting}>
              <code>i = {this.state.index[0]}, j = {this.state.index[1]}, AC[i] = {this.state.arr[this.state.index[0]]}, 
              AC[j] = {this.state.arr[this.state.index[1]]}, k = {this.state.index[2]}, A[k] = {this.state.arr[this.state.index[2]]}</code>
            </div>
            <div className="Visualizer1">
              {/* <div className="canvas"> */}
                <ItemList arr={this.state.arr} max={this.state.r} index={this.state.index} sorting={this.state.sorting} id={0}></ItemList>
              {/* </div> */}
              {/* <div className="canvas"> */}
                <ItemList arr={this.state.arrC} max={this.state.r} index={this.state.index} sorting={this.state.sorting} id={1}></ItemList>
              {/* </div>  */}
            </div>
            <div className="buttons">
              <form action="mergeApp.js">
                  排序：<button type="button" className="btn-light" onClick={() => this.start()}>归并排序</button><span >&nbsp;&nbsp;&nbsp;</span>
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
          <div className="CodeBox0">
                <div className="CodeTitle">伪代码：</div>
                <CodeBox preCodeArr={this.state.preCodeArr} hlp={this.state.hlp} sorting={this.state.sorting}></CodeBox>
                <div className="CodeTitle">代码：</div>
                <MsCodeBox></MsCodeBox>
          </div>
      </div>
      
    );
  }

  getUserInput(){
    this.stop();
    var a=$('input#inputArray').val().split(" ");
    var arr=[];
    for (var i=0; i < a.length; ++i){
      arr[i] = parseInt(a[i]);
    }
    var oArr = [];
    for (var j = 0; j<arr.length; j++){
      oArr[j] = arr[j];
    }
    this.setState({
      arr: arr,
      arrC: [],
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
    if (event.target.value === '慢速') this.speed(800);
    else if (event.target.value === '中速') this.speed(200);
    else if (event.target.value === '极速') this.speed(1);
  }

  count(n){
    this.stop();
    var arr = this.randomArr(n, this.state.r);
    var oArr = [];
    for (var i = 0; i < n; i++){
      oArr[i] = arr[i];
    }
    this.setState({
      arr: arr,
      arrC: [],
      n: n,
      timeID: 0,
      index: [],
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
      arr[x] = this.state.resetArr[x];
    }
    var arrStates = this.mergeSort(arr);
    if(this.state.id < arrStates.length){
      const { arr: state, index: changing, arrC: stateC, highlight } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          arrC: stateC,
          index: changing, 
          hlp: highlight,
          id: this.state.id + 1
      } );
    } 
    else{this.stop();}
    
  }

  revSort() {
    var arr = [];
    for(var x = 0; x < this.state.n; x++){
      arr[x] = this.state.resetArr[x];
    }
    var arrStates = this.mergeSort(arr);
    if(this.state.id >= 1){
      const { arr: state, index: changing, arrC: stateC, highlight } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          arrC: stateC,
          index: changing, 
          hlp: highlight,
          id: this.state.id - 1
      } );
    } 
    else{this.stop();}
  }

  mergeSort(arr) {
    var arrStates = [];
    this.mergeSortHelper(arr, 0, arr.length - 1, arrStates);
    const temp = { arr: this.state.resetArr.slice(), index: [], arrC: arr.slice()};
    arrStates.push( temp );
    return arrStates;
  }

  mergeSortHelper(arr, start, end, arrStates) {
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    this.mergeSortHelper(arr, start, mid, arrStates);
    this.mergeSortHelper(arr, mid + 1, end, arrStates);
    this.merge( arr, start, mid, end, arrStates );
  }

  merge(arr, start, mid, end, arrStates) {
  var k = start, i = start, j = mid + 1;
  var arrC = arr.slice();
  while ( i <= mid && j <= end )
  {
    const temp = { arr: arrC.slice(), index: [i, j, k, -1, 0, 0], arrC: arr.slice(0, k), highlight: 5};
    arrStates.push( temp );
    if ( arrC[i] <= arrC[j] )
    {
      arr[k] = arrC[i];
      const temp = { arr: arrC.slice(), index: [i, j, k, 0, 0, 1], arrC: arr.slice(0, k + 1), highlight: 7};
      arrStates.push( temp );
      k++;
      i++;
    }
    else
    {
      arr[k] = arrC[j];
      const temp = { arr: arrC.slice(), index: [i, j, k, 1, 1, 0], arrC: arr.slice(0, k + 1), highlight: 8};
      arrStates.push( temp );
      k++;
      j++;
    }
  }
  while ( i <= mid )
  {
    arr[k] = arrC[i];
    const temp = { arr: arrC.slice(), index: [i, j, k, 0, 0, 1], arrC: arr.slice(0, k + 1), highlight: 10};
    arrStates.push(temp);
    k++;
    i++;
  }
  while ( j <= end )
  {
    arr[k] = arrC[j];
    const temp = { arr: arrC.slice(), index: [i, j, k, 1, 1, 0], arrC: arr.slice(0, k + 1), highlight: 12};
    arrStates.push(temp);
    k++;
    j++;
  }
  }

  start() {
    this.stop();
    var timeID = this.state.timeID;
      var sorting = this.state.sorting;
    //   var arrStates = this.mergeSort(arr);
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

export default MergeApp;
