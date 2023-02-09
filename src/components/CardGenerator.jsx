import React, { useState } from 'react';
import './Card.css'

function CardPreview({ styles }) {
  return (
    <div style={styles} className="card">
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some text inside the card</p>
      </div>
    </div>
  );
}

function CodePreview({ code }) {
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}

function HTMLPreview({ html }) {
  return (
    <pre>
      <code>{html}</code>
    </pre>
  );
}

function CardGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState('5px');
  const [boxShadow, setBoxShadow] = useState('5px 5px 10px #888888');
  const [width, setWidth] = useState('300px');
  const [height, setHeight] = useState('300px');
  const [color, setColor] = useState('#888888');
  const [padding, setPadding] = useState('20px');

  const styles = {
    backgroundColor,
    borderRadius,
    boxShadow,
    width,
    height,
    color,
    padding,
  };

  const code = `.card {
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  width: ${width};
  height: ${height};
  color: ${color};
  padding: ${padding};
}`;

const html = `<div class="card" style="background-color: ${backgroundColor}; border-radius: ${borderRadius}; box-shadow: ${boxShadow}; width: ${width}; height: ${height}; color: ${color}; padding: ${padding};">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some text inside the card</p>
  </div>
</div>`;

  return (
    <div className="container1">
      <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Card Generator</h2>
      <form>
        <div className="form-group">
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={e => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="borderRadius">Border Radius</label>
          <input
            type="text"
            id="borderRadius"
            value={borderRadius}
            onChange={e => setBorderRadius(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boxShadow">Box Shadow</label>
          <input
            type="text"
            id="boxShadow"
            value={boxShadow}
            onChange={e => setBoxShadow(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            value={width}
            onChange={e => setWidth(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="backgroundColor">Color</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="padding">Padding</label>
          <input
            type="text"
            id="padding"
            value={padding}
            onChange={e => setPadding(e.target.value)}
          />
        </div>
      </form>
      <CardPreview styles={styles} />
      <CodePreview code={code} />
      <CodePreview code={html} />
    </div>
  );
}

export default CardGenerator;