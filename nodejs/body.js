export const getBody = () => `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <style type="text/css">
      body {
        display: flex !important;
        flex-direction: column !important;
        margin: 0 !important;
      }
    </style>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Зарплата.ру</title>
    <style type="text/css">
      @media only screen and (max-width: 560px) {
        .pad {
          padding-left: 12px !important;
          padding-right: 12px !important;
          padding-bottom: 0px !important;
          padding-top: 20px !important;
        }

        .padlogo {
          padding-left: 14px !important;
          padding-right: 14px !important;
          padding-bottom: 20px !important;
          padding-top: 20px !important;
        }

        .padmain {
          padding-left: 8px !important;
          padding-right: 8px !important;
        }

        .padh {
          padding-left: 12px !important;
          padding-right: 12px !important;
          padding-bottom: 24px !important;
          padding-top: 24px !important;
        }

        .padp {
          padding-left: 0px !important;
          padding-bottom: 12px !important;
        }

        .padb {
          padding-left: 20px !important;
          padding-right: 20px !important;
          padding-bottom: 0px !important;
        }

        .padbottom {
          padding-left: 12px !important;
          padding-right: 12px !important;
          padding-bottom: 28px !important;
          padding-top: 20px !important;
        }

        .plr30 {
          padding-left: 24px !important;
          padding-right: 30px !important;
        }

        .price {
          text-align: center;
        }

        .button {
          line-height: 48px !important;
          width: 300px !important;
        }

        .button1 {
          line-height: 36px !important;
          width: 130px !important;
        }

        ul li,
        ol li,
        a {
          font-size: 12px !important;
        }

        p {
          font-size: 13px !important;
        }

        .pfooter {
          font-size: 10px !important;
        }

        h1 {
          font-size: 16px !important;
          text-align: left;
          line-height: 30px !important;
        }

        h2 {
          font-size: 14px !important;
          text-align: left;
        }

        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }

        h1 a {
          font-size: 18px !important;
        }

        h2 a {
          font-size: 26px !important;
        }

        h3 a {
          font-size: 20px !important;
        }

        .fottertext {
          font-size: 10px !important;
        }

        .es-menu td a {
          font-size: 16px !important;
        }

        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 15px !important;
        }

        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 10px !important;
        }

        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }

        *[class="gmail-fix"] {
          display: none !important;
        }

        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }

        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }

        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left;
        }

        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }

        .es-button-border {
          display: inline-block !important;
        }

        a.es-button {
          font-size: 14px !important;
          display: inline-block !important;
          line-height: 24px !important;
        }

        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }

        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }

        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 560px !important;
        }

        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }

        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }

        .es-m-p0 {
          padding: 0px !important;
        }

        .es-m-p0r {
          padding-right: 0px !important;
        }

        .es-m-p0l {
          padding-left: 0px !important;
        }

        .es-m-p0t {
          padding-top: 0px !important;
        }

        .es-m-p0b {
          padding-bottom: 0 !important;
        }

        .es-m-p20b {
          padding-bottom: 20px !important;
        }

        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }

        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }

        .es-desk-menu-hidden {
          display: table-cell !important;
        }

        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }

        table.es-social {
          display: inline-block !important;
        }

        table.es-social td {
          display: inline-block !important;
        }
      }

      #outlook a {
        padding: 0;
      }

      ..ExternalClass {
        width: 100%;
      }

      ..ExternalClass,
      ..ExternalClass p,
      ..ExternalClass span,
      ..ExternalClass font,
      ..ExternalClass td,
      ..ExternalClass div {
        line-height: 100%;
      }

      ..es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      ..es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
    </style>
  </head>
<body
  bgcolor="#f4f4f4"
  style="
    width: 100%;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    padding: 0px;
    margin: 0px;
    cursor: auto;
  "
>
  <!-- PREHEADER -->
  <div
    align="center"
    class="es-wrapper-color"
    style="background-color: #f4f4f4"
  >
    <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill
          type="tile"
          color="#f4f4f4"
          origin="0.5, 0"
          position="0.5,0"
        ></v:fill>
      </v:background>
    <![endif]-->
    <table
      bgcolor="#f4f4f4"
      cellpadding="0"
      cellspacing="0"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
      "
      width="100%"
    >
      <tbody>
        <tr style="border-collapse: collapse">
          <td
            height="100%"
            style="padding: 0; margin: 0; padding-top: 12px"
            valign="top"
          >
            <!--HEADER-->

            <table
              align="center"
              bgcolor="#F4F4F4"
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              style="
                border-collapse: collapse;
                border-spacing: 0px;
                width: 560px;
              "
            >
              <tbody>
                <tr style="border-collapse: collapse">
                  <td
                    align="center"
                    class="padmain"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      align="center"
                      bgcolor="#ffffff"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        border-radius: 24px 24px 24px 24px;
                        max-width: 560px;
                        width: 100%;
                      "
                      width="560"
                    >
                      <tbody>
                        <!-- COVER -->
                        <tr style="border-collapse: collapse">
                          <td
                            align="left"
                            class="padh"
                            style="
                              margin: 0;
                              padding-top: 36px;
                              padding-bottom: 36px;
                              padding-left: 24px;
                              padding-right: 24px;
                            "
                          >
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
                                <!-- CONTENT -->
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- EMAIL FOOTER -->
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
`;
