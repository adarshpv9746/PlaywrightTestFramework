import { Locator, Page, expect } from "@playwright/test"
import { Common } from "./common";

export class PaymentPage extends Common {
    readonly orderPaymentHeading: Locator;
    readonly editShippinDetailsLink: Locator;
    readonly nextBtn: Locator;
    readonly choosePaymentBtn: Locator;
    readonly safepayImg: Locator;
    readonly safePayUsername: Locator;
    readonly safePayPass: Locator;
    readonly payNowBtn: Locator;
    readonly paymentConfirmation: Locator;

    constructor(readonly page: Page) {
        super(page);
        this.page = page;
        this.orderPaymentHeading = this.page.getByRole('heading', { name: 'ORDER PAYMENT' });
        this.editShippinDetailsLink = this.page.getByRole('link', { name: 'Edit shipping details' });
        this.nextBtn = this.page.getByRole('button', { name: 'NEXT' });
        this.choosePaymentBtn = this.page.getByText('Choose payment method below');
        this.safepayImg = this.page.getByRole('img', { name: 'Safepay' });
        this.safePayUsername = this.page.locator('input[name="safepay_username"]');
        this.safePayPass = this.page.locator('input[name="safepay_password"]');
        this.payNowBtn =  this.page.locator('button[id="pay_now_btn_SAFEPAY"]');
        this.paymentConfirmation = this.page.getByText("Thank you for buying with Advantage");

        
    }

    async safePay() {
    await expect(this.orderPaymentHeading).toBeVisible();
    await expect(this.editShippinDetailsLink).toBeVisible();
    await this.nextBtn.click();
    await expect(this.choosePaymentBtn).toBeVisible();
    await this.safepayImg.click();
    await this.safePayUsername.fill('safePayUSername');
    await this.safePayPass.fill('Password@01');

    await expect(this.payNowBtn).toBeEnabled();
    await this.payNowBtn.click();
    await expect(this.paymentConfirmation).toBeVisible();
    }

}