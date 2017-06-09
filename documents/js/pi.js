//calculate pi to the nth term

function pi_nth(n) {
	function arctan(x, n) {
		function odd_n(n) {
			return 2 * n + 1;
		}
		total = 0;
		while (n >= 0) {
			if (n % 2 == 0) {
				total += Math.pow(x, odd_n(n)) / odd_n(n);
			} 
			else {
				total -= Math.pow(x, odd_n(n)) / odd_n(n);
			}
			n -= 1;
		}
		return total;
	}
	return 16 * arctan(1 / 5, n) - 4 * arctan(1 / 239, n);
}

function alertString(string) {
	document.writeln(string);
}