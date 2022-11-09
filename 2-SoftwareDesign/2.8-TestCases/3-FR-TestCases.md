|FR id|TC id|Опис кроків тестового сценарію|Опис очікуваних результатів|
|:-|:-|:-|:-|
|FR1.1|TC1.1|Кроки сценарію: <br> 1. `email = user@mail.com` <br> 2. `password = Password@`|Результат = `accessToken`|
|FR1.1|TC1.2|Кроки сценарію: <br> 1. `email = user@mail.com` <br> 2. `password = Word@`| Результат = `undefined`|
|FR1.1|TC1.3|Кроки сценарію: <br> 1. `email = user@mail.com` <br> 2.  `password = password@`| Результат = `undefined`|
|FR1.1|TC1.4|Кроки сценарію: <br> 1. `email = user@mail.com` <br> 2. `password = Password`| Результат = `undefined`|