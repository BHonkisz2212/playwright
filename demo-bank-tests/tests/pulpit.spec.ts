import { test, expect } from "@playwright/test";

test.describe("Pulpit tests", () => {
  const userId = "testerLO";
  const userPassword = "12345678";
  const receiverId = "2";

  test.beforeEach(async ({ page }) => {
    const url = "https://demo-bank.vercel.app/";
    await page.goto(url);
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();
  });

  test("quick payment with correct data", async ({ page }) => {
    //Arrange
    const expectedTransferReceiver = "Chuck Demobankowy";
    const transferAmount = "120";
    const transferTitle = "Pizza";

    //Act:
    //await page.getByTestId('login-input').click();//niepotrzebny, bo fill załatwia sprawę

    await page.locator("#widget_1_transfer_receiver").selectOption(receiverId);
    await page.locator("#widget_1_transfer_amount").fill(transferAmount);
    await page.locator("#widget_1_transfer_title").fill(transferTitle);
    //await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.locator("#execute_btn").click();
    await page.getByTestId("close-button").click();

    //await page.getByRole('link', { name: 'Przelew wykonany! Chuck Demobankowy - 120,00PLN - Zwrot środków' }).click();

    //Assert
    await expect(page.locator("#show_messages")).toHaveText(
      `Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`,
    );
  });

  test("quick top-up phone", async ({ page }) => {
    //Arrange
    const phoneNumber = "500 xxx xxx";
    const topUpAmount = "12,00";

    await page.locator("#widget_1_topup_receiver").selectOption(phoneNumber);
    await page.locator("#widget_1_topup_amount").fill(topUpAmount);
    await page.locator("#uniform-widget_1_topup_agreement span").click();
    await page.getByRole("button", { name: "doładuj telefon" }).click();
    await page.getByTestId("close-button").click();

    await expect(page.locator("#show_messages")).toHaveText(
      `Doładowanie wykonane! ${topUpAmount}PLN na numer ${phoneNumber}`,
    );
    //await page.getByRole('link', { name: 'Doładowanie wykonane! 12,00PLN na numer 500 xxx xxx' }).click();
  });
});
