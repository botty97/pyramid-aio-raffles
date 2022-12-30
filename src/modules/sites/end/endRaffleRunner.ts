import puppeteer from "puppeteer";
import logger from "../../../utils/logger.js";

const endRaffleRunner = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  logger.info("Beginning raffle entry...");
  try {
    await page.goto(
      "https://launches.endclothing.com/product/new-balance-m1906dd-m1906dd"
    );

    await page.waitForSelector(
      "#app-container > div.sc-372s6t-0.eyrvoT > div.sc-372s6t-2.hFoFVl > button > div > span"
    );

    await page.$eval(
      "#app-container > div.sc-372s6t-0.eyrvoT > div.sc-372s6t-2.hFoFVl > button > div > span",
      (elem) => elem.click()
    );

    await page.$eval(
      "#app-container > div.sc-1eymrxb-0.eqfGZp > div > div > div > div.sc-z9yvqd-3.fXQKaz > div.sc-z9yvqd-2.epXxfi > button",
      (elem) => elem.click()
    );

    //login
    await page.type("#email", "connor.botterill@yahoo.co.uk");
    await page.click(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-2zw5y3-2.lfEYMW > div > div > div > div > form > div.sc-1vpyvai-1.hHyGJa > button"
    );
    await page.waitForSelector("#password");
    await page.type("#password", "Chewbacca123");
    await page.click(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-2zw5y3-2.lfEYMW > div > div > div > div > form > div.sc-1vpyvai-1.hHyGJa > button"
    );

    //complete entry information
    await page.waitForSelector(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-2zw5y3-2.lfEYMW > div > div > div > div:nth-child(1) > div.sc-1p4gaia-0.edjMjR > button.sc-dld20s-0.efIRgB > div > div"
    );

    await page.$eval(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-2zw5y3-2.lfEYMW > div > div > div > div:nth-child(1) > div.sc-1p4gaia-0.edjMjR > button.sc-dld20s-0.efIRgB > div > div",
      (elem) => elem.click()
    );

    //shoe size - work to be done
    await page.click(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-69kooh-0.inWVVL > div > div > div.sc-1ibo6z3-0.iDoMuk > div > button:nth-child(6)"
    );

    await page.click(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-69kooh-0.inWVVL > div > div > div.sc-1vpyvai-1.hHyGJa > button"
    );

    await page.click(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-2zw5y3-2.lfEYMW > div > div > div > div:nth-child(1) > div.sc-f369zt-3.dvBmeP > button"
    );

    //if i understand button
    await page.click(
      "#__next > div.sc-2zw5y3-3.gFBtiH > div > div.sc-2zw5y3-2.lfEYMW > div > div > div > div:nth-child(1) > div.sc-f369zt-3.dvBmeP > button"
    );

    if (page.waitForNavigation()) {
      logger.info("success");
    }
  } catch (err) {
    logger.error("Unable to complete raffle entry.", err);
    // await browser.close();
  }
};

export default endRaffleRunner;
