import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
        await page.click('//*[@id="post-399"]/div/div[3]/div/div[1]/div[9]/div/a')
        await page.click('//*[@id="post-3145"]/div/div[3]/div/div/div/div[1]/button')
        console.log('cat sound')

       console.log(await page.locator ('//*[@id="demo"]').textContent())

       console.log(await page.textContent('//*[@id="demo"]'))

       await page.click('//*[@id="post-3145"]/div/div[3]/div/div/div/div[2]/button')
       console.log('dog sound')

       console.log(await page.locator ('//*[@id="demo"]').textContent())

       console.log(await page.textContent('//*[@id="demo"]'))

       await page.click('//*[@id="post-3145"]/div/div[5]/div[1]/button')
       console.log('Pig sound')


       console.log(await page.locator ('//*[@id="demo"]').textContent())

       console.log(await page.textContent('//*[@id="demo"]'))

        await page.click('//*[@id="post-3145"]/div/div[5]/div[2]/button')
        console.log('cow sound')

        console.log(await page.locator ('//*[@id="demo"]').textContent())
        console.log(await page.textContent('//*[@id="demo"]'))


    })