const puppeteer = require('puppeteer')
const privacy = require('../../framework/Trust/privacy')

test('Security Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(privacy.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(privacy.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Privacy Policy')

    await browser.close();
})
