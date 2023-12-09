import { getBody } from "./body.js";
import { getButton } from "./components/button.js";
import { getContentCover } from "./components/content-cover.js";
import { getH1 } from "./components/h1.js";
import { getH2 } from "./components/h2.js";
import { getPlainText } from "./components/plain-text.js";
import { getBoldText } from "./components/bold-text.js";
import { getHeader } from "./components/header.js";
import { getRegistrarionLink } from "./components/header-registration-link.js";
import { getPreheader } from "./components/preheader.js";
import { getSpeakersBox } from "./components/speaker-box.js";
import { getSpeaker } from "./components/speaker.js";
import { getFooter } from "./components/footer.js";
import { getSpacer } from "./components/spacer.js";
import { getImage } from "./components/image.js";
import { getSpeakerThesis } from "./components/speaker-thesis.js";
import { getSpeakerNoTheme } from "./components/speaker-no-theme.js";
import { getThemeText } from "./components/theme-text.js";
import { getTableBox } from "./components/table.js";
import { getFooter2 } from "./components/footer2.js";

export const genHTML = (data) => {
  let body = getBody();

  body = body.replace("<!-- PREHEADER -->", getPreheader(data.preheader));
  body = body.replace("<!--HEADER-->", getHeader(data.utm));

  if (data.title && data.title.showLink) {
    body = body.replace(
      "<!-- REGISTRATION LINK -->",
      getRegistrarionLink(data.title.link)
    );
  }

  if (data.cover) {
    body = body.replace(
      "<!-- COVER -->",
      getContentCover(data.cover.source, data.cover.link)
    );
  }

  if (data.content) {
    let content = "";
    data.content.forEach((item) => {
      switch (item.type) {
        case "HEADER_LG": {
          content += getH1(item.text);
          break;
        }
        case "TEXT": {
          content += getPlainText(item.text);
          break;
        }
        case "HEADER_BASE": {
          content += getH2(item.text);
          break;
        }
        case "BUTTON": {
          content += getButton(item.text, item.linkTo);
          break;
        }
        case "TEXT_BOLD": {
          content += getBoldText(item.text);
          break;
        }
        case "TABLE": {
          content += getTableBox(item.curr, item.new);
          break;
        }
        case "SPEAKERS": {
          content += getSpeakersBox();
          let speakers = "";
          item.speakers.forEach((speaker) => {
            switch (speaker.type) {
              case "SPEAKER": {
                speakers += getSpeaker(
                  speaker.img,
                  speaker.fioAndJob,
                  speaker.theme
                );
                break;
              }
              case "SPEAKERTHESIS": {
                speakers += getSpeakerThesis(
                  speaker.img,
                  speaker.fioAndJob,
                  speaker.theme,
                  speaker.thesis
                );
                break;
              }
              case "SPEAKERNOTHEME": {
                speakers += getSpeakerNoTheme(speaker.img, speaker.fioAndJob);
                break;
              }
              case "THEMETEXT": {
                speakers += getThemeText(speaker.text);
                break;
              }
            }
          });

          content = content.replace("<!-- SPEAKERS -->", speakers);
          break;
        }
        case "SPACER": {
          content += getSpacer();
          break;
        }
        case "IMAGE": {
          content += getImage(item.source, item.maxWidth, item.height);
          break;
        }
        case "FOOTER": {
          content += getFooter();
          break;
        }
        default:
          content += "";
          break;
      }
    });

    body = body.replace("<!-- CONTENT -->", content);
  }

  if (data.emailFooter) {
    body = body.replace("<!-- EMAIL FOOTER -->", getFooter2());
  }

  return body;
};
