import { test, expect } from '@playwright/test';

test('buying items test', async ({ page }) => {
  await page.goto('https://online.idea.rs/');

  await page.getByRole('link', { name: 'Prijava' }).click();

  await page.getByPlaceholder('E-mail*').fill('aleks7ndar@gmail.com');
  await page.getByPlaceholder('Šifra*').fill('A123456!');

  await page.getByRole('button', { name: 'Prijavite se' }).click();

  await page.getByRole('button', { name: 'Doručak, kafa i čaj' }).click();

  await page.locator('.heart-icon > g > path').first().click();

  await page.locator('div:nth-child(4) > .inner-proizvod > .add-to-cart').first().click();

  await page.locator('div:nth-child(5) > .inner-proizvod > span > .heart-icon > g > path').first().click();

  await page.locator('div:nth-child(6) > .inner-proizvod > .add-to-cart').first().click();

}); 