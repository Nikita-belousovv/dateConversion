# dateConversion
Функция позволяет конвертировать дату, полученную с бэкенда в формате строки, пример - "01.02.2022 13:08" в локальную тайм зону клиента.

Пример использования:

"20.01.2022 12:13" - предположим, что это значение пришло с бекенда. Мы находимся в тайм зоне по Москве и Санкт-Петербургу: +03:00

"20.01.2022 12:13" - это значение передаём в функцию dateConversion("20.01.2022 12:13") и получаем результат: "20.01.2022 15:13";
