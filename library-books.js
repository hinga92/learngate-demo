/* DEMO home library: public-domain stories only (the real app uses the family's own shelves). */
'use strict';
const HOME_LIBRARY = [
  {series: 'Classic tales (sample shelf)', author: 'Traditional', mode: 'alone', icon: '📗', note: 'Any paper book you own can be added in Grown-ups',
    books: [
      {id: 'demo-hen', title: 'The Little Red Hen', num: 1, sound: 'short e', qs: ['Who helped the Little Red Hen?', 'Why did the hen eat the bread by herself?']},
      {id: 'demo-pigs', title: 'The Three Little Pigs', num: 2, sound: 'short i', qs: ['Which house was the strongest? Why?', 'What would you build your house with?']},
      {id: 'demo-goats', title: 'The Three Billy Goats Gruff', num: 3, sound: 'short o', qs: ['Who lived under the bridge?', 'How did the biggest goat solve the problem?']}]},
  {series: 'Beatrix Potter', author: 'Beatrix Potter', mode: 'together', icon: '📙', note: 'Read together and talk about it',
    books: [
      {id: 'demo-peter', title: 'The Tale of Peter Rabbit', qs: ['Why did Peter go into the garden?', 'How did Peter feel when he got home?', 'What would you have done?']},
      {id: 'demo-benjamin', title: 'The Tale of Benjamin Bunny', qs: ['What were Peter and Benjamin looking for?', 'Who came to find them?']}]}
];
const LIB_ALREADY_READ = ['demo-hen'];
