
const poll = new Map();

function addOption(option) {
  if (!option || option.trim() === "") {
    return 'Option cannot be empty.';
  }

  else if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  else {
    const voters = poll.get(option);

    if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
    }
    else {
      voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
    }
  }
}

addOption("Turkey");
addOption("Egypt");
addOption("Poland");

vote("Turkey", "person1");
vote("Turkey", "person2");
vote("Egypt", "person3");

function displayResults() {
  let result = "Poll Results:";
  for (const [option, voters] of poll.entries()) {
    result += `\n${option}: ${voters.size} votes`;
  }
  return result;
}


console.log(displayResults());



