// import React from 'react';
// import logo from './logo.svg';

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Bulma</h1>

        <p className="subtitle">
          Modern CSS framework based on{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
          </a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
        </div>
      </div>
    </section>
  );
}

export default App;
