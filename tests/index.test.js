import process from 'child_process'

test('Code should be 0', () => {
  const response = process.execSync('npm start seed --silent').toString().trim()
  expect(response).toMatch('hello world');
})