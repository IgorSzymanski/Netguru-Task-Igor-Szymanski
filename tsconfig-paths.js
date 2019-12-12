const { compilerOptions: { outDir: baseUrl, paths } } = require('./tsconfig.json')
const tsConfigPaths = require('tsconfig-paths')

tsConfigPaths.register({
	baseUrl,
	paths,
})