test('user is valid', () => {
  const user = new User('test@test', 'test', 'test', '2010-01-01');
  expect(user.isValid()).toBe(true);
});

test('user is invalid without email', () => {
  const user = new User(null, 'test', 'test', '2002-01-01');
  expect(user.isValid()).toBe(true);
});