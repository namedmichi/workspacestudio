eval(
	(function (p, a, c, k, e, d) {
		e = function (c) {
			return c.toString(36);
		};
		if (!''.replace(/^/, String)) {
			while (c--) {
				d[c.toString(a)] = k[c] || c.toString(a);
			}
			k = [
				function (e) {
					return d[e];
				},
			];
			e = function () {
				return '\\w+';
			};
			c = 1;
		}
		while (c--) {
			if (k[c]) {
				p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
			}
		}
		return p;
	})(
		"f(6(p,a,c,k,e,d){e=6(c){5 c};8(!''.7(/^/,m)){9(c--){d[c]=k[c]||c}k=[6(e){5 d[e]}];e=6(){5'\\\\i+'};c=1};9(c--){8(k[c]){p=p.7(j l('\\\\b'+e(c)+'\\\\b','g'),k[c])}}5 p}('3.2(\"1 0\")',4,4,'n|o|q|r'.h('|'),0,{}))",
		28,
		28,
		'|||||return|function|replace|if|while||||||eval||split|w|new||RegExp|String|world|hello||log|consol'.split('|'),
		0,
		{}
	)
);
