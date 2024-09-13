# React AXIOS (REST-API)

## Версии

- node: 20.11.1
- npm: 10.2.4

## Команды

### установить зависимости

```
npm install
```

### запустить локально проект

```
npm run dev
```

### собрать билд проекта

```
npm run build
```

## Стек

- vite
- JavaScript
- React v.18
- React Bootstrap (UI lib)
- React Router DOM v.6 (Routing lib)
- AXIOS (API lib)

## Тема урока

- Установка AXIOS
- Конфигурация AXIOS
- Ядро на основе AXIOS
- Сервисы на основе ядра

## Структура

### Архитектура проекта

- components - ui компоненты (глупые, без логики)
- widjets - полноценные логические компоненты
- use - все пользовательские хуки (Hook)
- api - все сетевые запросы
- router - реализация маршрутизации через React-Router-DOM
- pages - все компоненты-страницы
- const - все статичные данные переиспользуемые в проекте
- layout - макеты/шаблоны (главный макет)

Использование import/export через Public API (index.js файл для сборки всех частей директории)

Подключение к html реализовано через файл main.jsx
