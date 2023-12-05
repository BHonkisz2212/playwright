import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PaymentPage } from '../pages/payment.page';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('Payment tests', () => {
  let paymentPage: PaymentPage;//tu inicjalizujemy, let bo musi dać się nadpisać
  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);//inicjalizacja, a w testach wykorzystanie
    await page.goto('/');
    await loginPage.login(userId,userPassword)
    const pulpitPage = new PulpitPage(page)
    await pulpitPage.sideMenu.paymentButton.click()//2 stopniowe odwołanie

  });

  test('simple payment', async ({ page }) => {
    // Arrange
   
    const transferReceiver = 'Jan Nowak';
    const transferAccount = '12 3456 7890 1234 5678 9012 34568';
    const transferAmount = '222';
    const expectedMessage = `Przelew wykonany! ${transferAmount},00PLN dla Jan Nowak`;

    // Act

    await paymentPage.makeTransfer(transferReceiver, transferAccount, transferAmount)

    // Assert
    await expect(paymentPage.messageText).toHaveText(expectedMessage);
  });
});