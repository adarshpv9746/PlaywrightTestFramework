import { Locator, Page, expect } from "@playwright/test"
import { Common } from "./common";

export class RegisterPage extends Common {

    readonly createAccountLink: Locator;
    readonly createAccountBtn: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly emailField: Locator;
    readonly confirmPassword: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly phoneNumber: Locator;
    readonly countryDropDown: Locator;
    readonly cityField: Locator;
    readonly addressField: Locator;
    readonly stateField: Locator;
    readonly postalCodeField: Locator;
    readonly registerBtn: Locator;
    readonly agreeCheckBox: Locator;




    constructor(readonly page: Page) {
        super(page);
        this.page = page;
        this.createAccountLink = this.page.getByRole('link', { name: 'CREATE NEW ACCOUNT' });
        this.createAccountBtn = this.page.getByRole('heading', { name: 'CREATE ACCOUNT' });
        this.userNameField = this.page.locator('input[name="usernameRegisterPage"]');
        this.emailField = this.page.locator('input[name="emailRegisterPage"]');
        this.passwordField = this.page.locator('input[name="passwordRegisterPage"]');
        this.confirmPassword = this.page.locator('input[name="confirm_passwordRegisterPage"]');
        this.firstName = this.page.locator('input[name="first_nameRegisterPage"]');
        this.lastName = this.page.locator('input[name="last_nameRegisterPage"]');
        this.phoneNumber = this.page.locator('input[name="phone_numberRegisterPage"]');
        this.countryDropDown = this.page.locator('//select[@name="countryListboxRegisterPage"]');
        this.cityField = this.page.locator('input[name="cityRegisterPage"]');
        this.addressField = this.page.locator('input[name="addressRegisterPage"]');
        this.stateField = this.page.locator('//input[@name="state_/_province_/_regionRegisterPage"]');
        this.postalCodeField = this.page.locator('input[name="postal_codeRegisterPage"]');
        this.registerBtn = this.page.getByRole('button', { name: 'REGISTER' });
        this.agreeCheckBox = this.page.locator('input[name="i_agree"]');
        

    }

    async sigUp(username: string, email: string, password: string) {
        await this.userIcon.click();
        await this.createAccountLink.click();
        await expect(this.createAccountBtn).toBeVisible();

        await this.userNameField.click();
        await this.userNameField.fill(username);

        await this.emailField.click();
        await this.emailField.fill(email);

        await this.passwordField.click();
        await this.passwordField.fill(password);

        await this.confirmPassword.click();
        await this.confirmPassword.fill(password);

        await this.firstName.click();
        await this.firstName.fill('first');

        await this.lastName.click();
        await this.lastName.fill('last');

        await this.phoneNumber.click();
        await this.phoneNumber.fill('1234567890');
        
        await this.countryDropDown.click();
        await this.countryDropDown.selectOption({label: "India"});

        await this.cityField.click();
        await this.cityField.fill('city');

        await this.addressField.click();
        await this.addressField.fill('addresss1');

        await this.stateField.fill('State');

        await this.postalCodeField.click();
        await this.postalCodeField.fill('Post123');

        await expect(this.registerBtn).toBeDisabled();

        await this.agreeCheckBox.check();

        await expect(this.registerBtn).toBeEnabled();
        await this.registerBtn.click();
        
        await expect(this.userNameView).toContainText(username);
    }

}