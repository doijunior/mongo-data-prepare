import process from 'child_process'

test('It calls generate command of seed file', () => {
  const response = process.execSync('npm start gen seed usersSeed --silent').toString().trim()
  expect(response).toMatch( 'created seed script usersSeed' );
})

test('It calls generate command of migration file', () => {
  const response = process.execSync('npm start gen migration addRoleToUser --silent').toString().trim()
  expect(response).toMatch( 'created migration script addRoleToUser' );
})

test('It fails to call  the generate command when missing filename', () => {
  const response = process.execSync('npm start gen migration --silent').toString().trim()
  expect(response).toMatch( 'missing filename parameter' );
})

test('It fails to call  the generate command when missing operation', () => {
  const response = process.execSync('npm start gen addRoleToUser --silent').toString().trim()
  expect(response).toMatch( 'invalid operation' );
})

test('It fails to call  the generate command when missing operation and filename --silent', () => {
  try {
    process.execSync('npm start gen --silent').toString().trim()
  } catch (err) {
    expect(err.message).toMatch( 'error: missing required argument \'operation\'' );
  }
})

test('It calls the migration command', () => {
  const response = process.execSync('npm start migrate --silent').toString().trim()
  expect(response).toMatch('running migrations...');
})

test('It calls the seed command', () => {
  const response = process.execSync('npm start seed --silent').toString().trim()
  expect(response).toMatch('running seeds...');
})