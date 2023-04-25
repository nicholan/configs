export default {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    plugins: ['react', 'react-hooks'],
};
