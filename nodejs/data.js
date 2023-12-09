export const data = {
  title: {
    showLink: false,
    link: "https://google.com",
  },
  utm: "",
  content: [
    {
      type: "TEXT",
      text: "Коллеги, добрый день!",
    },
    {
      type: "TEXT",
      text: "<b>15 января 2024 года на вакансии «Бизнес»</b> изменится стоимость размещения в Барнауле и Алтайском крае:",
    },
    {
      type: "TABLE",
      curr: "1 900 ₽",
      new: "2 100 ₽"
    },
    {
      type: "TEXT",
      text: "Изменения также коснутся вакансий «Промо» и пакетных предложений.\nСтоимость доступа к базе резюме и опций продвижения останется прежней.",
    },
    {
      type: "TEXT",
      text: "Успейте приобрести доступы по текущим ценам!",
    },
    {
      type: "BUTTON",
      text: "Купить по старой цене",
      linkTo: "https://novosibirsk.hr.zarplata.ru/price/zp-publications"
    },
    {
      type: "TEXT",
      text: `Если у вас есть вопросы, напишите менеджеру или позвоните нам по номеру 
      <a
      href="tel:88002343500"
      style="
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        font-size: 15px;
        text-decoration: none;
        color: #0076cb;
      "
      >8 (800) 234-35-00</a
    >`
    }
  ],
  emailFooter: false,
};
