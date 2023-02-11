import puppeteer from "puppeteer";
import logger from "../../../utils/logger";
import webhook from "../../../utils/webhook";

const afewRaffleRunner = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  logger.info("Beginning raffle entry...");
  try {
    await page.goto(
      "https://en.afew-store.com/products/air-jordan-wmns-4-retro-white-oil-green-dark-ash-neutral-grey"
    );

    await page.click(
      "#product > div.product__content > div.product__actions > button"
    );

    logger.info("Product form found.");

    if (await page.waitForNavigation()) {
      logger.info("success");
    }

    webhook("AFEW", "", "test@trial.com");
  } catch (err) {
    logger.error("Unable to complete raffle entry.", err);
    await browser.close();
  }
};

export default afewRaffleRunner;
