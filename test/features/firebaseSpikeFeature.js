describe('Firebase Spike', function() {
  it('has a name input box', function() {
  	browser.ignoreSynchronization = true;
    browser.get('http://localhost:8080/index.html');

    expect(element(by.id('nameInput')).isPresent()).toBe(true);
  });
});