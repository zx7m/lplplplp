var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"s",
"se",
"sel",
"sela",
"selam",
"selama",
"selamat",
"selamat m",
"selamat me",
"selamat men",
"selamat meng",
"selamat mengg",
"selamat menggu",
"selamat menggun",
"selamat mengguna",
"selamat menggunak",
"selamat menggunaka",
"selamat menggunakan",
"selamat menggunakan s",
"selamat menggunakan sc",
"selamat menggunakan sc a",
"selamat menggunakan sc an",
"selamat menggunakan sc any",
"selamat menggunakan sc anya",
"selamat menggunakan sc anya m",
"selamat menggunakan sc anya mul",
"selamat menggunakan sc anya mult",
"selamat menggunakan sc anya multi",
"selamat menggunakan sc anya multid",
"selamat menggunakan sc anya multide",
"selamat menggunakan sc anya multidev",
"selamat menggunakan sc anya multidevi",
"selamat menggunakan sc anya multidevic",
"selamat menggunakan sc anya multidevice",
"selamat menggunakan sc anya multidevic",
"selamat menggunakan sc anya multidevi",
"selamat menggunakan sc anya multidev",
"selamat menggunakan sc anya multide",
"selamat menggunakan sc anya multid",
"selamat menggunakan sc anya multi",
"selamat menggunakan sc anya mult",
"selamat menggunakan sc anya mul",
"selamat menggunakan sc anya mu",
"selamat menggunakan sc anya m",
"selamat menggunakan sc any",
"selamat menggunakan sc an",
"selamat menggunakan sc a",
"selamat menggunakan sc",
"selamat menggunakan s",
"selamat menggunaka",
"selamat menggunak",
"selamat mengguna",
"selamat menggun",
"selamat menggu",
"selamat mengg",
"selamat meng",
"selamat men",
"selamat me",
"selamat m",
"selama",
"selam",
"sela",
"sel",
"se",
"s",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}