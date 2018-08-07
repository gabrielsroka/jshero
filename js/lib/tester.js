if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * TestResult: {
 *   ok {Boolean}, // succesfully or not
 *   logs {Array}, // console.log(firstArgument) logs
 *   e {Exception} // the exception in case of an error
 *   msg {String} // the i18n message
 * }
 */

jshero.tester = (function(koan, log, i18n, LANGUAGE) {

  i18n.setLanguage(LANGUAGE);
  var I18N = i18n.get;

  var testNr = 0;
  var results = [];
  var callback;

  /**
     * Cross Browser global eval. In particular for IE8.
     * By Chris West - MIT Licensed: http://cwestblog.com/2013/03/08/javascript-global-eval/
     * Difference to Chris: Returns undefined if global eval or execScript is not available.
     * The 'setTimeout' return form Chris would not work here without changing our code.
     * See also: http://perfectionkills.com/global-eval-what-are-the-options/
     */
  var globalEval = (function(global, realArray, indirectEval, indirectEvalWorks) {
    try {
      eval('var Array={};');
      indirectEvalWorks = indirectEval('Array') == realArray;
    } catch (err) { }

    return indirectEvalWorks
      ? indirectEval
      : (global.execScript
        ? function(expression) {
          global.execScript(expression);
        }
        : undefined
      );
  })(this, Array, (2, eval));

  /**
   * callback will be called with TestResult.
   *
   * @param {String} code
   * @param {Function} callback
   */
  var run = function(code, runCallback) {

    results = [];
    testNr = 0;
    callback = function() {
      runCallback(results);
    };

    // check no code
    if (code.length === 0) {
      results.push({
        ok: false,
        msg: I18N("writeCode")
      });
      callback();
      return;
    }

    koan.beforeTests();

    // read code
    try {
      log.clear();
      globalEval(code);
      results.push({
        ok: true,
        msg: I18N("noSyntaxError"),
        logs: log.getAll()
      });
    } catch (e) {
      results.push({
        ok: false,
        msg: I18N("syntaxError"),
        e: e,
        logs: log.getAll()
      });
      callback();
      return;
    }

    runActualTest(evalTestAndRunNext);

  };

  var runActualTest = function(testCaseCallback) {

    log.clear();
    try {
      result = koan.tests[testNr]();
    } catch (exc) {
      result = {
        ok: false,
        msg: I18N("unknownError"),
        e: exc
      };
    }
    result.logs = log.getAll();
    testCaseCallback(result);
  };

  var evalTestAndRunNext = function(result) {
    results.push(result);
    testNr++;
    if (result.ok && testNr < koan.tests.length) {
      runActualTest(evalTestAndRunNext);
    } else {
      callback();
    }
  };

  return {
    run: run
  };

})(jshero.actualKoan.getKoan(),
  jshero.log,
  jshero.i18n,
  jshero.language.LANGUAGE);