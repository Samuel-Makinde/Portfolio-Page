import Apartment from './images/real-estate-3297625_640.jpg'
import CardImage from './images/new-card.png'
import MenStore from './images/shopping.jpg'
import Portfolio from './images/portfolio.png'

const projects = [
    {
        id: 1,
    title: 'SACCOM',
    category: 'React.js Project',
    link: 'https://github.com/Samuel-Makinde/SACCOM-FRONTEND-PROJECT',
    img: Apartment,
    desc: `This is an ongoing project that aims to solve the apartment search problem for students and visitors within the school facility. `,
    },
    {
    id: 2,
    title: 'Atm Card',
    category: 'Javascript Project',
    link: 'https://github.com/Samuel-Makinde/interactive-card-details-form',
    Demo: 'https://serene-pika-c7c5b1.netlify.app/',
    img: CardImage,
    desc: `This creates a page to fill in card details which show on the card at the same time and also show a thank you page after completion. `,
  },
  {
    id: 3,
    title: 'Men store',
    category: 'React.js Project',
    link: 'https://github.com/Samuel-Makinde/e-commerce-site',
    Demo: 'https://6476f6bcd18d7b720bc75c5f--genuine-churros-ac9b34.netlify.app/',
    img: MenStore,
    desc: `Men's Product page that includes a cart page to increase or remove a product.`,
  },
  {
    id: 4,
    title: 'Portfolio',
    category: 'React.js Project',
    link: 'https://github.com/Samuel-Makinde/SACCOM-FRONTEND-REACT',
    img: Portfolio,
    desc: `Same as the current site.`,
  },
];

export default projects
