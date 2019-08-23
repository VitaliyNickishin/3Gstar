/*Кнопка меню*/
$('.navbar-toggler').on('click', function(e) {
 e.preventDefault();//для отмены действия при нажатии кнопки
 $(this).toggleClass('navbar-toggler_active');//находим.navbar-toggler и создаем класс navbar-toggler_active для переварачивания полосок
 
});