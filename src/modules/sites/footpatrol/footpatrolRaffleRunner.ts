import puppeteer from "puppeteer";
import logger from "../../../utils/logger";
import webhook from "../../../utils/webhook";

const footpatrolRaffleRunner = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  logger.info("Beginning raffle entry...");
  try {
    await page.goto(
      "https://footpatrol.typeform.com/to/vkCSBNQz?awc=5824_1675241408_fc55d05ed9db4f33675e6daf8386c2b9"
    );

    await page.waitForSelector(
      "#root > main > div.BaseStyle-sc-__sc-tbmthd-0.iywTnN > div > div.layout__LayoutContent-sc-35hvts-1.ittZhY > div.AnimateStyled-sc-__sc-nw4u3g-0.fZIsJU > div > section > div.Root-sc-__sc-1ndopc5-3.kfUkHN > div > div > div > div > div.InlineButtonWrapper-sc-__sc-1ndopc5-9.jrQmF > div:nth-child(1) > div > div > button"
    );

    await page.keyboard.press("Enter");

    // enter name
    await page.type(
      "#block-01F9E4G3B7XM1M8K8EYM000CCV > div > div > div > div > div > div > div > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div.InputWrapper-sc-__sc-26uh88-1.iLBPjJ > input",
      "test name"
    );

    await page.keyboard.press("Enter");

    //enter email
    await page.type(
      "#block-01F9E4G3BR1X0BVXVS6H5HGCD2 > div > div > div > div > div > div > div > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div.InputWrapper-sc-__sc-26uh88-1.iLBPjJ > input",
      "test@name.com"
    );

    await page.keyboard.press("Enter");

    //enter mobile number
    await page.type("#pkzCqYDDEqka", "07550124112");

    //enter instagram user
    await page.type(
      "#block-7e8adfbd-f711-41bf-8ab0-56f51f5fd73b > div > div > div > div > div > div > div > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div.InputWrapper-sc-__sc-26uh88-1.iLBPjJ > input",
      "test"
    );

    await page.keyboard.press("Enter");

    //enter city of residence
    await page.type(
      "#block-352c9a8a-4c2d-4753-ac43-9453dce429a5 > div > div > div > div > div > div > div > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div.InputWrapper-sc-__sc-26uh88-1.iLBPjJ > input",
      "London"
    );

    await page.keyboard.press("Enter");

    // enter shoe size
    // this will open dropdown menu
    await page.$eval(
      "#block-8660326c-30fb-430c-9b63-38725b1bfa62 > div > div > div > div.ContentWrapper-sc-__sc-1esu8nk-4.bfAttW > div > div > div > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div:nth-child(1) > div > div.InputWrapper-sc-__sc-1w8q90m-3.dfhdVO > button",
      (elem) => elem.click()
    );

    //still yet to find solution to select within the dropdown
    await page.$eval(
      "#dropdown-8660326c-30fb-430c-9b63-38725b1bfa62-R6SWj1oypGLuO3ji-option-3 > div.ChoiceContent-sc-__sc-1r651ck-0.erQwZM",
      (elem) => elem.click()
    );

    // enter the captcha, seems to be static value
    // TODO: scrape site for the value and automatically enter it
    await page.type(
      "#block-af25688e-f634-47c5-b974-8d73c05ab61d > div > div > div > div > div > div > div > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div.InputWrapper-sc-__sc-26uh88-1.iLBPjJ > input",
      "fooTP4TRoL"
    );

    //T&Cs

    await page.$eval(
      "#block-cd167302-ef4e-4f15-8233-a5d06020ca12 > div > div > div > div > div > div > fieldset > div.SpacerWrapper-sc-__sc-4rs8xl-0.kOpjPh > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div.ChoiceContent-sc-__sc-1r651ck-0.cFezUN",
      (elem) => elem.click()
    );

    if (await page.waitForNavigation()) {
      logger.info("success");
    }

    webhook("FootPatrol", "", "test@gmail");
  } catch (err) {
    logger.error("Unable to complete raffle entry.", err);
    // await browser.close();
  }
};

footpatrolRaffleRunner();

export default footpatrolRaffleRunner;
