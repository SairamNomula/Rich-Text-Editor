import React from 'react';
import './Editor.scss';
import { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const Editor = ({ value }) => {
  const [editor] = useState(() => withReact(createEditor()))


  const [paragraph, setParagraph] = useState([
    {
      type: 'paragraph',
      children: [{
        text: value
      }],
    },
  ])


  return (
    <div className='editor'>
      <Slate
        editor={editor}
        value={paragraph}
        onChange={newValue => setParagraph(newValue)} 
      >
        <Editable />
      </Slate>
    </div>
  )
}

export default Editor