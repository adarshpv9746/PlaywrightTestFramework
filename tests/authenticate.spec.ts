import { test, expect } from '@playwright/test';
import { generateUsername } from '../utils/RandomUUIDGenerator';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

let loginPage: LoginPage;
let registerPage: RegisterPage;

let username = generateUsername();
let existingUser = 'firstTester';
let incorrectUsername = 'incorrectUser';
let incorrectPassword = 'pass';
let email = username+"@mailinator.com";
let password = 'Tester@123';

test.beforeEach(async({page})=>{
await page.goto('/', { waitUntil: 'load' });

registerPage = new RegisterPage(page);
loginPage = new LoginPage(page);

});

test.describe("Create a new user account, log in, log out, and validate error handling for invalid login attempts.", ()=>{

test('Create a new user account', async ({page}) => {

  await registerPage.sigUp(username, email, password);

});

test('Login with valid credentials and Logout', async ({ page }) => {

  await loginPage.popupLogin(existingUser, password);
  await loginPage.logout();

});

test('Login with invalid credentials', async ({ page }) => {

  await loginPage.invalidLogin(incorrectUsername, incorrectPassword);

});

})