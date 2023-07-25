1: 10 + 036 ?
2: if (Boolean('false')) { ... } else { ... }
3: '1' + 1 - '1'
4: alert(a); if (false) { var a = 1 }
5: (function() { x = y = 0; })(); console.log(x, y)?
6: console.log(false == '0', true == 'true')?
7: [3,2,5,11].sort()[0]
8: console.log(3 > 2 > 1, 3 < 2 < 1)
9: a = null; if ('0') { a = 10 } else { a = 20 }
10: (true + true) * (true + true) - true
11: console.log(NaN == NaN, NaN == !NaN)
12: typeof typeof 0x10
13: [1, 2, 3] + [4, 5, 6]
14: !5 + !5
15: console.log(1 + / + + + / + 1)
16: console.log([] == [], [] == ![])
17: '' - - ''
18: (function(){alert(window); var window = window})();
19: console.log('3' -+-+-+ '1')
20: console.log(typeof [], typeof null)
21: foo = [0]; console.log(foo == !foo, foo == foo)
22: console.log(9999999999999999)
23: function f(a = true){ alert(a) }; f(null)
24: console.log(typeof null, null instanceof Object)
25: console.log('ba' +- 'nan')?
26: localStorage[0]=false; if(localStorage[0]) { ... } else { ... }
27: '99.99' + 10 - 10
28: console.log([null] == '', [null] == 0)
29: Number.MIN_VALUE > 0, Number.MIN_VALUE < 0
30: Math.pow(NaN, 0)
31: '\/'.length
32: Math.max() > Math.min(), Math.max() < Math.min()
33: typeof Object, typeof Object()
34: parseFloat('Infinity'), parseInt('Infinity')
35: "10" > "5", "60" < "5"
36: ['1', '7', '11'].map(parseInt);
37: a = true; a++; a ?
38: 'hello 😂'.split('').reverse().join('')
39: typeof document.all // document.all - []HTMLAllCollection
40: a = new Number(); typeof a; a++; typeof a; console.log(a);
41: 'a'; setTimeout(() => 'b', 0); 'c';
42: new Array() == false, new Array(1) == false
43: null == 0, null >= 0
44: +[]+[].length (+[]+[]).length
45: f(x){arguments[0] = "hi";return x;} f(); f(1);
46: Number({}), Number([])
47: [null].length, [null].toString().length
48: if (function f() {}) {typeof f}
49: JSON.stringify("production");
50: a={}; b={1:1}; c={2:2}; a[b]=111; a[c]=222; a[b] ?
51: (Number.MAX_VALUE - 1) < Number.MAX_VALUE, (Number.MAX_VALUE - 1) > Number.MAX_VALUE
52: typeof +"", typeof -"foo"
53: console.log(123) === 123, console.log(123) === undefined
54: [,,,].length
55: [, a, b, c] = 'foo'; a == b; a == c
56: 42.888.toFixed(2)
57: ![0][1] == [1][0], [0][1] == [1][!0]
58: [] > [], [] >= []
59: a = 10; if (a = 5) { b = 0 } else { b = 1 }
60: (+!'' == !''), (+!'' + !'')
61: 1/0, 1//0
62: r = new RegExp('A', 'gi'); r.test('A'); r.test('A');
63: "JavaScript" > "Java", "1" > "A"
64: ++[0][0], ++[[]][+[]]
65: {} == {}, !{} == !{}
66: "".split("").length, "".split(" ").length
67: f() {if(!f.a) f.a=1; return f.a++;}; f()+f()*f()
68: ! + 0, ! + 1
69: null + 0
70: [] + []
71: '' && -0
72: parseInt(0.0000005)
73: '' - 1
74: +0 === -0, Object.is(+0, -0)
75: setTimeout(() => console.log('called'), Infinity); Время вызова?
76: parseInt(null, 24), parseInt(NaN, 24)
77: (3.14 + 1e20) - 1e20, 3.14 + (1e20 - 1e20)
78: b = []; (b?.length) (b?length:false)
79: 0 == ['0']['0'], 0 == ['0']['0']['0']
80: (0.1).toFixed(20)