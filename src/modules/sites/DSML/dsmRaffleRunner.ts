import puppeteer from "puppeteer";
import logger from "../../../utils/logger";
import webhook from "../../discord/webhook";

const dsmRaffleRunner = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  logger.info("Beginning raffle entry...");
  try {
    await page.goto(
      "https://shop.doverstreetmarket.com/collections/raffle/products/nike-air-jordan-1-low-og-sp-x-travis-scott-dm7866-2"
    );

    await page.click(
      "#product > div.product__content > div.product__actions > button"
    );

    logger.info("Product form found.");

    //wait for form to load and fill out
    logger.info("Filling out entry form...");
    await page.waitForSelector("#drawing-first-name");
    await page.select(
      "#app > div.content-wrapper > div > div > div > div > div > div.drawing__option-group > div > select",
      "US 10"
    );
    await page.type("#drawing-first-name", "test");
    await page.type("#drawing-last-name", "test");
    await page.type("#drawing-email", "test");
    await page.type("#drawing-phone", "test");
    await page.type("#drawing-zip", "test");
    await page.select("#drawing-country", "FR");

    //fill out card details
    logger.info("Entering credit card information...");
    await page.waitForSelector(".ElementsApp.is-empty");

    await page.click("#agreeToTerms");

    if (page.waitForNavigation()) {
      logger.info("success");
    }

    webhook(
      "Dover Street Market",
      "https://i.imgur.com/q3epoXf.png",
      "test@trial.com"
    );
  } catch (err) {
    logger.error("Unable to complete raffle entry.", err);
    await browser.close();
  }
};

export default dsmRaffleRunner;
