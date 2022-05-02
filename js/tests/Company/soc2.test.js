const puppeteer = require('puppeteer')
const soc2 = require('../../framework/Company/soc2')

test('SOC 2 Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(soc2.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(soc2.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('SOC 2')

    await browser.close();
})
