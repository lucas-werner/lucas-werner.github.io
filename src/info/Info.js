import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
//import mock4 from '../img/mock4.png';
//import mock5 from '../img/mock5.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(19, 195, 196)', 'rgb(94, 169, 113)'];
/*
    HEX: #13C3C4, #5EA971

I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Lucas',
  lastName: 'Werner',
  initials: 'LW', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🚀',
      text: 'Cadet @42Porto',
    },
    {
      emoji: '🌎',
      text: 'Based in Porto, Portugal',
    },
    {
      emoji: '👓',
      text: 'Looking for oportunities as a Full Stack Web Developer',
    },
    {
      emoji: '📚',
      text: "Author of 'Synthesis of Incompleteness'",
    },
    {
      emoji: '📧',
      text: 'lucaswvnoronha@gmail.com',
    },
  ],
  socials: [
    //{
    //    link: "https://facebook.com",
    //    icon: 'fa fa-facebook',
    //    label: 'facebook'
    //},
    //{
    //    link: "https://instagram.com",
    //    icon: 'fa fa-instagram',
    //    label: 'instagram'
    //},
    {
      link: 'https://github.com/lucas-werner',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/lucaswvn/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    //{
    //    link: "https://twitter.com/igrNasc",
    //    icon: "fa fa-twitter",
    //    label: 'twitter'
    //}
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Lucas. I'm a Software Engineering student at 42 Porto. I enjoy writing and playing the guitar.",
  skills: {
    proficientWith: ['javascript', 'nodejs', 'react', 'redux', 'express'],
    exposedTo: ['mongodb', 'docker'],
  },
  hobbies: [
    {
      label: 'games',
      emoji: '🎮',
    },
    {
      label: 'playing guitar',
      emoji: '🎸 ',
    },
    {
      label: 'writing',
      emoji: '✏ ',
    },
    {
      label: 'reading',
      emoji: '📖',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    {
      title: 'Starwars Datatable - Context API + Hooks',
      live: 'https://lucas-werner.github.io/starwars/',
      source: 'https://github.com/lucas-werner/starwars',
      image: mock1,
    },
    {
      title: 'Trivia Game - Redux',
      live: 'https://lucas-werner.github.io/trivia-game/',
      source: 'https://github.com/lucas-werner/trivia-game',
      image: mock2,
    },
    {
      title: 'Jennie and The Jets - Spotify API',
      live: 'https://lucas-werner.github.io/jennie-and-the-jets/',
      source: 'https://github.com/lucas-werner/jennie-and-the-jets',
      image: mock3,
    },
    //{
    //    title: "Digital Talents Localiza - React CRUD + Router",
    //    live: "https://lucas-werner.github.io/talentos-digitais-localiza/",
    //    source: "https://github.com/lucas-werner/talentos-digitais-localiza",
    //    image: mock4
    //},
    //{
    //    title: "Project 5",
    //    live: "https://paytonpierce.dev",
    //    source: "https://github.com/paytonjewell",
    //    image: mock5
    //}
  ],
};
