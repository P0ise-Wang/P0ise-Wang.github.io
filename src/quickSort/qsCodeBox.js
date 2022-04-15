import React, { Component } from 'react';
import '../aCss/app.css';

class QsCodeBox extends Component {

    CodeBox(highlight)
    {
        
    }

    render(){
        return (
            <div className="CodeBox2" id="scrollbar">
                    <code className="code">int Paritition(int A[], int start, int end)</code>
                    <code className="code">&#123;</code>
                    <code className="code">&nbsp;&nbsp;int pivot = A[end];</code>
                    <code className="code">&nbsp;&nbsp;int i = start - 1;</code>
                    <code className="code">&nbsp;&nbsp;for(j = start; j &gt; end; j++)&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;if(A[j] &gt;= pivot)&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = A[i];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A[i] = A[j];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A[j] = temp;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;int temp = A[i + 1];</code>
                    <code className="code">&nbsp;&nbsp;A[i + 1] = A[end];</code>
                    <code className="code">&nbsp;&nbsp;A[end] = A[i + 1];</code>
                    <code className="code">&nbsp;&nbsp;return i + 1;</code>
                    <code className="code">&#125;</code>
                    <code className="code">void QuickSort(int A[], int start, int end) //快排母函数</code>
                    <code className="code">&#123;</code>
                    <code className="code">&nbsp;&nbsp;if (start &gt; end) &#123;</code>
                    <code className="code">&nbsp;&nbsp;int pivot = Paritition(A, start, end);</code>
                    <code className="code">&nbsp;&nbsp;QuickSort(A, start, pivot - 1);</code>
                    <code className="code">&nbsp;&nbsp;QuickSort(A, pivot + 1, end);</code>
                    <code className="code">&nbsp;&nbsp;&#125;</code>
                    <code className="code">&#125;</code>    
            </div>
                
        );
    }
}

export default QsCodeBox;