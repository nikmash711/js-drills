'use strict';
function beyond(num) {
  if (!isFinite(num)) {
    console.log('And beyond');
	} 
	if (num > 0 && isFinite(num)) {
		console.log('To infinity');
	}
	if (num < 0 && isFinite(num)) {
		console.log('To negative infinity');
	}
	if (num === 0) {
		console.log('Staying home');
	}
}

// const result = beyond();
// console.log(result); 
beyond(-8);