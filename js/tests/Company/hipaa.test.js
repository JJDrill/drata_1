const puppeteer = require('puppeteer')
const hipaa = require('../../framework/Company/hipaa')

test('HIPPA Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(hipaa.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(hipaa.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('HIPAA')

    await browser.close();
})
