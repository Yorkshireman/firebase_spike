describe('Firebase Spike', function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;

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
    expect(element(by.id('nameInput'))).to.exist;
  });

  it('has a message input box', function() {
  	expect(element(by.id('messageInput'))).to.exist;
  });

  it('user can write messages', function() {
    nameBox.sendKeys('Andy');
    messageBox.sendKeys('message');
    messageBox.sendKeys(protractor.Key.ENTER);

    expect(messagesDiv.getText()).to.eventually.contain('Andy');
    expect(messagesDiv.getText()).to.eventually.contain('message');
  })
});