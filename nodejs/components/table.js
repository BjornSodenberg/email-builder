export const getTableBox = (currPrice, newPrice) => {
  return `
  <tr style="border-collapse: collapse">
  <td
    align="left"
    class="padp"
    style="
      padding: 0;
      margin: 0;
      padding-bottom: 20px;
      padding-left: 0px;
      padding-right: 0px;
    "
  >
  <table>
  <tr>
    <td style="width: 40%; border-bottom: 1px solid rgb(226, 227, 227); padding: 8px;"></td>
    <td style="width: 20%; border-bottom: 1px solid rgb(226, 227, 227); background-color: rgb(250, 250, 205); padding: 8px;"><span style="font-size: 14px; font-weight: 600;">Сейчас</span></td>
    <td style="width: 20%; border-bottom: 1px solid rgb(226, 227, 227); padding: 8px;"><span style="font-size: 14px; font-weight: 600;">С 15 января</span></td>
  </tr>
  <tr>
    <td style="width: 40%; border-bottom: 1px solid rgb(226, 227, 227); padding: 8px;"><span style="font-size: 14px; font-weight: 600;">Вакансия «Бизнес» (1 шт.)<span></td>
    <td style="width: 20%; border-bottom: 1px solid rgb(226, 227, 227); background-color: rgb(250, 250, 205); padding: 8px;"><span style="font-size: 14px; ">${currPrice}</span></td>
    <td style="width: 20%; border-bottom: 1px solid rgb(226, 227, 227); padding: 8px;"><span style="font-size: 14px; ">${newPrice}</span></td>
  </tr>
</table>
  </td>
</tr>

  `;
};


