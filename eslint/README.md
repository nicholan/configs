# Project Title

Personal eslint configuration files.

### Installing

```bash
npm install -D @nicholan/eslint-config
```

Extend .eslintrc.js:

```javascript
module.exports = {
	extends: [
		'@nicholan/eslint-config',
		'@nicholan/eslint-config/react',
		'@nicholan/eslint-config/prettier',
		'@nicholan/eslint-config/rules',
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	root: true,
	ignorePatterns: ['.eslintrc.js'],
};
```
