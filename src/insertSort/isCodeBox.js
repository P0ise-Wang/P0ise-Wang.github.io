import React, { Component } from 'react';
import '../aCss/app.css';

class IsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox2"  id="scrollbar">
                <code className="code">void insertionSort(int a[], int n)&#123;</code>
                <code className="code">&nbsp;&nbsp;int i, j;</code>
                <code className="code">&nbsp;&nbsp;for (i = 1; i &lt; n; i++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;int elem = a[i]; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (j = i - 1; j &gt;= 0; j--)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (elem &gt; a[j]) a[j + 1] = a[j]; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j] = elem;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
            </div>
        );
    }
}

export default IsCodeBox;