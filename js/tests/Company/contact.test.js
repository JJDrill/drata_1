const puppeteer = require('puppeteer')
const ap = require('../../framework/Company/about')

test('About Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(ap.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(ap.about_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('About Drata')

    await browser.close();
})
