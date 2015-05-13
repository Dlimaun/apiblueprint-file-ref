String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

// First arg passed, is input file
var inputFile = process.argv[2];
var outputFile = inputFile.toString().split(".")[0] + ".bin.md";

// Requeire File System, to read and write files
var fs = require('fs');

// Regular Expression to find references/links to other files
var refRe = /(.+)\"\$ref ([\w\.]+)\"/;

// var to keep loaded files
var files = {};

function readFileSync(name, spaces){
	spaces = spaces || "";
	if (files[name] !== undefined)
		return putSpaces(files[name], spaces);
	var data = fs.readFileSync(name).toString().split("\n");
	var result = "";
	for (var i in data) {
		var p = refRe.exec(data[i]);
		if (p !== null) {
			result += readFileSync(p[2], p[1]);
		} else {
			result += data[i]+"\n";
		}
	}
// TODO: add parameter to trim json
//	if (name.toString().endsWith(".json"))
//		result = JSON.stringify(JSON.parse(result));
	files[name] = result;
	return putSpaces(result, spaces);
}

function putSpaces(data, spaces){	
	var d = data.toString().split("\n");
	var result = "";
	for (var i in d)
		result += spaces + d[i] + "\n";
	return result;
}

var outputFileData = readFileSync(inputFile);

fs.writeFile(outputFile, outputFileData, "UTF-8", function(err) {
	if(err) {
	    return console.log(err);
	}
	console.log("The file was saved into %s.", outputFile);
});

