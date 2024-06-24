import { Home } from './modules/home.js';
import { Menu } from './modules/menu.js';
import { Contact } from './modules/contact.js';

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
    buttons[i].addEventListener('click', function () {
      switch (bttns_text[i]) {
        case 'Home':
          document.getElementById('content').remove();
          document.body.appendChild(SetContent(Home));
        break;
        case 'Menu':
          document.getElementById('content').remove();
          document.body.appendChild(SetContent(Menu));
        break;
        case 'Contact':
          document.getElementById('content').remove();
          document.body.appendChild(SetContent(Contact));
        break;

        default:
          break;
      }

      console.log(buttons[i].textContent);
    });
    nav.appendChild(button);
  } // end

  return header;
}

function SetContent(_content) {
  const content = document.createElement('div');
  content.id = 'content';
  content.appendChild(_content);

  return content;
}

document.body.appendChild(header());
document.body.appendChild(SetContent(Home));

console.log(Home);

