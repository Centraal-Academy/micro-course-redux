module.exports = {
  rootDir: 'tests',
  testMatch: ['**/*-test.js'],
  setupTestFrameworkScriptFile: './setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer']
}
