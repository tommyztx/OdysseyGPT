import fetch from 'node-fetch';
import {JSDOM} from 'jsdom';
import jQuery from 'jquery';
import fs from 'fs';
import _ from 'lodash';

function replaceNewLine(str) {
  return str? str.replace(/\n/g, " "): '';
}

function parserHTML(html) {
  const dom = new JSDOM(html);
  const jquery = jQuery(dom.window)
  const title = replaceNewLine(jquery('h3.first').text().trim());
  const content = replaceNewLine(jquery('div.content:first').text().trim());
  const date = replaceNewLine(jquery('p.author:first > time:first').text().trim());

  const replies = [];
  jquery('.post').each(function( index ) {
    if(index != 0) {
      const content = replaceNewLine(jquery( this ).find('div.content').text().trim());
      const date = replaceNewLine(jquery(this).find('p.author:first > time:first').text().trim());
      replies.push({
        content, date
      })
    }
  });
  return {title, content, date, replies};
}

function readFile(fileName) {
  fetch(fileName)
  .then(response => response.text())
  .then(textString => {
    parserHTML(textString)
  });
}


var files = fs.readdirSync('/Users/ruiyang/Downloads/aa');
var chunks = _.chunk(files, 1000);
chunks.forEach((ck, ckIndex) => {
  var output = [];
  ck.forEach((fileName, index ) => {
    var path = `/Users/ruiyang/Downloads/aa/${fileName}`;
    fs.stat(path, function (error, stats) {

      // 'r' specifies read mode
      fs.open(path, "r", function (error, fd) {
        var buffer = new Buffer.alloc(stats.size);
        fs.read(fd, buffer, 0, buffer.length,
            null, function (error, bytesRead, buffer) {
              var data = buffer.toString("utf8");

              output.push(parserHTML(data));

              if(index === ck.length -1) {
                fs.writeFile(`output${ckIndex}.json`, JSON.stringify(output), (err) => {
                  if (err)
                    console.log(err);
                  else {
                    console.log("File written successfully\n");
                  }
                });
              }
            });
      });
    });
  });
});



