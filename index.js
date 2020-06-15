// @ts-nocheck

function* IdGenerator() {
  let id = 0;
  while(true) 
    yield id += 1
  
}
const id = IdGenerator();


class BookStore {
  constructor() {
    this.form = document.querySelector('.form')
    this.table = document.querySelector('.book-table tbody')
    this.books = []
    this.render()
    this.addBookListeners()
    
  }

  get title() {
    return  document.querySelector('.form__title-input').value
    
  }
  
  get author() {
    return  document.querySelector('.form__author-input').value

  }
  addBookListeners() {
    this.form.addEventListener('submit',this.addBook)
  }

  removeBookListeners = () => {
    const books = document.querySelectorAll(".remove");
    console.log(books)
    books.forEach(b => b.addEventListener('click',this.removeBook))
  }

  removeBook = e => {
    const targetId = e.target.id
    const index = this.books.findIndex(b => b.id.toString() ===targetId)
    this.books.splice(index,1)
    this.render()
  }

  addBook = e =>  {
    e.preventDefault()
    const book = {
        id:id.next().value,
        title:this.title,
        author:this.author
      }
      this.books.push(book)
      this.render()
      this.removeBookListeners()
  }
  

  render() {
    let tableData=''
        
    this.books.forEach(b => {
       tableData +=
         `<tr>
            <td>${b.title}</td>
            <td>${b.author}</td>
            <td class="remove" id="${b.id}">X</td>
          </tr>
          `
    })

    this.table.innerHTML = tableData
    this.removeBookListeners()
  }
}

const bookStore = new BookStore()

