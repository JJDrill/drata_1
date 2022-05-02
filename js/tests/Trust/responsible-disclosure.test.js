const puppeteer = require('puppeteer')
const rd = require('../../framework/Trust/responsible-disclosure')

test('Responsible Disclosure Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(rd.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(rd.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Responsible Disclosure Policy')

    await browser.close();
})
