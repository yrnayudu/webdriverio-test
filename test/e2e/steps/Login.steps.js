import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import { homePage } from '../pages/Home.page';
import { racingPage } from '../pages/Racing.page';

Given(/^I'm on the login page$/, () => {
    homePage.open()
    homePage.clickLogin()
});

When(/^I log in with username '(.+)' and password '(.+)'$/, (username, password) => {
    loginPage.login(username, password);
});

Then(/^show racing page$/, () => {
    racingPage.atPage()
});

Then(/^show user name '(.+)' on the site$/, (userName) => {
    racingPage.assertLoggedInUser(userName)
});

Then(/^show login error '(.+)'$/, (errorMessage) => {
    loginPage.errorMessage.waitForExist()
    assert.equal(loginPage.errorMessage.getText(), errorMessage)
});
