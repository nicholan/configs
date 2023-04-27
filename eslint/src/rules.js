module.exports = {
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				ignoreRestSiblings: true,
			},
		],
		'@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
		'react/react-in-jsx-scope': 'off',
	},
};
