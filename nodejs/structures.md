# Доступные структуры для формирования HTML письма

| Тег            | Параметры                                         | Описание                               |
|----------------|---------------------------------------------------|----------------------------------------|
| HEADER_LG      | text: string                                      | Заголовок первого уровня               |
| HEADER_BASE    | text: string                                      | Заголовок второго уровня               |
| TEXT           | text: string                                      | Простой текст                          |
| TEXT_BOLD      | text: string                                      | Жирный текст                           |
| SPEAKERS       | img: string; fioAndJob: string; theme: string;    | Карточка спикера                       |
| SPEAKERTHESIS  | img: string; fioAndJob: string; theme: string;    | Карточка спикера с тезисами            |
| SPEAKERNOTHEME |                                                   | Карточка спикера без темы              |
| THEMETEXT      |                                                   | Тема спикера отдельно от карточки      |
| IMAGE          | maxWidth: string; height: string; source: string; | Картинка                               |
| BUTTON         | text: string linkTo: string;                      | Кнопка                                 |
| FOOTER         |                                                   | Подвал письма с информацией о компании |
