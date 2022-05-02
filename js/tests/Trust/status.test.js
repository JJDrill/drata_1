const puppeteer = require('puppeteer')
const status = require('../../framework/Trust/status')

test('Status Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(status.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(status.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Status')

    await browser.close();
})
