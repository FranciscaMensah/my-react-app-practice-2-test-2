import React from 'react';
import Split from 'react-split';
// import Markdown from 'markdown-to-jsx';
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import Editor from '../editor/Editor';

export default function App(){
    return (
        <div className='app'>
            <Split
                sizes={[25, 75]}
                gutterSize={8}
                minSize={300}
                className='flex'>
                <Sidebar/>
                <Editor/>
                {/* <Markdown>
                        #Hello
                        `this is a markdown`
                        _hello_
                </Markdown> */}
            </Split>

        </div>
    )
}