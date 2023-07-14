const fs = require("fs");
const path = require("path");

const avatar = path.join(__dirname, ".", "source/img/avatar.png");
const avatarDest = path.join(__dirname, ".", "docs/img/avatar.png");

function copyFile(target, dest) {
  fs.copyFile(target, dest, (err) => {
    if (err) {
      console.error(`Failed to copy file: ${err}`);
      return;
    }
    console.log(`File copied successfully from ${target} to ${dest}`);
  });
}
copyFile(avatar, avatarDest);
