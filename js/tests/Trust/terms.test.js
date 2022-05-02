const puppeteer = require('puppeteer')
const terms = require('../../framework/Trust/terms')

test('Terms of Service Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(terms.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(terms.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Terms of Service')

    await browser.close();
})
