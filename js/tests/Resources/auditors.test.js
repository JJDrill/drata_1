const puppeteer = require('puppeteer')
const auditors = require('../../framework/Resources/auditors')

test('Auditors Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(auditors.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(auditors.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('Streamline Audits')

    await browser.close();
})
