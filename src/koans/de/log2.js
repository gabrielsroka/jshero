(function(testutil) {

  jshero.koans.add({

    id: 'log2',

    title: 'Variablen loggen',

    lesson: `Nun wollen wir Variablen loggen:

<pre><code>var informatiker = 'Ken Thompson';
console.log(informatiker);</code></pre>

Hier wird die Variable <code>informatiker</code> mit <code>console.log</code> geloggt.
In der Konsole erscheint <code>'Ken Thompson'</code>. Das ist der Wert der Variablen <code>informatiker</code>.`,

    task: `Schreibe eine Funktion <code>logge</code>, die einen Parameter entgegennimmt und diesen Parameter loggt.
Der Aufruf von <code>logge('Ken Thompson')</code> sollte <code>'Ken Thompson'</code> loggen.`,

    hint: `<pre><code>var logge = function(wert) {
  ...
};</code></pre>`,

    solution: `<pre><code>var logge = function(wert) {
  console.log(wert);
};</code></pre>`,

    beforeTests: function() {
      if (typeof logge !== 'undefined') {
        logge = undefined;
      }
    },

    tests: [

      function() {
        return testutil.assert_isFunction('logge');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('logge', 1);
      },

      function() {
        return testutil.assert_functionLogs("logge('Ken Thompson')", 'Ken Thompson');
      },

      function() {
        return testutil.assert_functionLogs("logge('Dennis Ritchie')", 'Dennis Ritchie');
      }

    ]

  });

})(jshero.testutil);