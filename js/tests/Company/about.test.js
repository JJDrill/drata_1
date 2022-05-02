const puppeteer = require('puppeteer')
const pricing = require('../../framework/Resources/pricing')

test('Contact Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pricing.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(pricing.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Pricing Plans')

    await browser.close();
})
