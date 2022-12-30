import puppeteer from "puppeteer";
import logger from "../../../utils/logger.js";

const nakedCphRaffleRunner = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  logger.info("Beginning raffle entry...");
  try {
    await page.goto(
      "https://www.nakedcph.com/en/search/bysearchdefinition/1402"
    );
    await page.waitForSelector(
      "#coiPage-1 > div.coi-banner__page-footer > button.coi-banner__accept"
    );
    await page.click(
      "#coiPage-1 > div.coi-banner__page-footer > button.coi-banner__accept"
    );
    //fill out form
    await page.type(
      "#rule-optin-form > input[type=email]:nth-child(4)",
      `test@gmail.com`
    );
    await page.type(
      "#rule-optin-form > input[type=text]:nth-child(6)",
      `testinstagram`
    );
    await page.type(
      "#rule-optin-form > input[type=text]:nth-child(8)",
      `071234123412`
    );
    await page.type(
      "#rule-optin-form > input[type=text]:nth-child(10)",
      `Test`
    );
    await page.type("#rule-optin-form > input[type=text]:nth-child(12)", `Me`);
    await page.type(
      "#rule-optin-form > input[type=text]:nth-child(14)",
      `23 Test Lane`
    );
    await page.type(
      "#rule-optin-form > input[type=text]:nth-child(16)",
      `TE3 ST3`
    );
    await page.type(
      "#rule-optin-form > input[type=text]:nth-child(18)",
      `London`
    );
    await page.type("#cars", "United Kingdom");
    await page.click("#rule-optin-form > input[type=checkbox]:nth-child(23)");
    await page.click("#rule-optin-form > button");
    if (page.waitForNavigation()) {
      logger.info("success");
    }
  } catch (err) {
    logger.error("Unable to complete raffle entry.", err);
    await browser.close();
  }
};

export default nakedCphRaffleRunner;
