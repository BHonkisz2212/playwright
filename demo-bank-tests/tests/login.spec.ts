import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {


  test('login with correct credentials', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    //await page.getByTestId('login-input').click();//niepotrzebny, bo fill załatwia sprawę
    await page.getByTestId('login-input').fill('testerLO');
    await page.getByTestId('password-input').fill('12345678');
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
  });
  test('unsuccesfull login with too short username', async ({ page }) => {

    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('tester');
    await page.getByTestId('password-input').click()
    await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');
  });
  
  test('unsccesfull login with too short password', async ({ page }) => {//jak chcemy tylko jeden test odpalić, to test.only!

    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testerLO');
    await page.getByTestId('password-input').fill('123');
    await page.getByTestId('password-input').blur()//odwrotność focusa!!!!!!!!!
    await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków');

});   
  });

