// Add your notes for Gramps here
const notes = [
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
  {
    title: 'This is Grace',
    body: 'Can I go home now?',
    from: 'Grace',
  },
];

const cards = document.querySelector('.gramps-cards');

for (const note of notes) {
  const card = document.createElement('div');
  card.classList.add('gramps-card');
  let content = '';
  if (note.title) {
    content += `<h2 class="gramps-card-title">${note.title}</h2>`;
  }
  content += `
		<p class="gramps-card-body">${note.body}</p>
		<br>
		<p class="gramps-card-from">-- ${note.from}</p>
	`;
  card.innerHTML = content;
  cards.appendChild(card);
}
