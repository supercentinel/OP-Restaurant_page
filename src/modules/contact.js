import linkedinIcon from '/src/img/linkedin.svg';
import instagramIcon from '/src/img/instagram.svg';
import twitterIcon from '/src/img/twitter.svg';
import facebookIcon from '/src/img/facebook.svg';

export const Contact = (function () {
  const content = document.createElement('div');
  content.id = 'Home';

  const header = document.createElement('header');
  header.id = 'header';
  header.textContent = 'Lorem Pastry';

  const h2 = document.createElement('h2');
  h2.textContent = 'Contact Us';

  const mail = document.createElement('a');
  mail.href = 'mailto:lorempastry@gmail.com';
  mail.textContent = 'lorempastry@gmail.com';

  const instagram = document.createElement('a');
  instagram.href = 'https://www.instagram.com/lorempastry/';
  instagram.id = 'instagram';
  const instagramimg = document.createElement('img');
  instagramimg.src = instagramIcon;
  console.log(instagramIcon);
  instagram.appendChild(instagramimg);

  const twitter = document.createElement('a');
  twitter.href = 'https://www.twitter.com/lorempastry/';
  const twitterimg = document.createElement('img');
  twitterimg.src = twitterIcon;
  twitter.appendChild(twitterimg);

  const facebook = document.createElement('a');
  facebook.href = 'https://www.facebook.com/lorempastry/';
  const facebookimg = document.createElement('img');
  facebookimg.src = facebookIcon;
  facebook.appendChild(facebookimg);

  const linkedin = document.createElement('a');
  linkedin.href = 'https://www.linkedin.com/lorempastry/';
  const linkedinimg = document.createElement('img');
  linkedinimg.src = linkedinIcon;
  linkedin.appendChild(linkedinimg);

  content.appendChild(header);
  content.appendChild(h2);
  content.appendChild(mail);
  content.appendChild(instagram);
  content.appendChild(twitter);
  content.appendChild(facebook);
  content.appendChild(linkedin);

  return content;
})();
