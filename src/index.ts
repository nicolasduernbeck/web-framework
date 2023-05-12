import { User } from './models/User';

const user = new User({ name: 'Lisa', age: 16 });
user.set({ name: 'Lol' });
console.log(user.get('name'));

user.on('move', () => {
  console.log('Triggered cb 1!');
});

user.on('move', () => {
  console.log('Triggered cb 2!');
});

user.trigger('move');
