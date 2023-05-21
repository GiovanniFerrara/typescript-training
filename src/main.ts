interface User {
  id: string;
  name: string;
}

const users: User[] = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
];


interface UserMap {
  [id: string]: User;
}



const userMap: UserMap = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {} as UserMap);

userMap['1']; // { id: '1', name: 'User 1' }
userMap['2']; // { id: '2', name: 'User 2' }

// refacciamolo usando Map
const userMap2 = new Map<string, User>();

users.forEach(user => {
  userMap2.set(user.id, user);
});

userMap2.get('1'); // { id: '1', name: 'User 1' }
userMap2.get('2'); // { id: '2', name: 'User 2' }


// Map spiegazione
const map = new Map<'cat'| 'dog', number>();

map.set('cat', 2);
map.set('dog', 3);

map.entries(); // [ ['cat', 2], ['dog', 3] ]
map.keys(); // ['cat', 'dog']
map.values(); // [2, 3]
map.get('cat'); // 2
map.get('dog'); // 3
map.has('cat'); // true
