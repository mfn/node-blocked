
module.exports = function(fn, interval) {
  interval = interval || 1000;
  var start = process.hrtime();

  setInterval(function(){
    var delta = process.hrtime(start);
    var nanosec = delta[0] * 1e9 + delta[1];
    var ms = nanosec / 1e6;
    var n = ms - interval;
    if (n > 0) fn(Math.round(n));
    start = process.hrtime();
  }, interval).unref();
};

