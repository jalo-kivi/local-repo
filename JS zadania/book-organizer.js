** start of script.js **

const books = [
  {
    title: "Dr.Stone",
    authorName: "Riichiro Inagaki",
    releaseYear: 2018,
  },
  {
    title: "Good Omens",
    authorName: "Terry Pratchett",
    releaseYear: 2005,
  },
  {
    title: "Moby Dick",
    authorName: "Herman Melville",
    releaseYear: 1851,
  }
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  else {
    return 0;
  }
}

let filteredBooks = books.filter(book => book.releaseYear >= 1950);

console.log(filteredBooks);

filteredBooks.sort(sortByYear);

console.log(filteredBooks.sort(sortByYear));

** end of script.js **

