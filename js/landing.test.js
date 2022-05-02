const puppeteer = require('puppeteer')
const lp = require("./framework/landing")

test('Landing Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(lp.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    await expect(page.title()).resolves.toMatch(lp.title)

    const page_header = await page.$(lp.page_heading)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toBe("Put Security and Compliance on Autopilot")

    await browser.close();
})
