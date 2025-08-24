import { test, expect } from '@playwright/test';
import { generateUsername } from '../utils/RandomUUIDGenerator';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PaymentPage } from '../pages/PaymentPage';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let paymentPage: PaymentPage;


let section = 'SPEAKERS'
let itemName = 'Bose Soundlink Bluetooth Speaker III'
let existingUser = 'firstTester';
let password = 'Tester@123';



test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' });

  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
  paymentPage = new PaymentPage(page);
});
test.describe('Add a product to the cart and start checkout; Both logged-out redirection to login and direct payment flow for logged-in users.', () => {
  test('Logged in - Add a product to cart, checkout , and pay', async ({ page }) => {

    await loginPage.popupLogin(existingUser, password);
    await dashboardPage.checkout(section, itemName);
    await paymentPage.safePay();
    await loginPage.logout();

  })

  test('Not Logged in - Add a product to cart, checkout , and pay', async ({ page }) => {
        
    await dashboardPage.checkout(section, itemName);
    await loginPage.pageLogin(existingUser, password);
    await paymentPage.safePay();
    await loginPage.logout();
    
  })
});