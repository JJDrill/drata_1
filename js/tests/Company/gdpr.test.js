const puppeteer = require('puppeteer')
const gdpr = require('../../framework/Company/gdpr')

test('GDPR Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(gdpr.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(gdpr.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('GDPR')

    await browser.close();
})
