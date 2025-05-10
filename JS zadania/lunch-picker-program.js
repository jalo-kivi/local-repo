const lunches = [];

function addLunchToEnd(lunches, item) {
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, item) {
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    let lastItem = lunches.pop();
    console.log(`${lastItem} removed from the end of the lunch menu.`);
  }
  else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length > 0) {
    let firstItem = lunches.shift();
    console.log(`${firstItem} removed from the start of the lunch menu.`);
  }
  else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length > 0 ) {
    let lunchesLength = lunches.length;
    let randomItem = Math.round(Math.random()*lunchesLength);
    console.log("Randomly selected lunch: " + lunches[randomItem]);
  }
  else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    let menuLine = "Menu items: ";
    for (let i = 0; i < lunches.length; i++) {
      menuLine += lunches[i];
      if (i < lunches.length - 1) {
        menuLine += ", ";
      }
    }
    console.log(menuLine);
  } else {
    console.log("The menu is empty.");
  }
}