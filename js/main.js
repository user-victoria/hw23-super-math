// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
// Якщо хоче, зробити математичну дію znak (яка описана в прототипі),
// інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

let obj = {
    x: 12,
    y: 3,
    znak: '/'
}

class SuperMath {
    check(obj) {
        let askAction = prompt(`Ви хочете зробити дію ${obj.x} ${obj.znak} ${obj.y}?\nНапишіть "так" або "ні".\nЯкщо "так" то дія виконається, якщо "ні" то Ви маєте внести звої числа та знак.`);
        if (askAction === 'так') {
            console.log(`${obj.x} / ${obj.y} =`, obj.x / obj.y);
        }
        else if (askAction === 'ні') {
            this.input();
        }
        else {
            console.log('Ви скасували математичну дію');
        }
    }
    input() {
        let askNumber1 = +prompt('Введіть число');
        let askZnak = prompt('Введіть +, -, /, * або %');
        let askNumber2 = +prompt('Введіть ще одне число');

        if (isNaN(askNumber1) || isNaN(askNumber2)) {
            console.log('Дія не може бути виконана');
        }
        else if (askNumber1 === ' ' || askNumber1 === null || askZnak === '' || askZnak === null
            || askNumber2 === ' ' || askNumber2 === null) {
            console.log('Ви нічого не ввели');
        }
        else {
            if (askZnak === '+') {
                console.log(`${askNumber1} + ${askNumber2} =`, askNumber1 + askNumber2);
            }
            else if (askZnak === '-') {
                console.log(`${askNumber1} - ${askNumber2} =`, askNumber1 - askNumber2);
            }
            else if (askZnak === '/') {
                if (askNumber2 !== 0) {
                    console.log(`${askNumber1} / ${askNumber2} =`, askNumber1 / askNumber2);
                }
                else {
                    console.log('Друге число не може бути 0');
                }
            }
            else if (askZnak === '*') {
                console.log(`${askNumber1} * ${askNumber2} =`, askNumber1 * askNumber2);
            }
            else if (askZnak === '%') {
                if (askNumber2 !== 0) {
                    console.log(`${askNumber1} % ${askNumber2} =`, askNumber1 % askNumber2);
                }
                else {
                    console.log('Друге число не може бути 0');
                }
            }
            else {
                console.log('Ви ввели неправильний знак');
            }
        }
    }
}

const p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> рахує