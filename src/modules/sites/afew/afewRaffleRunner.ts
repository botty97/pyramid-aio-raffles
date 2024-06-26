import puppeteer from "puppeteer";
import logger from "../../../utils/logger";
import webhook from "../../../utils/webhook";

const afewRaffleRunner = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //this needs to be sorted for universal devices
  await page.setViewport({
    width: 1083,
    height: 777,
    deviceScaleFactor: 1,
  });
  logger.info("Beginning raffle entry...");
  try {
    await page.goto(
      "https://en.afew-store.com/products/air-jordan-wmns-4-retro-white-oil-green-dark-ash-neutral-grey"
    );

    await page.evaluate(() => {
      window.scroll(0, 0);
    });

    await page.waitForTimeout(5000);

    await page.click("#onetrust-accept-btn-handler");

    await page.waitForTimeout(2000);

    await page.click(
      "#product-section > header > div > div.row > div.col.col-12.col-lg-4.position-sticky > div.size-picker.mt-2 > ul > li:nth-child(1)"
    );

    logger.info("Size selected.");

    await page.type("#raffle-instagram", "testInsta");

    await page.click("#raffle-terms");

    //enter raffle button
    await page.$eval(
      "#product-section > header > div > div.row > div.col.col-12.col-lg-4.position-sticky > form > div.row > div:nth-child(2) > button",
      (elem) => elem.click()
    );

    logger.info("Proceeding to raffle form...");

    //enter email
    await page.type("#checkout_email", "test@gmail.com");

    //enter shipping

    //firstname
    await page.type("#checkout_shipping_address_first_name", "test");

    //lastname
    await page.type("#checkout_shipping_address_last_name", "test");

    //street address/number
    await page.type("#checkout_shipping_address_address1", "21 random road");

    //city
    await page.type("#checkout_shipping_address_city", "london");

    //postcode
    await page.type("#checkout_shipping_address_zip", "lo2 23e");

    //submit shipping
    await page.click("#continue_button");

    // submit to payment
    await page.click("#continue_button");

    //review order
    await page.click("#continue_button");

    // if (await page.waitForNavigation()) {
    //   logger.info("success");
    // }

    // webhook("AFEW", "", "test@trial.com");
  } catch (err) {
    logger.error("Unable to complete raffle entry.", err);
    await browser.close();
  }
};

afewRaffleRunner();

export default afewRaffleRunner;
