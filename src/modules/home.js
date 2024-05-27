export const Home = (function () {
  const content = document.createElement('div');
  content.id = 'Home';

  const header = document.createElement('header');
  header.id = 'header';
  header.textContent = 'Lorem Pastry';

  const h2 = document.createElement('h2');
  h2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';


  const paragraph = document.createElement('p');
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae vel, accusantium magni, magnam sapiente ducimus, porro fugit dolorum eveniet modi quam eaque aperiam maiores aliquam! Mollitia molestiae ex quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae vel, accusantium magni, magnam sapiente ducimus, porro fugit dolorum eveniet modi quam eaque aperiam maiores aliquam! Mollitia molestiae ex quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae vel, accusantium magni, magnam sapiente ducimus, porro fugit dolorum eveniet modi quam eaque aperiam maiores aliquam! Mollitia molestiae ex quo!';

  content.appendChild(header);
  content.appendChild(h2);
  content.appendChild(paragraph);

  return content;
})();
