const url = "http://leaftaps.com/opentaps/control/login";

// Split the URL by "/" and get the parts
const parts = url.split('/');

// Find and print "login" and "opentaps"
const login = parts[parts.length - 1];
const opentaps = parts.find(part => part === "opentaps");

console.log("login:", login);       // Output: login
console.log("opentaps:", opentaps); // Output: opentaps