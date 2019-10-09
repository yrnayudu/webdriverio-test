class HomePage {
  open() {
    browser.url('/');
  }

  get buttonLogin() {
    return $('*=Login');
  }


  clickLogin() {
    console.log('****'+ this.buttonLogin.getText())
    this.buttonLogin.click();
  }
}

export const homePage = new HomePage();
