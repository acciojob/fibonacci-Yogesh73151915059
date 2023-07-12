function fibonacci(num) {
// your code here
	let f=0;
	let s=1,sum=0;
	for(let i=2;i<num;i++){
		sum=f+s;
		f=sum;
		s=i;
	}
	return sum;
}

module.exports = fibonacci;
