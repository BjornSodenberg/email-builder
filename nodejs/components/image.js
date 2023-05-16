export const getImage = (source, maxWidth = 560, height = 207) => {
    return `
    <tr>
  <td align="center" style="padding: 0px 0px 0px 0px">
    <!--https://xfl.jp/8oc7UG--><a
      href=""
      target="_blank"
      ><img
        alt=""
        src="${source}"
        style="
          border: 0px none;
          width: 100%;
          max-width: ${maxWidth};
          height: ${height};
          display: block;
          margin-bottom: 20px;
          border-radius: 24px 24px 0px 0px;
        "
      />
    </a>
  </td>
</tr>
  
    `;
  };