const puppeteer = require('puppeteer')
const iso = require('../../framework/Company/iso27001')

test('ISO-27001 Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(iso.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(iso.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('ISO 27001')

    await browser.close();
})
