import React, { Component } from 'react';
import '../aCss/app.css';

class MsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox2" id="scrollbar">
                <code className="code">void merge(int a[], int left, int mid, int right)</code>
                <code className="code">&#123;</code>
                <code className="code">&nbsp;&nbsp;int i = left;</code>
                <code className="code">&nbsp;&nbsp;int k = left;</code>
                <code className="code">&nbsp;&nbsp;int j = mid + 1;</code>
                <code className="code">&nbsp;&nbsp;int aC[100];</code>
                <code className="code">&nbsp;&nbsp;for(int i = 0; i &lt;= right; ++i)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;aC[i] = a[i];</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;while(i &lt;= mid && j &lt;= right)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(aC[i] &lt;= aC[j])</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[i++];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[j++];</code>
                <code className="code">&nbsp;&nbsp;while(i &lt;= mid)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[i++];</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;while(j&lt;=right)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[j++];</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
                <code className="code">void mergeSort(int a[], int left, int right)&#123;</code>
                <code className="code">&nbsp;&nbsp;if (right &lt;= left) return; </code>
                <code className="code">&nbsp;&nbsp;int mid = (left + right)/2;</code>
                <code className="code">&nbsp;&nbsp;mergeSort(a, left, mid); </code>
                <code className="code">&nbsp;&nbsp;mergeSort(a, mid+1, right); </code>
                <code className="code">&nbsp;&nbsp;merge(a, left, mid, right); </code>
                <code className="code">&#125;</code>
            </div>
        );
    }
}

export default MsCodeBox;