const mockData = [
  { userName: 'John Doe' },
  { userName: 'Tom Soyer' },
  { userName: 'Soul Luke' },
  { userName: 'Walker John' },
]

const addIDs = users => users.map((user, idx) => ({ userName: user.userName, id: Math.random() * (1 + idx) }))

const fetchUserData = () => new Promise(resolve => setTimeout(() => resolve(addIDs(mockData)), 1000));

export function getUserData(callbacks) {
  callbacks.setDisplayUsers(false);
  fetchUserData()
    .then(callbacks.mountFetchedUsers)
    .finally(() => callbacks.setDisplayUsers(true));
}