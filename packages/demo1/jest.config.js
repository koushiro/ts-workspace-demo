// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  // transformIgnorePatterns: [
  //   '/node_modules/(?!(@polkadot|@babel/runtime/helpers/esm/))'
  // ]
};
