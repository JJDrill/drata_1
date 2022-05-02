const puppeteer = require('puppeteer')
const resources = require('../../framework/Resources/resources')

test('Resources Center Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(resources.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(resources.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Drata Resource Center')

    await browser.close();
})
