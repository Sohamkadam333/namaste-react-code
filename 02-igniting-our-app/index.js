import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const heading1 = React.createElement('h1', { key: '1' }, 'Heading 1');
const heading2 = React.createElement('h2', { key: 2 }, 'Heading 2');

const container = React.createElement('div', {}, [heading1, heading2]);

root.render(container);
