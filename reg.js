clearStorage();
run().next(5, function(aWindow) {
	navigate('http://mobile.twitter.com/mofigbuul');
}).next(40, function(aWindow) {
	navigate('https://whoer.net/ru');
}).next(0, function() {
	print('Все');
});
