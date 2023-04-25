const path = require("path");
const fs = require("fs").promises;

async function chExtension(
  folderPath,
  targetExt,
  outputExt,
  recursive = false
) {
  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      // Check if file is a directory
      const isDir = (await fs.lstat(path.join(folderPath, file))).isDirectory();
      if (isDir) {
        // If recursive=false => continue checking remaining files.
        if (!recursive) continue;

        // If recursive=true => modify files within nested folders.
        const p = path.join(folderPath, file);
        await chExtension(p, targetExt, outputExt, recursive);
        continue;
      }

      const { name, ext } = path.parse(file);
      if (ext !== targetExt) continue;

      const oldPath = path.join(folderPath, file);
      const newPath = path.join(folderPath, `${name}${outputExt}`);

      await fs.rename(oldPath, newPath);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function main() {
  const workingDir = process.cwd();

  const targetFolder = process.argv[2];
  const targetExt = process.argv[3];
  const outputExt = process.argv[4];
  const recursive = process.argv[5] ?? false;

  if (!targetFolder || !targetExt || !outputExt) {
    console.log(
      `\nMissing arguments when running script at ${__dirname}/chExtension.js\n\n` +
        `Usage: node chExtension.js <folder> <target extension> <output extension> <recursive=boolean>\n\n` +
        `Example: node chExtension.js ./lib/ .js .mjs false\n`
    );
    process.exit(1);
  }

  const folderPath = path.join(workingDir, targetFolder);
  await chExtension(folderPath, targetExt, outputExt, recursive);
}

main();
