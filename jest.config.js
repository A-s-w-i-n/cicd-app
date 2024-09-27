export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest', // This is necessary if you are using Babel
    },
    moduleFileExtensions: ['js'], // Recognize .js file extensions
  };