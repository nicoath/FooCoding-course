const bookNames = [
    'what_about_activism',
    'atomic_habits',
    'consider_the_lobster',
    'utopia_for_realists',
    'homo_deus',
    'swimming_in_the_dark',
    'el_tunel',
    'sapiens',
    'humans',
    'train_dreams',
]

const bookList = {
    what_about_activism:{
        title: 'What about activism?',
        autor: 'Sternberg Press',
        language: 'English',
    },
  
    atomic_habits: {
        title: 'Atomic habits',
        autor: 'James Clear',
        language: 'English',
    },

    consider_the_lobster: {
        title: 'Consider the lobster',
        autor: 'David Foster Wallace',
        language: 'English',
    },

    utopia_for_realists: {
        title: 'Utopia for realists',
        autor: 'Rutger Bregman',
        language: 'English',
        
    },

    homo_deus: {
        title: 'Homo Deus', 
        autor: 'Yuval Noah Harari',
        language: 'English',

    },

    swimming_in_the_dark: {
        title: 'Swimming i the dark',
        autor: 'Tomasz Jedrowski',
        language: 'English',

    },

    el_tunel: {
        title: 'El tunel',
        autor: 'Ernesto Sabato',
        language: 'Spanish',
    },

    sapiens:{
        title: 'Sapiens',
        autor: 'Yuval Noah Harari',
        language: 'English',
    },

    humans: {
        title: 'Humans',
        autor: 'Tom Phillips',
        language: 'English',
    },

    train_dreams: {
        title: 'Train dreams',
        autor: 'Denis Johnson',
        language: 'English',
    },
}

const bookCover = {
    what_about_activism: "./img/img_1.jpg",
    atomic_habits: "./img/img_2.jpg",
    consider_the_lobster: "./img/img_3.jpg",
    utopia_for_realists: "./img/img_4.jpg",
    homo_deus: "./img/img_5.jpg",
    swimming_in_the_dark: "./img/img_6.jpg",
    el_tunel: "./img/img_7.jpg",
    sapiens: "./img/img_8.jpg",
    humans: "./img/img_9.jpg",
    train_dreams: "./img/img_10.jpg",
  };

  function makeUL(array) {
    let bookList = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
      let item = document.createElement("li");
      item.appendChild(document.createTextNode(array[i]));
      bookList.appendChild(item);
    }
    return bookList;
  }

  

  function makeULObj(array, object) {
    let bookList = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
      let item = document.createElement("li");
      item.setAttribute("id", array[i]);
      let book = object[array[i]];
      let header = document.createElement("h2");
      let textHeader = document.createTextNode(book.title);
      item.appendChild(header);
      header.appendChild(textHeader);
      
      let paragraph = document.createElement("p");
      let autorParagraph = document.createTextNode(book.autor);
      let languageParagraph = document.createTextNode(book.language);
      item.appendChild(paragraph);
      paragraph.appendChild(autorParagraph);
    
      let linebreak = document.createElement("br");
      paragraph.appendChild(linebreak);
      paragraph.appendChild(languageParagraph);
      bookList.appendChild(item);
      addCover(array[i], covers, item, booksObj);
    }
    return bookList;
  }

  function addCover(key, obj, item, objWithBooks) {
    let url = obj[key];
    let img = document.createElement("img");
    img.src = url;
    
    let objWithAbook = objWithBooks[key];
    let alt = objWithAbook.title;
    img.setAttribute("alt", alt);
    item.appendChild(img);
  }

  makeULObj(bookNames, booksObj);
  document.body.appendChild(makeULObj(bookNames, booksObj));
