import React, { Component } from 'react';
import '../aCss/app.css';

class BsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox2" id="scrollbar">
                <code className="code">void bubbleSort(int a[], int n)&#123;</code>
                <code className="code">&nbsp;&nbsp;for (int i = 0; i&nbsp;&lt;=&nbsp;n - 1; i++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j&nbsp;&lt;=&nbsp;len - 1 - i; j++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a[j] &gt; a[j + 1])&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = a[j];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j] = a[j + 1];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j + 1] = temp;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
            </div>
        );
    }
}

export default BsCodeBox;