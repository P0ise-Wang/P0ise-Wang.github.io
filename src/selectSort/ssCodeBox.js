import React, { Component } from 'react';
import '../aCss/app.css';

class SsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox2"  id="scrollbar">
                <code className="code">void selectionSort(int a[], int n)&#123;</code>
                <code className="code">&nbsp;&nbsp;for (int i = 0; i &lt; n; i++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;int loc = i; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (int j = i + 1; j &lt; n; j++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a[j] &lt; a[loc]) loc = j; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;int temp = a[i];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;a[i] = a[loc];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;a[loc] = temp;</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
            </div>
       );
    }
}

export default SsCodeBox;