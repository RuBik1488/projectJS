"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let lastFilm = prompt('Один из последних просмотренных фильмов?');
let ratingFilm = prompt('На сколько оцените его?');


let personalMovieDB = {
    count :numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastFilm] = ratingFilm;

console.log(personalMovieDB);


//for test