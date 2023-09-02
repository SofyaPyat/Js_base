/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    function sortFilm (a,b) {
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        } else {
            return -1
        }
    }
    //document.querySelector("div.promo__adv").remove();
    const adv = document.querySelectorAll(".promo__adv img"),
          poster = document.querySelector("div.promo__bg"), 
          genre = poster.querySelector("div.promo__genre"),
          movieList = document.querySelector(".promo__interactive-list"),
          formAdd = document.querySelector("form.add"),
          movieNameField = formAdd.querySelector(".adding__input"),
          checkBox = formAdd.querySelector("input[type='checkbox']");

    
    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newMovieName = movieNameField.value;
        const isFavourite = checkBox.checked;

        if (newMovieName) {
            if (newMovieName.length > 21)
                newMovieName = `${newMovieName.substr(0,21)}...`;
            movieDB.movies.push(newMovieName);
            event.target.reset();

            if (isFavourite)
                console.log(`Добавляем любимый фильм ${newMovieName}`);
        }
 
        createMovieList(movieDB.movies, movieList);

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });    
    };
    deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent = "ДРАМА";
        poster.style.backgroundImage = "url(/img/bg.jpg)";
    }
    makeChanges();
    
    function createMovieList(films, parent) {
        films.sort(sortFilm); 
        parent.innerHTML = "";
    
        films.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i+1} ${item} <div class="delete"></div> </li>`
         });
      
         document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            })
         }) 
    };

    createMovieList(movieDB.movies, movieList);
})