import { Home } from './modules/home.js';

import './styles.css';


function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  header.appendChild(nav);

  const buttons = [];
  const bttns_text = ['Home', 'Menu', 'Contact'];

  for (let i = 0; i < bttns_text.length; i++) {
    const button = document.createElement('button');
    button.textContent = bttns_text[i];
    buttons[i] = button;
    nav.appendChild(button);
  } // end

  return header;
}

function content() {
  const content = document.createElement('div');
  content.id = 'content';
  content.appendChild(Home);

  return content;
}

document.body.appendChild(header());
document.body.appendChild(content());

console.log(Home);

