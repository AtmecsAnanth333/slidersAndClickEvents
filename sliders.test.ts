import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
        await page.click('//*[@id="post-399"]/div/div[3]/div/div[1]/div[3]/div/a')
        await page.dblclick('//*[@id="slideMe"]')

        let isCompleted=false;
        const s=await page.$('//*[@id="slideMe"]')

if(s){
    let srcBound= await s.boundingBox();
    if(srcBound){
        while(!isCompleted){
            await page.mouse.move(srcBound.x +srcBound.width/2,srcBound.y +srcBound.height/2)
            await page.mouse.down();
            await page.mouse.move(srcBound.x+50,srcBound.y+srcBound.height/2)
            await page.mouse.up()
            isCompleted=true;
        }
        console.log('The value is')
        console.log(await page.textContent('//*[@id="post-2871"]/div/div[3]/p[2]'))
        
        await page.pause()
    }
}
    
    })
