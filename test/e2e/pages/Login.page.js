import { threadId } from "worker_threads";

class LoginPage {

    get inputUsername() {
        return $('input[placeholder="Username is required"]');
    }

    get inputPassword() {
        return $('input[type=password]');
    }

    get buttonLogin() {
        return $('=Login');
    }

    get errorMessage() {
        return $('div.text-danger');
    }

    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.buttonLogin.waitForEnabled(1000)
        this.buttonLogin.click();
    }
}

export const loginPage = new LoginPage();
