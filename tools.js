/**

Tools.JS

JavaScript framework for rich web applications
without a rich code base.

Licensed BSD

Copyright (c) 2019, Gabor de Mooij for GaborSoftware
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL GABOR DE MOOIJ (GABORSOFTWARE) BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/


/**
 * qs()
 *
 * Query Selector
 *
 * Shortcut function to perform query selection.
 *
 * Usage:
 *
 * qs('.myelement');
 *
 * This function is just a wrapper for:
 * document.querySelector()
 */
var qs = function(n,q) {
	return n.querySelector(q);
}

/**
 * qsa()
 *
 * Query Selector All
 *
 * Shortcut function to perform query selection.
 *
 * Usage:
 *
 * qsa('.myelement');
 *
 * This function is just a wrapper for:
 * document.querySelectorAll()
 */
var qsa = function(n,q) {
	return n.querySelectorAll(q);
}


/**
 * html()
 *
 * HTML Getter/Setter
 *
 * Sets or returns the innerHTML of a node.
 *
 * Usage:
 * html( qs(D, 'h1'), 'Hello' );
 * title = html( qs(D, 'h1')  );
 */
function html(n, str) {
	return ( str !== undefined ) ? n.innerHTML = str : n.innerHTML;
}

/**
 * txt()
 *
 * Text Getter/Setter
 *
 * Like html() but for innerText.
 */
function txt(n, str) {
	return ( str !== undefined ) ? n.innerText = str : n.innerText;
}

/**
 * attr()
 *
 * Attribute Getter/Setter
 *
 * Sets/gets attribute of node.
 */
function attr(n, k, v) {
	return ( v !== undefined ) ? n.setAttribute(k, v) : n.getAttribute(k);
}

/**
 * dat()
 *
 * Data attribute Getter/Setter
 *
 * Sets/gets data attribute.
 */
function dat(n, k, v) {
	return attr( n, ('data-'+k), v);
}

/**
 * bat()
 *
 * Batch operation
 *
 * Applies function f to all nodes
 * n, passing arguments a and b.
 *
 * Usage:
 *
 * bat('attr', qsa(D, 'a'), 'target', '_blank')
 *
 */
function bat(f, n, a, b) {
	return each(n, function(x){ return window[f](x, a, b); });
}

/**
 * x()
 *
 * Like Batch but assumes D and with
 * very short notation. Optional second
 * parameter to use another delimiter.
 *
 * Usage:
 * x('attr/a/target/_blank')
 *
 */
function x( z, s ) {
	var z = z.split(s || '/');
	return bat( z[0], qsa(D, z[1]), z[2], z[3]);
}

/**
 * xf()
 *
 * Like x() but assumes fdoc(0).
 * i.e. operates in first frame.
 */
function xf( z, s ) {
	var z = z.split(s || '/');
	return bat( z[0], qsa(fdoc(0), z[1]), z[2], z[3]);
}

/**
 * classmod()
 *
 * Modifies classes of a node.
 *
 * Usage:
 * classmod(node, add, remove)
 */
function classmod( n, add, remove ) {
	if (add) for(var i in add) n.classList.add(add[i]);
	if (remove) for(var i in remove) n.classList.remove(remove[i]);
	return n;
}

/**
 * cp()
 *
 * Copy function. Clones a node.
 */
var cp = function(n) {
	return n.cloneNode();
}

/**
 * cpr()
 *
 * Copy recursively. Clones a node using:
 * node.cloneNode(true).
 */
var cpr = function(n) {
	return n.cloneNode(true);
}

/**
 * mv()
 *
 * Modifies the DOM by appending or inserting a node.
 *
 * Usage:
 * mv( node, other, position )
 * mv( p, body ) -- append p to body
 *
 * Where position can be:
 * 0 = append as child to other
 * 1 = insert before other
 * 2 = append child to parent of other
 */
var mv = function(c, n, p) {
	if (p === 0 || p === undefined) {
		n.appendChild( c );
	}
	if (p === 1) {
		n.insertNodeBefore( c, n );
	}
	if (p === 2) {
		n.parentNode.appendChild( c );
	}
	return n;
}

/**
 * fdoc()
 *
 * Frame document.
 * Returns document of specified frame number.
 *
 * Usage:
 * framedoc = fdoc(0);
 */
var fdoc = function(i) {
	return frames[i].document;
}

/**
 * comp()
 *
 * Compares the property of 2 nodes using == operator.
 */
function comp( node1, node2, property ) {
	return (prop(node1, property)==prop(node2, property));
}

/**
 * ce()
 *
 * Create Element. Creates element of specified type.
 */
function ce( type ) {
	if (type === undefined) type = 'div';
	return document.createElement( type );
}

/**
 * rm()
 *
 * Removes the specified node.
 */
function rm( n ) {
	n.parentNode.removeChild( n );
}

/**
 * ls()
 *
 * Lists child nodes of the specified node.
 *
 * Usage:
 *
 * lis = ls(qs(D,'ul'));
 */
function ls(n) {
	return n.childNodes;
}

/**
 * each()
 *
 * Each. Applies function f to all nodes in list l
 * and appends the result to array r which will
 * be returned.
 *
 * Usage:
 *
 * each(qsa(D,'a'), function(a){
 * 	attr(a, 'target', '_blank');
 * });
 */
function each(l,f) {
	var r = [];
	for(var i = 0; i<l.length; i++) {
		r.push(f(l[i],i));
	}
	return r;
}

/**
 * wrp()
 *
 * Wraps html in wrapper and adds classes.
 *
 * Usage:
 *
 * mv(qs(D,'body'),
 * 	wrp('<a href="#">top</a>', ['top'])
 * );
 */
function wrp( html, classes, wrapper ) {
	if ( wrapper == undefined ) wrapper = 'div';
	var node = classmod( ce( wrapper ), classes );
	node.innerHTML = html;
	return node;
}


/**
 * show()
 *
 * Given a dataURI, opens a new browser window
 * displaying the object in the dataURI by registering
 * an object url. If noopen flag is set, no window
 * will be opened and the blob object will be returned
 * instead.
 *
 * Usage:
 * show( pdfdata ); //displays pdf in tab
 */
function show(dataURI, noopen) {
	var byteString = atob(dataURI.split(',')[1]);
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
	var ab = new ArrayBuffer(byteString.length);
	var ia = new Uint8Array(ab);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	var blob = new Blob([ab], {type: mimeString});
	if (!noopen) {
		var url = URL.createObjectURL(blob);
		window.open(url)
	}
	return blob;
}

/**
 * fread()
 *
 * Reads file object.
 * Mode 0 = read as text (default)
 * Mode 1 = read as data url
 *
 * Usage:
 * fread(upload, func, 1);
 */
function fread( file, callback, mode ) {
	var reader = new FileReader();
	reader.onload = function(event) {
		callback(event.target.result);
	}
	if (mode) {
		reader.readAsDataURL(file);
	} else {
		reader.readAsText(file);
	}
}

/**
 * download()
 *
 * Downloads a string as a file in the browser.
 *
 * Usage:
 * download( 'hello', 'test.txt', 'text/plain' );
 */
function download(exportObj, fname, type){
	if (type == undefined) type = 'octet/stream';
	var blob = new Blob([exportObj], {'type':type});
	var url = URL.createObjectURL(blob);
	var anchor = ce('a');
	prop(anchor,'href',url);
	prop(anchor,'download', fname);
	mv(anchor, D.body);
	anchor.click();
	rm(anchor);
}

/**
 * rq()
 *
 * Send async request to server.
 *
 * Usage:
 * rq( '', alert );
 */
function rq( url, callback, data, headers) {
	var xhr = new XMLHttpRequest();
	xhr.open((data ? 'POST' : 'GET'), url);
	if (headers) {
		for(var i = 0; i < headers.length; i ++ ) {
			xhr.setRequestHeader(headers[i][0], headers[i][1]);
		}
	}
	xhr.onload = function() {
		return callback(xhr.responseText, xhr.status, xhr);
	}
	xhr.send(data);
	return xhr;
}

/**
 * Assign document to global D.
 */
window.D = document;
