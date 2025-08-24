import {Locator, Page, expect} from "@playwright/test"

export class Common{
    readonly userIcon: Locator;
    readonly signOutBtn: Locator;
    readonly userNameView: Locator;
    
    constructor(readonly page: Page){
        this.page = page;
        this.userIcon = page.getByRole('link', { name: 'UserMenu' });
        this.userNameView = page.locator('//a[@id="menuUserLink"]//span');
        this.signOutBtn = this.page.getByRole('link', { name: 'Sign out' });
    }

    async logout(){
        this.userIcon.click();
        this.signOutBtn.click();
        await expect(this.userNameView).toBeEmpty();
    }

}