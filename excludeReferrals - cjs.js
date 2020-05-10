/*
var referrals = [
    'xxx.xxx.xxx'
  ];

var hname = new RegExp('https?://([^/:]+)').exec(referral);
if (hname) { 
    for (var i = referrals.length; i--;) {
        if (new RegExp(referrals[i] + '$').test(hname[1])) {
        return null;
        }
    }
}
return {{Referrer}};
*/

function ref() {
    var referrals = [
        'xxx.xxx.xxx'
    ];

    var referrer = document.referrer;
    console.log('*** referrer: ', referrer);
    var hostname = new RegExp('https?://([^/:]+)').exec(referrer);
    console.log('*** hostname: ', hostname);
    if (hostname) { 
        for (var i = referrals.length; i--;) {
            if (new RegExp(referrals[i] + '$').test(hostname[1])) {
                return null;
                console.log('*** hostname[1]: ', hostname[1]);
                console.log('return: null');
            }
        }
    }
    return referrer;
    console.log('return: ' + referrer);
}