const TYPE_NOTES = "Apunts"

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

const booksCheeperThan = (books, price) => books.filter(book => book.price < price);

const booksWithStatus = (books, estado) => books.filter(book => book.status === estado);

const averagePriceOfBooks = (books) => {
  if (books.length === 0) { return "0.00 €"; }

  const total = books.reduce((sum, book) => sum + book.price, 0);
  return (total / books.length).toFixed(2) + " €";
};


const booksOfTypeNotes = (books) => books.filter(book => book.publisher === TYPE_NOTES);

const booksNotSold = (books) => books.filter(book => book.soldDate === "");

const incrementPriceOfbooks = (books, percentage) =>
  books.map(book => ({ ...book, price: book.price + book.price * percentage
  }));
const getUserById = (users, userId) => {
const user = users.find(user => user.id === userId);
if(!user) throw new Error("User not found");
return user;
};

const getUserIndexById = (users, userId) => {
const index = users.findIndex(user => user.id === userId);
if (index === -1) throw new Error("User not found");
  return index;
};

const getUserByNickName = (users, nick) => {
  const user = users.find(user => user.nick === nick);
  if (!user) throw new Error("User not found");
  return user;
};

const getModuleByCode = (modules, moduleCode) => { const modul = modules.find(modul => modul.code === moduleCode);
if(!modul) throw new Error("Modul not found");
return modul;
};

export {
  getBookById,
  getBookIndexById,
  bookExists,
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNotes,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode 
}
