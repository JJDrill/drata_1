const puppeteer = require('puppeteer')
const security = require('../../framework/Trust/security')

test('Security Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(security.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(security.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Security at Drata')

    await browser.close();
})
