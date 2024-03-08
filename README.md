# Тестовое задание на позицию стажера фронтенд-разработчика в VK в команду сообществ

## Развертывание проекта локально

### Клонируем репозиторий

`git clone git@github.com:SKornya/VKtest.git`

### Устанавливаем зависимости

`yarn`

### Запускаем

`yarn dev`


## Задание

Создайте простое react приложение, состоящее из одной страницы, которое при открытии будет запрашивать список групп с backend (замокайте ответ метода данными из файла `groups.json`).

Типизация ответа метода получения групп `GetGroupsResponse`:
```tsx
interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}

interface Group {
  "id": number,
  "name": string,
  "closed": boolean,
  "avatar_color"?: string,
  "members_count": number,
  "friends"?: User[]
}

interface User {
  "first_name": string,
  "last_name": string
}
```

- Группа может быть закрытой или открытой.
- Группа может иметь аватарку в виде круга диаметром 100px с заливкой цветом, указанным в атрибуте avatar_color.
- Группа может содержать список ваших друзей, состоящих в ней.

После получения списка всех групп отобразите список на странице в произвольном виде. Отобразите в интерфейсе имя группы, аватарку, тип приватности (закрытая / открытая), кол-во подписчиков и кол-во друзей. При клике на кол-во друзей в блоке группы должен появиться блок с именем и фамилией каждого из друзей.

Если данных для отображения какого-то поля нет, его рисовать не нужно.

Над списком групп должен быть набор фильтров, позволяющий выбрать только нужные нам группы.

Мы должны иметь возможность отфильтровать группы по типу приватности (все / закрытая / открытая), по цвету аватарки (любой / все возможные значения из атрибута avatar_color), наличию друзей в группе

##### Учтите, что backend обрабатывает все запросы с задержкой в 1 секунду. Реализуйте эту задержку самостоятельно. 
##### Метод так же может упасть в ошибку или вернуть `result: 0` или не вернуть поле `data`, что равносильно ошибке. Просто учтите это в коде.

Инструмент и метод хранения данных на ваше усмотрение. Никаких ограничений на использование сторонних библиотек.
Вы так же можете воспользоваться любым готовым ui китом, в частности [библиотекой компонентов ВКонтакте](https://www.npmjs.com/package/@vkontakte/vkui) (для удобства обратите внимание на компонент [SimpleCell](https://vkcom.github.io/VKUI/6.0.1/#/SimpleCell))

Результатом тестового задания будет являться проект, доступный по ссылке для проверки.
CSS оцениваться не будет, можно не обращать внимание на визуальную составляющую.
