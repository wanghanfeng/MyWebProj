/**
 * Created by whf on 17/1/18.
 */


// var aBody = new Array;

// var oNew = new Object();
// aBody.appendChild();


var str = ['A','B','B','A','C'];

var newStr = str.sort();

var trueLen = 0;
for(var i = 0; i < newStr.length; i++){ 
	if (i == (newStr.length-1)) {
		break;
	}
	if (newStr[i] == newStr[i+1]) {
		trueLen++;
	}
}
trueLen = newStr.length - trueLen;

var numWay = 1;
for (var i = 1; i <= trueLen ; i++) {
	numWay = numWay*i;
}


var s = ['1','1','1','1','0','1','1','1','1'];
var maxLen = 1;
var oldLen = 1;
for(var i = 0;i<s.length;i++){
	if (i == (s.length-1)) {
		break;
	}
	if (s[i]!=s[i+1]) {
		maxLen ++;
	} else {
		if (oldLen<maxLen) {
			oldLen = maxLen;
		}
		maxLen = 1;
	}
}
console.log(maxLen);
 