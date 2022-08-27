import React from 'react';
import { useState } from 'react';
import './Main.scss'
import NavBar from '../components/Navbar/NavBar';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate'
import Speaker from '../components/Speakers/Speaker';
import Toolbari from '../components/Toolbari/Toolbari';



const Main = () =>{
    const [editor] = useState(() => withReact(createEditor()))

    const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{
            text: `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don't look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randowowhich don't look even slightly believable. If you are going to use a passage.`
          }],
        },
      ])
    
      return (
        <>
          <NavBar />
          <div className='main-content'>
            <h1>John Doe Interview</h1>
            <Toolbari />
            <br></br>
            <div className="main-paragraph">
                <Slate
                    editor={editor}
                    value={value}
                    onChange={newValue => setValue(newValue)}
                >
                    <Editable />
                    
                </Slate>
            </div>

            <Speaker />
        </div>
        </>
      )
}

export default Main