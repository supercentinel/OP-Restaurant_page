export const Menu = (function () {
  const content = document.createElement('div');
  content.id = 'Home';

  const header = document.createElement('header');
  header.id = 'header';
  header.textContent = 'Lorem Pastry';

  const h2 = document.createElement('h2');
  h2.textContent = 'Menu';


  const pastriesHeader = document.createElement('h3');
  pastriesHeader.textContent = 'Pastries';
  const pastries = document.createElement('ul');
  const pastriesList = ['Croissant', 'Danish', 'Cinnamon Roll', 'Palmier', 'Pain au Chocolat', 'Brioche'];

  pastriesList.forEach(pastry => {
    const li = document.createElement('li');
    li.textContent = pastry;
    pastries.appendChild(li);
  });

  const BevaragesHeader = document.createElement('h3');
  BevaragesHeader.textContent = 'Bevarages';
  const Bevarages = document.createElement('ul');
  const BevaragesList = ['Coffee', 'Tea', 'Hot Chocolate', 'Cold brew', 'Mocha', 'Juice', 'Soda', 'Water'];

  BevaragesList.forEach(bevarage => {
    const li = document.createElement('li');
    li.textContent = bevarage;
    Bevarages.appendChild(li);
  });


  const MacaronsHeader = document.createElement('h3');
  MacaronsHeader.textContent = 'Macarons';
  const Macarons = document.createElement('ul');
  const MacaronsList = ['Vanilla', 'Chocolate', 'Strawberry', 'Pistachio', 'Lemon', 'Raspberry', 'Blueberry', 'Mint'];

  MacaronsList.forEach(bevarage => {
    const li = document.createElement('li');
    li.textContent = bevarage;
    Macarons.appendChild(li);
  });

  content.appendChild(header);
  content.appendChild(h2);
  content.appendChild(pastriesHeader);
  content.appendChild(pastries);
  content.appendChild(BevaragesHeader);
  content.appendChild(Bevarages);
  content.appendChild(MacaronsHeader);
  content.appendChild(Macarons);

  return content;
})();
