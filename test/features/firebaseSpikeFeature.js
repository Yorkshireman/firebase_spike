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
});