const puppeteer = require('puppeteer')
const customers = require('../../framework/Resources/customers')

test('Customers Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(customers.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(customers.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Trusted by the Best')

    await browser.close();
})
