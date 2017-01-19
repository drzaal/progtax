
class Tax {
	constructor(progressivity, rate){
		this.configure(progressivity, rate)
		this.validate()
	}

	calculate(income) {
		return income * this.m * (Math.pow(income, this.p) /
			(Math.pow(income, this.p) + Math.pow(this.r, -this.p)))
	}

	configure(progressivity, rate, max) {
		this.p = progressivity
		this.r = rate/1e6
		if (!max) max = 1
		if (max > 1) throw new Error("Marginal tax should never exceed 100%")
		this.m = max
	}

	validate() {
		if (this.p <=0 || this.rate <= 0 || this.m <=0 || this.m > 1)
			throw new Error("Invalid tax code")
	}

}

Tax.bestFit = function bestFit(a, b) {
	if (a.income <= 0 // Zero values are meaningless
		|| a.tax <= 0
		|| b.income <= 0
		|| b.tax <= 0
		|| b.income === a.income // 2 Discrete points necessary
		|| b.tax === a.tax
		|| b.tax > b.income // Tax always less than income
		|| a.tax > a.income
		|| (a.tax - b.tax) * (a.income - b.income) <= 0) // Tax must be progressive
	{
		throw new Error("Invalid bounds for tax rates")
	}
	a.rate = a.tax / a.income
	b.rate = b.tax / b.income
	
console.log(a)
console.log(b)
	var r = Math.pow()
	return new Tax()
}

module.exports = Tax
