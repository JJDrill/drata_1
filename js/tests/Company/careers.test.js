const puppeteer = require('puppeteer')
const careers = require('../../framework/Company/careers')

test('Careers Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(careers.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(careers.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain("Let’s Build")

    await browser.close();
})
