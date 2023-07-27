// using vanilla javascript
/*
const root = document.getElementById('root');

const heading1 = document.createElement('h1');
heading1.innerHTML = 'Heading 1';

root.append(heading1);
*/

//************  Using React CDN
/**
 * 
const root = ReactDOM.createRoot(document.getElementById('root'));

const heading1 = React.createElement('h1', {}, 'Heading 1');
const heading2 = React.createElement('h2', {}, 'Heading 2');
const container = React.createElement('div', { style: { backgroundColor: 'pink' } }, [heading1, heading2]);

root.render(container);
*/
