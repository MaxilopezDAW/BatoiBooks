
getBookById => (books, bookId) => books.find(book => book.id = bookId); if(!book) throw new console.error("Book not found");

getBookIndexById => (books, bookId) => books.findIndex(book => book.id = bookId); if(!book) throw new console.error("Book not found");

bookExists(books, userId, moduleCode) => 
booksFromUser(books, userId)
booksFromModule(books, userId)
booksCheeperThan(books, moduleCode)
booksWithStatus(books, estado)
averagePriceOfBooks(books)
booksOfTypeNote(books)
booksNotSold(books)
incrementPriceOfbooks(books, percentage)
getUserById(users, userId)
getUserIndexById(users, userId)
getUserByNickName(users, nick)
getModuleByCode(modules, moduleCode)

  







export {
    getBookById,
    getBookIndexById,
    bookExists,
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNote,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode 
  }
  
