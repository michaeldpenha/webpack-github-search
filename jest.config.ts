module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/**/*.{tsx,ts}'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'regenerator-runtime/runtime'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'types/schema': '<rootDir>/types/schema',
  },
};
