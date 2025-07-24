const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is now secure
  var suffix = crypto.randomBytes(4).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}