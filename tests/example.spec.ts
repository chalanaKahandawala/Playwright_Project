import { test, expect, defineConfig, devices} from '@playwright/test';

async function runTest(page: page, linkHref: string): Promise<void> {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);

  // Click on the link 
  //await page.click('a[href="/challenging_dom"]');
  const linkSelector = `:text("${linkHref}")`;
  const linkElement = await page.$(linkSelector);
  await linkElement.click();

  //Expect the h3 element text has a substring(Challenging DOM)
  await expect(page.getByRole('heading', { name: linkHref })).toBeVisible();

  //Close the browser
  await page.close();
}

test('Verify launching Challenging DOM page', async ({ page }) => {
  await runTest(page,'Challenging DOM');
});

test('Verify launching Drag and drop page', async ({ page }) => {
  await runTest(page,'Drag and Drop');
});

test('Verify launching Checkboxes page', async ({ page }) => {
  await runTest(page,'Checkboxes');
});

test('Verify launching Broken Images page', async ({ page }) => {
  await runTest(page,'Broken Images');
});

test('Verify launching Dynamic Content page', async ({ page }) => {
  await runTest(page,'Dynamic Content');
});