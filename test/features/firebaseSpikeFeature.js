describe('Firebase Spike', function() {
  it('has a name input box', function() {
    browser.get('file:///home/andrew/projects/firebase_spike/index.html');

    expect(browser.getTitle()).toEqual('Firebase Spike');
  });
});