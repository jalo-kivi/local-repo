** start of script.js **

let currentDate = new Date();

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'short'
};

const formatted = currentDate.toLocaleString('en-US', options);
const currentDateFormat = `Current Date and Time: ${formatted}`;


console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

console.log(formatDateMMDDYYYY(currentDate));


function formatDateLong(date) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formatted = date.toLocaleDateString('en-US', options);

  return `Formatted Date (Month Day, Year): ${formatted}`;
}

console.log(formatDateLong(currentDate));

** end of script.js **

