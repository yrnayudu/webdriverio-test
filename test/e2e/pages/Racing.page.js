import { assert } from 'chai';
class RacingPage {

    atPage() {
        browser.waitUntil(() => {return browser.getUrl().includes('/racing')})
    }

    get loggedInUser() {
        return $('ul.justify-content-end');
    }

    assertLoggedInUser(username) {
        console.log(this.loggedInUser.getText())
        assert.include(this.loggedInUser.getText(), username)
    }

}

export const racingPage = new RacingPage();
