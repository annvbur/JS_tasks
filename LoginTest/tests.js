var protractor = require('protractor');

describe('login', function() {
  it('should login', function() {
    browser.driver.get('http://54.191.94.81:81/admin/login/gcc');
    browser.driver.findElement(by.id('exampleInputEmail1')).sendKeys('admin@gcc.com');
    browser.driver.findElement(by.id('exampleInputPassword1')).sendKeys('admin');
    browser.driver.findElement(By.xpath("//button[text() = 'Submit']")).click();
    element(by.css('a[href*="#/users"]')).click();

    element(by.model('model.newUser.firstName')).sendKeys('facing111');
    element(by.model('model.newUser.lastName')).sendKeys('testUser111');
    element(by.model('model.newUser.additionalCompanyField')).sendKeys('company');
    element(by.model('model.newUser.email')).sendKeys('a.nnvbur@rambler.ru')
    element(by.buttonText('Send Invitation')).click();
   
    expect(element(by.binding('content')).isPresent()).toBe(true);

  });

  it('can remove user', function(){
    browser.get('http://54.191.94.81:81/admin/gcc#/users');
    //browser.refresh();
    element.all(by.model('model.userToDelete')).last().sendKeys('facing111 testUser111');
    element(by.buttonText('Remove -')).click();
    element(by.buttonText('Ok')).click();
    expect(element(by.binding('content'))).toEqual('Account removed.');        
  });
});