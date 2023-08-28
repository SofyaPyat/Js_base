/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


movieDB.movies.sort(sortFilm);

function sortFilm (a,b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    } else {
        return -1
    }
}



document.querySelector("div.promo__adv").remove();
const promo_bg = document.querySelector("div.promo__bg");
const genre = promo_bg.querySelector("div.promo__genre");
const bc_im = {background: "/img/bg.jpg"}

genre.textContent = "ДРАМА";


promo_bg.classList.add(bc_im);

