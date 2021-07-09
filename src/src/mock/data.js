import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kazuki Ota', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kazuki Ota',
  subtitle: 'I\'m a C# developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile6.jpg',
  paragraphOne: 'I\'m Kazuki Ota who is working at Microsoft Japan. And I love programming to use C#.',
  paragraphTwo: 'Writing tech articles are really interesting for me. My blogs are 2500+ tech articles. If you feel interesting, then please visit my blogs. The link is following section.',
  paragraphThree: 'I love gaming too. SmashBros and Monster Hunter are awesome games for me. I have played those games 2000+ hours. On SmashBros, I\'m using Link as main character.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zenn.jpg',
    title: 'Zenn',
    info: 'Here is my main blog for tech articles.',
    info2: '',
    url: 'https://zenn.dev/okazuki',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'qiita.jpg',
    title: 'Qiita',
    info: 'I also write tech articles on Qiita.',
    info2: 'I\'m top ranker of contributors for C#, XAML and Azure.',
    url: 'https://qiita.com/okazuki',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'Kazuki\'s blog at hatena',
    info: 'Here is 2000+ tech articles. Introduction of WPF 4.5 is top content on this blog.',
    info2: '',
    url: 'https://blog.okazuki.jp',
    repo: 'https://blog.okazuki.jp/entry/2014/12/27/200015', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ReactivePropet_511x511.png',
    title: 'ReactiveProperty',
    info: 'ReactiveProperty provides MVVM and asynchronous support features under Reactive Extensions. Target framework is .NET Standard 2.0. It is downloaded 753K+.',
    info2: 'I\'m one of main contributors for the product.',
    url: 'https://github.com/runceel/ReactiveProperty',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Livet.png',
    title: 'Livet',
    info: 'Livet is the infrastructore for MVVM pattern for WPF. It supports both of .NET Framework and .NET.',
    info2: 'I\'m a main contributor for the product. The document for Livet is available for Japanese only.',
    url: 'https://github.com/runceel/livet',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/okazuki',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/okazuki/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/runceel',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
