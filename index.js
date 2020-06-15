// @ts-nocheck

class BookStore {
  constructor() {
    this.form = document.querySelector('.form')
    this.table = document.querySelector('.book-table tbody')
    this.books = []
    this.render()
    this.onSubmit()
    
  }

  get title() {
    return  document.querySelector('.form__title-input').value
    
  }
  
  get author() {
    return  document.querySelector('.form__author-input').value

  }
  onSubmit() {
    this.form.addEventListener('submit',(e)=> {
      e.preventDefault()
      const book = {
        title:this.title,
        author:this.author
      }
      this.books.push(book)
      console.log(this.books)
      this.render()
    })
  }

  render() {
    let tableData=''
        
    this.books.forEach(b => {
       tableData +=
         `<tr>
            <td>${b.title}</td>
            <td>${b.author}</td>
          </tr>
          `
    })

    this.table.innerHTML = tableData
  }
}

const bookStore = new BookStore()

