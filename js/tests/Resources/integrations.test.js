const puppeteer = require('puppeteer')
const integrations = require('../../framework/Resources/integrations')

test('Integrations Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(integrations.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(integrations.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Integrations')

    await browser.close();
})
