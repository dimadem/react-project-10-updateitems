# react-project-5-Adminka // # react-project-8-SavedAdminka //

# react-project-10-UpdateItems //

Задачи: (10)

1. реализовать сохранение добавленных админом товаров в базе данных с помощью POST-метода.

2. Стили tailwind

Задачи: (8)

1. Сохранить добавленные админом магазина товары в локальном хранилище
2. Восстановить их, когда админ откроет страницу заново или перезагрузит ее

3. Стейт items сохраняется в localStorage под ключом "items", используя все необходимые оптимизации.

4. Стейт items восстанавливается из localStorage при релоаде страницы, используя все необходимые оптимизации.

5. В качестве дополнительного мини-челленджа реализуйте динамическое изменение заголовка страницы на «Товары отсутствуют» при пустом списке товаров и «X товаров», где X — это количество добавленных товаров.

6. Результат в виде работающего приложения присылайте своему наставнику ссылкой на codesandbox или на github-репо проекта, если работали над проектом локально с помощью create-react-app.

- Не забывайте, что у вашего наставника localStorage «пустой».

---

Задачи: (5)

Цель проекта рефакторинг прошлого проекта с админкой.
Компонент Shop разросся и самое время отрефакторить на два компонента:

1. форма добавления товаров AddItem
2. список товаров ItemsList.

- рефакторинг `<ul className="shop">...</ul>` в ItemsList. OK

- перенос form в компонент AddItem OK

Shop содержит стейты:

1. имени товара (name) OK
2. описания (desc) OK
3. валидации (valid) OK
4. объявляются обработчики событий: OK
   - апдейт с названием
   - апдейт с описанием
   - сабмит формы
   - удаление товара из списка

Shop.js рендерит три элемента: OK

```
1. <AddItem /> с передачей необходимых стейтов и методов через пропсы;
2. <div><p>Добавьте первый товар</p></div>, если список товаров пуст;
3. <ItemList /> с передачей необходимых стейтов и методов через пропсы.
```

---

В итоге стейт компонентов AddItem и ItemList окажется «поднятным» до ближайшего общего предка — компонента Shop (поднять стейт еще выше до компонента App было бы ошибкой, так как он не является ближайшим).

Код готового проекта пришлите наставнику ссылкой на свой codesandbox или ссылкой на github-репозиторий.
