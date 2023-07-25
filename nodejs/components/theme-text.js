export const getThemeText = (text) => {
  return `
  <table
  cellpadding="0"
  cellspacing="0"
  style="
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse;
    border-spacing: 0px;
    margin-bottom: 20px;
  "
  width="100%"
>
  <tbody>
    <tr style="border-collapse: collapse">
      <td
        align="center"
        style="padding: 0; margin: 0"
        valign="middle"
      >
        <table
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
          "
          width="100%"
        >
          <tbody>
            <tr
              style="
                border-collapse: collapse;
              "
            >
              <td
                align="left"
                style="
                  padding: 0;
                  margin: 0;
                  padding-top: 0px;
                "
              >
                <p
                  style="
                    margin: 0;
                    -webkit-text-size-adjust: none;
                    -ms-text-size-adjust: none;
                    mso-line-height-rule: exactly;
                    font-family: Tahoma,
                      Arial,
                      'helvetica neue',
                      helvetica,
                      sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                    color: #18160b;
                    padding-bottom: 10px;
                  "
                >
                  ${text}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

    `;
};
