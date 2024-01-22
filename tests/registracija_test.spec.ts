import { test, expect } from '@playwright/test';

test('creating account test', async ({ page }) => {
  await page.goto('https://online.idea.rs/');

  await page.getByRole('link', { name: 'Registracija' }).click();

  await page.getByLabel('Ime*:', { exact: true }).fill('Aleksandar');
  await page.getByLabel('Prezime*:').fill('Cumic');
  await page.getByPlaceholder('npr. +').fill('+381641469661');
  await page.getByLabel('Datum rođenja:').selectOption('13');
  await page.locator('#birthMonth').selectOption('4');
  await page.locator('#birthYear').selectOption('2003');
  await page.getByLabel('E-mail*:').fill('aleks7ndar@gmail.com');
  await page.getByLabel('Potvrda e-maila*:').fill('aleks7ndar@gmail.com');
  await page.getByLabel('Šifra*:').fill('A123456!');
  await page.getByLabel('Potvrda šifre*:').fill('A123456!');
  await page.getByLabel('Grad - Opština:*').selectOption('BG - ČUKARICA');
  await page.getByLabel('Ulica:*').fill('Blagoja Parovica');
  await page.getByLabel('Kućni broj:*').fill('114');
  await page.getByText('*Upoznat/a sam s opštim').click();
  await page.getByRole('button', { name: 'Potvrdite registraciju' }).click();

});