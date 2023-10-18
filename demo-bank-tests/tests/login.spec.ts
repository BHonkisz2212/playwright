import { test, expect } from "@playwright/test";

test.describe("User login to Demobank", () => {
  const userId = "testerLO";
  const userPassword = "12345678";
  const userIncorrectId = "555";
  test.beforeEach(async ({ page }) => {

    await page.goto('/');
  });
  test("login with correct credentials", async ({ page }) => {
    //Arrange

    const expectedUserName = "Jan Demobankowy";

    //Act

    //await page.getByTestId('login-input').click();//niepotrzebny, bo fill załatwia sprawę
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();

    //Assert
    await expect(page.getByTestId("user-name")).toHaveText(expectedUserName);
  });
  test("unsuccesfull login with too short username", async ({ page }) => {
    //Arrange
    const errorLoginId = "error-login-id";

    //Act
    await page.getByTestId("login-input").fill(userIncorrectId);
    await page.getByTestId("login-input").blur();
    await page.getByTestId("password-input").fill(userPassword);

    //Assert
    await expect(page.getByTestId(errorLoginId)).toHaveText(
      "identyfikator ma min. 8 znaków"
    );
  });

  test("unsccesfull login with too short password", async ({ page }) => {
    //Arrange
    const errorLoginPassword = "error-login-password";
    const userIncorrectPassword = "123";

    //Act:
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userIncorrectPassword);
    await page.getByTestId("password-input").blur(); //odwrotność focusa!!!!!!!!!

    //Assert
    await expect(page.getByTestId(errorLoginPassword)).toHaveText(
      "hasło ma min. 8 znaków"
    );
  });
});
