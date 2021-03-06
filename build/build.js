// Run from JS Hero root: node build/build.js
// koans.js has to be build before
// All pathes relative to JS Hero root directory
const fs = require('fs');
const ejs = require('ejs');
const koansDe = require("../www/js/koans.js").getKoans();
const koansEn = require("../www/en/js/koans.js").getKoans();

// build de/success.html
ejs.renderFile("src/html/de/success.html", { koans: koansDe }, function(err, successHtml) {
  if (err) throw err;
  fs.writeFile("www/success.html", successHtml, function(err) {
    if (err) throw err;
    console.log("Build success.html (de)");
  });
});

// build en/success.html
ejs.renderFile("src/html/en/success.html", { koans: koansEn }, function(err, successHtml) {
  if (err) throw err;
  fs.writeFile("www/en/success.html", successHtml, function(err) {
    if (err) throw err;
    console.log("Build success.html (en)");
  });
});

// build de/koans html
for (var i = 0, l = koansDe.length; i < l; i++) {
  var koan = koansDe[i];

  var links = {};
  if (i === 0) {
    links.prev = "../intro.html";
  } else {
    links.prev = koansDe[i - 1].id + ".html";
  }
  if (i === l - 1) {
    links.next = "../success.html"
  } else {
    links.next = koansDe[i + 1].id + ".html";;
  }

  ejs.renderFile("src/html/de/main.html", { koan: koan, links: links }, function(err, koanHtml) {
    if (err) throw err;
    fs.writeFile("www/koans/" + koan.id + ".html", koanHtml, function(err) {
      if (err) throw err;
    });
  });

}
console.log("build koans (de)");

// build en/koans html
for (var i = 0, l = koansEn.length; i < l; i++) {
  var koan = koansEn[i];

  var links = {};
  if (i === 0) {
    links.prev = "../home.html";
  } else {
    links.prev = koansEn[i - 1].id + ".html";
  }
  if (i === l - 1) {
    links.next = "../success.html"
  } else {
    links.next = koansEn[i + 1].id + ".html";;
  }

  ejs.renderFile("src/html/en/main.html", { koan: koan, links: links }, function(err, koanHtml) {
    if (err) throw err;
    fs.writeFile("www/en/koans/" + koan.id + ".html", koanHtml, function(err) {
      if (err) throw err;
    });
  });

}
console.log("build koans (en)");



