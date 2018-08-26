jshero.koans.add({

  id: "regex2",

  title: "Regex: Beliebiges Zeichen",

  lesson: `Neben einfachen Zeichenliteralen kennen reguläre Ausdrücke eine
Reihe von Zeichen mit besonderer Bedeutung, sogenannte Metazeichen.
Ein solches Metazeichen ist der Punkt. Er steht für genau ein beliebiges Zeichen: 

<pre><code>var t1 = /M.ier/.test("Maier");
var t2 = /M.ier/.test("Die Meierei");
var t3 = /M.ier/.test("Baier");
var t4 = /M.ier/.test("Mier");
var t5 = /M.ier/.test("M-ier");</code></pre>

Unser regulärer Ausdruck ist hier <code>/M.ier/</code>. Er steht für alle Zeichenketten, die mit
M beginnen, ein beliebiges zweites Zeichen besitzen und anschließend mit ier enden. Damit können
wir testen, ob ein String Maier oder Meier enthält. Das ist in den ersten beiden Beispielzeilen der Fall.
<code>t1</code> und <code>t2</code> sind also <code>true</code>. Der String <code>"Baier"</code> enthält
kein Pattern, dass mit M beginnt. <code>t3</code> ist <code>false</code>.
Auch <code>t4</code> ist <code>false</code>, da zwischen M und ier genau ein Zeichen liegen muss.
Das ist hier nicht der Fall. Da der Punkt für jedes beliebige Zeichen steht, trifft <code>"M-ier"</code>
auch auf unser Pattern zu. <code>t5</code> ist <code>true</code>.
<br><br>
Natürlich können wir den Punkt auch mehrmals in einem Pattern verwenden.
<code>/H..s/</code> steht für alle Zeichenketten, die mit H beginnen, anschließend zwei beliebige Zeichen
besitzen und mit s enden. "Hans" und "Haus" treffen auf dieses Pattern zu, "His" und "Heros" nicht.`,

  task: `Schreibe eine Funktion <code>pruefe</code>, die feststellt, ob ein String zwei in
einfache Anführungszeichen eingeschlossene Zeichen besitzt.  
<code>pruefe("'Ja'")</code> sollte <code>true</code> und
<code>pruefe("'Was'")</code> sollte <code>false</code> ergeben.`,

  beforeTests: function() {
    pruefe = undefined;
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('pruefe');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('pruefe', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("\'Ja\'")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("-\'Oh\'-")', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("\'A\'")', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('pruefe("\'Was\'")', false);
    }

  ]

});