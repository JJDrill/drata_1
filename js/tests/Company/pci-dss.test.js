const puppeteer = require('puppeteer')
const pci = require('../../framework/Company/pci-dss')

test('PCI-DSS Page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pci.url);

    // check for any page errors
    page.on('error', async(err) => {
        expect(err).toBe('')
    });
    page.on('pageerror', async(err) => {
        expect(err).toBe('')
    });

    // Check page content
    const page_header = await page.$(pci.text_header)
    const text = await (await page_header.getProperty('textContent')).jsonValue()
    expect(text).toContain('PCI DSS')

    await browser.close();
})
