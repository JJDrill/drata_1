const puppeteer = require('puppeteer')
const press = require('../../framework/Company/press')

test('Press Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(press.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(press.about_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('In The Press')

    await browser.close();
})
