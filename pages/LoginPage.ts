import { Locator, Page, expect } from "@playwright/test"
import { Common } from "./common";

export class LoginPage extends Common {
    readonly popupUserNameField: Locator;
    readonly pageUserNameField: Locator;
    readonly popupPasswordField: Locator;
    readonly pagePasswordField: Locator;
    readonly signInBtn: Locator;
    readonly logInBtn: Locator;
    readonly alertBox: Locator;

    constructor(readonly page: Page) {
        super(page);
        this.page = page;
        this.popupUserNameField = this.page.locator('input[name="username"]');
        this.popupPasswordField = this.page.locator('input[name="password"]');
        this.pageUserNameField = this.page.locator('input[name="usernameInOrderPayment"]');
        this.pagePasswordField = this.page.locator('input[name="passwordInOrderPayment"]');
        this.signInBtn = this.page.getByRole('button', { name: 'SIGN IN' });
        this.logInBtn = this.page.getByRole('button', { name: 'LOGIN' });;
        this.alertBox = this.page.locator('label[id="signInResultMessage"]');

    }

    async popupLogin(username: string, password: string) {
        await this.userIcon.click();
        await expect(this.signInBtn).toBeDisabled();
        await this.popupUserNameField.click();
        await this.popupUserNameField.fill(username);
        await this.popupPasswordField.click();
        await this.popupPasswordField.fill(password);
        await expect(this.signInBtn).toBeEnabled();
        await this.signInBtn.click();
        await expect(this.userNameView).toHaveText(username);
    }

    async pageLogin(username, password){
        await expect(this.logInBtn).toBeDisabled();
        await this.pageUserNameField.click();
        await this.pageUserNameField.fill(username);
        await this.pagePasswordField.click();
        await this.pagePasswordField.fill(password);
        await expect(this.logInBtn).toBeEnabled();
        await this.logInBtn.click();
        await expect(this.userNameView).toHaveText(username);
    }

    async invalidLogin(username: string, password: string){
        await this.userIcon.click();
        await expect(this.signInBtn).toBeDisabled();
        await this.popupUserNameField.click();
        await this.popupUserNameField.fill(username);
        await this.popupPasswordField.click();
        await this.popupPasswordField.fill(password);
        await expect(this.signInBtn).toBeEnabled();
        await this.signInBtn.click();
        await expect(this.alertBox).toContainText('Incorrect user name or password.');
    }

}