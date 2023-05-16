export const getSpeakerNoTheme = (avatar, fioAndJob) => {
    return `
    <table
    cellpadding="0"
    cellspacing="0"
    style="
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse;
      border-spacing: 0px;
    "
    width="100%"
  >
    <tbody>
      <tr style="border-collapse: collapse">
        <td
          align="center"
          valign="top"
          style="
            margin: 0;
            padding-right: 20px;
            padding-bottom: 20px;
            width: 104px;
          "
          valign=""
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
              <tr style="border-collapse: collapse">
                <td align="left" style="padding: 0; margin: 0; padding-top: 0px">
                  <!--https://xfl.jp/sVIjjw--><img
                    alt=""
                    src="${avatar}"
                    style="
                      display: block;
                      border: 0px none;
                      outline: currentcolor none medium;
                      text-decoration: none;
                      border-radius: 50%;
                      width: 100px;
                      height: 100px;
                      vertical-align: top;
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td align="center" style="padding: 0; margin: 0" valign="middle">
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
              <tr style="border-collapse: collapse">
                <td
                  align="left"
                  style="
                    padding: 0;
                    margin: 0;
                    padding-top: 0px;
                    padding-bottom: 8px;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      -webkit-text-size-adjust: none;
                      -ms-text-size-adjust: none;
                      mso-line-height-rule: exactly;
                      font-family: Tahoma, Arial, 'helvetica neue', helvetica,
                        sans-serif;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 14px;
                      line-height: 19px;
                      color: #18160b;
                      padding-bottom: 0px;
                    "
                  >
                    ${fioAndJob}
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