const puppeteer = require('puppeteer')
const gdprdrata = require('../../framework/Trust/gdprdrata')

test('GDPR Overview Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(gdprdrata.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(gdprdrata.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('General Data Protection Regulation')

    await browser.close();
})
