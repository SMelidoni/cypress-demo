import '../playground/playground.styles.scss';

import React, { useState } from 'react';

const Playground: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <div className='playground-container' data-cy='playground-container'>
      <h1>Cypress Playground</h1>
      {/* Text Input Field */}
      <div className='section'>
        <div className='title'>Text Input</div>
        <p>
          Once value is added, it will appear in the 'List of Items' section
          below:
        </p>
        <input
          className='input-field'
          data-cy='text-input'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter Text Here'
        />
        <button
          className='submit-button'
          data-cy='submit-button'
          onClick={() => {
            setItems((prev) => [...prev, inputValue]);
            setInputValue('');
          }}
        >
          Add
        </button>
      </div>

      {/* List */}
      <div className='section'>
        <div className='title'>List of Items</div>
        <ul className='items-list' data-cy='items-list'>
          {items.map((item, idx) => (
            <li key={idx} data-cy={`item-${idx}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Content */}
      <div className='section'>
        <div className='title'>Toggle Content</div>
        <div data-cy='toggle-container'>
          <button
            className='toggle-button'
            data-cy='toggle-button'
            onClick={() => setContentVisible(!contentVisible)}
          >
            Toggle
          </button>
          {contentVisible && (
            <div data-cy='toggle-content' className='toggle-content'>
              <p>This is hidden content.</p>
            </div>
          )}
        </div>
      </div>

      {/* Link */}
      <div className='section'>
        <div className='title'>External Link</div>
        <a
          className='external-link'
          href='https://example.com'
          data-cy='external-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          Click for example.com
        </a>
      </div>

      {/* Checkbox */}
      <div className='section'>
        <div className='title'>Checkbox</div>
        <input
          type='checkbox'
          className='checkbox-input'
          data-cy='checkbox-input'
        />
      </div>

      {/* Radio Buttons */}
      <div className='section'>
        <div className='title'>Radio Choices</div>
        <div className='radio-buttons'>
          <input type='radio' name='choice' value='A' data-cy='radio-A' />{' '}
          Choice A
          <input type='radio' name='choice' value='B' data-cy='radio-B' />{' '}
          Choice B
        </div>
      </div>
    </div>
  );
};

export default Playground;
