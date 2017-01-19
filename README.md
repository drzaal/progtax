# The Generalized Configurable Progressive Income Tax Calculator
This project is intended to create a generalized, adjustable, mathematically consistent calculator to produce a true continous progressive income tax.

The current system is defined by a limited set of ascending marginal tax bracket categories. You earn under 15K, you're taxed at 14%. Every dollar you earn over 15K but under 50K is taxed at 18%, dollars between 50K and 100k at 21%, etc.

System is reasonable, accessible, and a mathematical eyesore. The worst part is that your end user, the taxpayer, ends up having to consult a complicated table to do their taxes.

A continuous solution for a true progressive income tax is more complicated to implement, but much easier to use because it takes only one number, your income (minus deductions).

In a way though, the true value of this formula is not necessarily its implementation, but the light it shines on just how astronomically unbalanced the distribution of wealth is in the modern economy. To wit, if you take some reasonable best fit solutions to match historic tax codes (the Obama solution, the Bush solution, the Clinton solution), and then extrapolate the curve to the eschelon of upper income earners, the resultant tax rate is significantly higher than politics or pragmatism would allow.

First pass, rules

1. If you earn 0 dollars, your tax rate should be 0 percent.
2. If you make infinity dollars, your marginal tax rate approaches a limit of 100% and your after tax income reaches an absolute defined maximum. 
3. For any income less than infinity dollars, it is always true you will keep more money if you earn more money.

Why? Well if you earn 0 dollars, you need every penny you earn.
If you earn too much, society will no longer benefit from paying you more. We want to discourage the absolute concentration of wealth into the hands of a single person.
However, we never want to punish someone for earning more. It will ALWAYS be true that earning more means keeping more.

Communism! You cry. Unfair! You extort. Yea well gobble on it buddy. Capitolism requires two things, supply and demand. And if our country's money is no longer available to a broad middle class, there'll be plenty of supply but not an ounce of demand. Plus bruh, math doesn't lie.

Okay, so we've proposed this sweet solution and wallstreet is freaking out. The institutional trust fund wealthocracy is up in arms. Talk radio is foaming at the mouth.

And you know what? This is America. We just don't do Socialism here. For better or worse, we do love our robber billionaires, it's part of the dream. Part of the story and promise of American opportunity. And let's be honest, the numerical reality of this system would be the end of the super-rich, and we shouldn't be in this to force a political agenda on folks.

So to make things a little less ideological, we will introduce a new parameter. Maximum allowable tax rate, which removes the social justice hammer while preserving the principles of the tax rate. New Rule:

4. The Maximum tax limit is no longer 100% at infinity, but is configurable.

So here's our formula: Tax = Income * Maximum_Tax * (Income)^(p)/(Income^p + Rate^-p)

Where p is the 'Progressivity Index'. It is a measure of how far the burden of taxation is shifted to upper income earners.
Rate adjusts the overall rate of taxation for all earners.
Another way to describe these two parameters would be: *balance* and *burden*

But the truth is that our solution for the Rate parameter is pretty unreasonable, largely because it should be tied to the value of the currency in order to turn into sensible numbers. So here I am going to tie it to a particular income: **$1,000,000.00**

So here's our final formula: Tax = Income * Maximum_Tax * (Income)^(p)/(Income^p + (Rate/1e6)^-p)

Let's show a final example:

Balance = 0.245
Burden = 25%
Maximum Tax rate 66%

And here are our effective tax rates!
```
Total Income		Effective Rate
$10,000 			12.46%
$100,000 			19.16%
$1,000,000 			27.60%
$10,000,000 		36.85%
$100,000,000	 	45.51%
$1,000,000,000 		52.55%
$10,000,000,000		57.61%
```

So we approach, but will never reach, the 2/3 tax rate. Taxes are low for broke folks, reasonable for the middle class, and honestly a bit lower in the range between stupid rich, and filthy abominably rich.
