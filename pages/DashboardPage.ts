import { Locator, Page, expect } from "@playwright/test"
import { Common } from "./common";

export class DashboardPage extends Common {
    readonly sectionTile: Locator;
    readonly headingSection: Locator;
    readonly productTile: Locator;
    readonly addToCart: Locator;
    readonly checkoutBtn: Locator;

    constructor(readonly page: Page) {
        super(page);
        this.page = page;
        this.sectionTile = this.page.locator('//div[@class="rowSection"]//span');
        this.headingSection = this.page.getByRole('heading');
        this.productTile = this.page.locator('//a[@class="productName ng-binding"]');
        this.addToCart = this.page.getByRole('button', { name: 'ADD TO CART' });
        this.checkoutBtn = this.page.locator('button[name="check_out_btn"]');
    }

    async checkout(section: string, itemName: string) {
        await this.sectionTile.filter({ hasText: section.toUpperCase() }).first().click();
        await expect(this.headingSection.filter({ hasText: section.toUpperCase() }).first()).toBeVisible();
        await this.productTile.filter({ hasText: itemName }).first().click();
        await expect(this.headingSection.filter({ hasText: itemName.toUpperCase()}).first()).toBeVisible();
        await this.addToCart.click();
        await expect(this.checkoutBtn).toBeVisible();
        await this.checkoutBtn.click();
    }

}