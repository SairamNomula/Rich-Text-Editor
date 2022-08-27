import React from 'react';
import Editor from '../Editor/Editor';
import './Speaker.scss'



const Speaker = () => {
  const speaker1Paragraph = `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage.`;

  const speaker2Paragraph = `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage.`;

  const speaker3Paragraph = `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa believable. If you are going to don’t look even slightly believable. If you are going to use a passage.`;

  return (
    <div className='Speaker-container'>

        {/* Speaker1 */}
      <section className="Speaker">
        <h3>Speaker 1</h3>

        <div className='speaker'>
          <div className="speaker-info">
            <img src={'../../images/speaker1.jfif'} alt="Speaker 1" />

            <h4>Speaker 1</h4>

            <p>09:45</p>
          </div>

          <div className="editable">
            <Editor value={speaker1Paragraph} />

            <button className='btn-1'>Lot of Calls in the beg...</button>

          </div>
        </div>

        {/* Speaker2 */}
        <div className='speaker'>
          <div className="speaker-info">
            <img src={'../../images/speaker2.jfif'} alt="Speaker 2" />

            <h4>Speaker 1</h4>

            <p>09:45</p>
          </div>

          <div className="editable">
            <Editor value={speaker2Paragraph} />

            <button className='btn-2'>Frequency of use ins...</button>
          </div>
        </div>

        {/* Speaker3 */}
        <div className='speaker'>
          <div className="speaker-info">
            <img src={'../../images/speaker3.png'} alt="Speaker 3" />

            <h4>Speaker 1</h4>

            <p>09:45</p>
          </div>

          <div className="editable">
            <Editor value={speaker3Paragraph} />

            <button className='btn-3'>Lot of Calls in the beg...</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Speaker