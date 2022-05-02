const puppeteer = require('puppeteer')
const ccpa = require('../../framework/Company/ccpa')

test('CCPA Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(ccpa.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(ccpa.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('CCPA')

    await browser.close();
})
