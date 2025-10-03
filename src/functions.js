const TYPE_NOTES = "apunts"

const getBookById = (books, bookId) => {
  const book = books.find(book => book.id === bookId);
  if (!book) throw new Error("Book not found");
  return book;}

  const getBookIndexById = (books, bookId) => {
    const index = books.findIndex(book => book.id === bookId);
    if (index === -1) throw new Error("Book not found");
    return index;
  };

const bookExists = (books, userId, moduleCode) => books.some(book => book.userId === userId && book.moduleCode === moduleCode);

const booksFromUser = (books, userId) => books.filter(book => book.userId === userId);

const booksFromModule = (books, moduleCode) => books.filter(book => book.moduleCode === moduleCode);

const booksCheeperThan = (books, price) => books.filter(book => book.price >= price);

const booksWithStatus = (books, estado) => books.filter(book => book.status === estado);

 const averagePriceOfBooks = (books) => {let total = books.reduce((sum,book) => sum + book.price , 0);
  return (total / books.length).toFixed(2) + " €";
}

const booksOfTypeNote = (books) => books.filter(book => book.publisher === TYPE_NOTES);

const booksNotSold = (books) => books.filter(book => book.soldDate === null);

const incrementPriceOfbooks = (books, percentage) => book.map(book => book.price += book.price * 0.1);

const getUserById = (users, userId) => users.find(user => user.id === userId);

const getUserIndexById = (users, userId) => users.findIndex(user => user.id === userId);

const getUserByNickName = (users, nick) => users.find(user => user.nick === nick);

const getModuleByCode = (modules, moduleCode) => modules.find(modul => modul.code === moduleCode);
