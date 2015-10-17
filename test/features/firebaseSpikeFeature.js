describe('Firebase Spike', function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);

  var nameBox = element(by.id('nameInput'))
  var messageBox = element(by.id('messageInput'))
  var messagesDiv = element(by.id('messagesDiv'))

	beforeEach(function() {
   	browser.ignoreSynchronization = true;
    browser.get('http://localhost:8080/index.html');
  });
  
  afterEach(function() {
  	browser.ignoreSynchronization = false;
  })

  it('has a name input box', function() {
    var expect = chai.expect;
    expect(element(by.id('nameInput')).isPresent()).toBe(true);
  });

  it('has a message input box', function() {
  	expect(element(by.id('messageInput')).isPresent()).toBe(true);
  })

  it('user can write messages', function() {
    var expect = chai.expect;

    nameBox.sendKeys('Andy');
    messageBox.sendKeys('message');

    messageBox.sendKeys(protractor.Key.ENTER);

    expect(messagesDiv.getText()).to.eventually.contain('Andy');
    expect(messagesDiv.getText()).to.eventually.contain('message');
  })
});