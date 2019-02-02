var numJewelsInStones = function(J, S) {
	let jew = 0;
	for (let i=0; i<S.length; i++) {
if(J.indexOf(S[i]) !== -1) {
			 jew++;
	 }
	}
    return jew;
};