// Add your notes for Adrien here
const notes = [
  {
    body: 'Hey Gramps, Age is just a number. Stay young, healthy and happy. See you around!',
    from: 'Grace'
  },
  {
    body: 'Hi Adrien, it was nice having you, wish you all the best!',
    from: 'Liu'
  },
  {
    body: 'Good Luck and best wishes for your future ventures.',
    from: 'Sulthan'
  },
  {
    body: 'Hi Adrien, It was a pleasure working with you. Thanks for all the knowledge that you share. All the best!',
    from: 'Symon'
  },
  {
    body: 'Hi Adrien, all the best for your future. It was nice working with you for the short time i had here.',
    from: 'Vijay'
  },
  {
    body: 'Hi Adrien, all the best for your future.',
    from: 'Ganesh'
  },
  {
    body: 'Hey Adrien, shame we didn\'t have the chance to work together directly but I reckon it would have been fun! I enjoyed our occasional chit-chats! All the best, stay cool and keep in touch!',
    from: 'Alex M.'
  },
  {
    body: 'Hi Adrien, good luck and all the best for your future endeavours!',
    from: 'Susan'
  },
  {
    body: 'Hi Adrien, it\'s been a pleasure to work with you during the last few months. All the best and we\'ll keep in touch.',
    from: 'Yang'
  },
  {
    body: 'It was a pleasure chatting with you though our time was short. Thank you & wishing the ever best in your next endeavours Adrien~',
    from: 'Vimal'
  },
  {
    body: 'Hi Adrien, wish you good luck and all the best for your future endeavors.',
    from: 'Bhakti'
  },
  {
    body: 'Hi Adrien & Anthony Wishing you guys all the best and keep in touch.',
    from: 'Kah Choon'
  },
  {
    body: 'Hi Adrien, It\'s been a pleasure to work with you. Learn architectural and solutioning concepts. All the Best for the future endeavors and we\'ll keep in touch.',
    from: 'Sam'
  },
  {
    body: 'Adrien, Indeed a great pleasure working with you. Wish you all the very best for your future endeavors !!',
    from: 'Badri'
  },
  {
    body: 'Salut Adrien, j\'aurais aimé travailler d\'avantage avec toi, mais je suppose que ce sera pour une prochaine fois. Que ta prochaine mission soit intéressante et satisfaisante.',
    from: 'Thibaud'
  },
  {
    body: 'Wish you all the very best Adrien! I can identify with the passion you breathe - you walk the talk for sure, and I am sure you will thrive and do well wherever you are - Je te souhaite all the best et surtout garde en contacte et jespere que tu auras une meilleure experience ou que tu sois. Bonne chance et a bientot! En passant seras-tu de retour bientot pour le project fisp? javais compris que tu seras engager pour ca...',
    from: 'Jesse'
  },
  {
    body: 'Adrien, Always learning something new from you, it\'s been an awesome journey and it wouldn\'t have been the same without you. Miss chatting about games and anime with ya, hopefully, we\'ll get a chance to meet up soon! All the best on your next endeavors~',
    from: 'Alex Yam'
  },
  {
    body: 'Adrien, It was nice working with you, wish you all the best for your future endeavors !!',
    from: 'Danuka'
  },
  {
    body: 'Hey Adrien, I enjoy the insights you provided. Different perspective, but definitely valuable. All the best. I hope this is just a short farewell, and we can work together again very soon!',
    from: 'Kian'
  },
  {
    body: 'Adrien, Wishing you good luck for your future endeavors',
    from: 'Yuvaraj'
  },
  {
    body: 'Hey Adrien, This is not a good bye for you :-) But I am going to miss seeing you around everyday and working with you closely. Thank you very much for the inspiration and motivation you provided. Keep up with your good work!',
    from: 'Isuru'
  },
  {
    body: 'Adrien, It was really a great experience working with you. Learned a lot from you. Will definitely miss you here. No goodbyes yet for us but see you at Zenika . Keep rocking!',
    from: 'Martin'
  },
  {
    body: 'Hey Adrien, Thanks for all your efforts. All the best for your next endeavour !!!!',
    from: 'Amber'
  },
  {
    body: 'Adrien, It was a pleasure having the opportunity to work with you on investors for a while. I\'m gonna miss your snarky remarks and subpar jokes hahaha all the best for everything! Keep in touch ',
    from: 'Yao'
  },
  {
    body: 'Hey Adrien! Definitely not a good bye for you  Digital will miss you a lot ! I wish you all the best for the next project See you at Zenika',
    from: 'Hafid'
  },
  {
    body: 'Adrien, thanks for the excellent work! It\'s a pleasure working with you, all the best and keep in touch man!',
    from: 'Yijie'
  },
  {
    body: 'Good Luck and best wishes for your future ventures. All the best in your future endeavours!',
    from: 'Swapnil'
  },
  {
    body: 'Hey Adrien, It has really been a great learning experience to work with you. The best part I learned from you is not to restrict oneself and continuously push one\'s own boundaries.',
    from: 'Rahul'
  },
  {
    body: 'Good luck and all the best for your future endeavours.',
    from: 'Khushbu'
  },
  {
    body: 'Adrien, I learned a ton from you. You\'re a fantastic lead and a great architect, and I deeply appreciate that you gave me challenging programming assignments that helped me continuously improve. I\'ll be stealing the lion\'s share of the things I learned from you and employing them myself in a leadership position someday. Thank you for your guidance. This isn\'t goodbye, but farewell - for now.',
    from: 'Ty'
  }
];

const cards = document.querySelector('.adrien-cards');
const sortedNotes = notes.sort((a, b) => {
  if (a.from < b.from) {
    return -1;
  }
  if (a.from > b.from) {
    return 1;
  }
  return 0;
});

for (const note of sortedNotes) {
  const card = document.createElement('div');
  card.classList.add('adrien-card');
  let content = '';
  if (note.title) {
    content += `<h2 class="adrien-card-title">${note.title}</h2>`;
  }
  content += `
		<p class="adrien-card-body">${note.body}</p>
		<p class="adrien-card-from">-- ${note.from}</p>
	`;
  card.innerHTML = content;
  cards.appendChild(card);
}
