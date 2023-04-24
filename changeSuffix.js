const path = require('path');
const fs = require('fs').promises;

async function changeSuffix(folderPath, extension) {
    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const { name } = path.parse(file);

            const oldPath = path.join(__dirname, folderPath, file);
            const newPath = path.join(__dirname, folderPath, `${name}${extension}`);

            await fs.rename(oldPath, newPath);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

async function main() {
    const eslint = './lib/esm/eslint-config-custom/';
    const prettier = './lib/esm/prettier-config-custom/';
    
    await Promise.all([
        changeSuffix(eslint, '.mjs'),
        changeSuffix(prettier, '.mjs')
    ]);
}

main()