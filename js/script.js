'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector ('.adding__input'),
          checkbox = addForm.querySelector ('[type=checkbox]');


    addForm.addEventListener('submit', (event) => { // событие по отправке формы
        let newFilm = addInput.value;
        let favorite = checkbox.checked;
        event.preventDefault();                 // отменяем стандартное поведение браузера
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }     

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm); // добавляем название фильма в объект 
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);

                           //очистка формы
        } 

        event.target.reset(); 
        

        
    });
    
    const deleteAdv = (arr) => {                // удаляем картинки рекламы
        arr.forEach(item => {                   
            item.remove();
        });
    };
    
    const makeChanges = () => {                // дополнительные изменения на странице
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    
    function createMovieList(films, parent) {   // аргументы фильмы и родители(с каким родит. блоком будем работать)
        parent.innerHTML = "";                  // какой родительский блок мы будем очищать
        sortArr(films);

        films.forEach((film, i) => {  //вывод фильмов из объекта movieDB на сайт
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
                
            });
        });
        
    }
    
    
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
        
            
        

    
    //console.log(movieDB.movies);
});







