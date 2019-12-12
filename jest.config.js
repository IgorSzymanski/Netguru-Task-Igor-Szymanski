const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
	moduleFileExtensions: ['js', 'json', 'ts'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	rootDir: compilerOptions.baseDir,
	testRegex: '.spec.ts$',
	coverageDirectory: '../coverage',
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
}
