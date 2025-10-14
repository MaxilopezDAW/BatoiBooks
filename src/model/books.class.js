import Book from './book.class'

const TYPE_NOTES = 'Apunts'

export default class Books {
  constructor() {
    this.data = [];
    this.nextId = 1;
  }

  populate(datos) {
    this.data = datos.map(book => new Book(book));

    // código dado por el profe en clase (para determinar el indice de el proximo book)
    const maxId = this.data.reduce((max, book) => book.id > max ? book.id : max, 0);
    this.nextId = maxId + 1;
  }

  addBook(book) {
    const newBook = new Book({ id: this.nextId++, ...book });
    this.data.push(newBook);
    return newBook;
  }

  removeBook(bookId) {
    const index = this.getBookIndexById(bookId);
    this.data.splice(index, 1);
  }

  changeBook(book) {
    const index = this.getBookIndexById(book.id);
    const newBook = new Book(book);
    this.data.splice(index, 1, newBook);
    return newBook;
  }

  getBookById(bookId) {
    const book = this.data.find(book => book.id === bookId);
    if (!book) throw new Error('Book not found');
    return book;
  }

  getBookIndexById(bookId) {
    const index = this.data.findIndex(book => book.id === bookId);
    if (index === -1) throw new Error('Book not found');
    return index;
  }

  bookExists(userId, moduleCode) {
    return this.data.some(book => book.userId === userId && book.moduleCode === moduleCode);
  }

  booksFromUser(userId) {
    return this.data.filter(book => book.userId === userId);
  }

  booksFromModule(moduleCode) {
    return this.data.filter(book => book.moduleCode === moduleCode);
  }

  booksCheeperThan(price) {
    return this.data.filter(book => book.price <= price);
  }

  booksWithStatus(estado) {
    return this.data.filter(book => book.status === estado);
  }

  averagePriceOfBooks() {
    if (this.data.length === 0) { return '0.00 €'; }
    const total = this.data.reduce((sum, book) => sum + book.price, 0);
    return (total / this.data.length).toFixed(2) + ' €';
  }

  booksOfTypeNotes() {
    return this.data.filter(book => book.publisher === TYPE_NOTES);
  }

  booksNotSold() {
    return this.data.filter(book => book.soldDate === '');
  }

  incrementPriceOfbooks(percentage) {
    this.data = this.data.map(book => ({
      ...book,
      price: Math.round((book.price + book.price * percentage) * 100) / 100
    }));
  }

  toString() {
    return this.data.map(b => b.id).join(', ');
  }
}