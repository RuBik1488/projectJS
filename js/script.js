"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count :numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?');
//     let b = prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 10) {
        
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('ERROR');
//         i--;
//     }
// }
let i = 0;
while (i < 2) {
    let a = prompt('Один из последних просмотренных фильмов?');
    let b = prompt('На сколько оцените его?');
    if (a != null && b != null && a != '' && b != '' && a.length < 10) {
        
        personalMovieDB.movies[a] = b;
    } else {
        console.log('ERROR');
        i--;
    }
    i++;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}




