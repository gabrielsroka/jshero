jshero.koans.add({

  id: "bool",

  title: "Boolean",

  lesson: `Another important data type next to strings and numbers are Boolean values. They have only two values:
<code>true</code> and <code>false</code>. You can calculate with Boolean values similar to numbers. JavaScript
has three Boolean operators: <code>&&</code> (and), <code>||</code> (or) and <code>!</code> (not).
<code>&&</code> links two Boolean values. If both values are <code>true</code>, the result is <code>true</code>.
In all other cases it is <code>false</code>. With <code>||</code> the result is <code>true</code>,
if at least one of the two input values is <code>true</code>. If both input values are <code>false</code>,
the result is <code>false</code>. <code>!</code> is applied to a single Boolean value and inverts this value:
<code>!true</code> is <code>false</code> and <code>!false</code> is <code>true</code>.

<pre><code>var x1 = true && false;
var x2 = !x1;
var x3 = x1 || x2;</code></pre>

<code>x1</code> is <code>false</code>,  <code>x2</code> is <code>true</code> and <code>x3</code> is <code>true</code>.`,

  task: `Write a function <code>nand</code> that takes two Boolean values. If both values are <code>true</code>,
the result should be <code>false</code>. In the other cases the return should be <code>true</code>.
The call <code>nand(true, true)</code> should return <code>false</code>. The calls <code>nand(true, false)</code>,
<code>nand(false, true)</code> and <code>nand(false, false)</code> should return <code>true</code>.`,

  beforeTests: function() {
    if (typeof nand !== "undefined") {
      nand = undefined;
    }
  },

  tests: [

    function() {
      return jshero.testutil.assert_isFunction('nand');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('nand', 2);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(true, true)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(true, false)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(false, true)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('nand(false, false)', true);
    }

  ]

});
