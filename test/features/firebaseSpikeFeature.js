describe('Firebase Spike', function() {

	beforeEach(function() {
   	browser.ignoreSynchronization = true;
    browser.get('http://localhost:8080/index.html');
  });
  
  afterEach(function() {
  	browser.ignoreSynchronization = false;
  })

  it('has a name input box', function() {
    expect(element(by.id('nameInput')).isPresent()).toBe(true);
  });

  it('has a message input box', function() {
  	expect(element(by.id('messageInput')).isPresent()).toBe(true);
  })

  it('user can delete all messages', function() {
    var nameBox = element(by.id('nameInput'))
    var messageBox = element(by.id('messageInput'))
    var messagesDiv = element(by.id('messagesDiv'))
    var clearButton = element(by.id('clearButton'))
    var input = $('#someInput');

    clearButton.click();

    nameBox.sendKeys('Andy');
    messageBox.sendKeys('message');

    input.sendKeys(protractor.Key.ENTER);

    expect(messagesDiv.getText()).to.eventually.contain('Andy');
    expect(messagesDiv.getText()).to.eventually.contain('message');

    clearButton.click();

    expect(messagesDiv.getText()).to.eventually.equal('');
  })
});