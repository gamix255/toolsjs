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
 * Takes a node and query and returns
 * or sets the innerHTML of the specified target.
 *
 * Usage:
 * html( D, 'h1', 'Title' );
 * title = html( D, 'h1' );
 */
function html(n, q, str) {
	if ( str !== undefined ) {
		qs(n,q).innerHTML = str;
	} else {
		return qs(n,q).innerHTML;
	}
}

/**
 * Same as html() but for innerText.
 */
function txt(n, q, str) {
	if ( str !== undefined ) {
		qs(n,q).innerText = str;
	} else {
		return qs(n,q).innerText;
	}
}
/**
 * Applies html(),txt() or attr() or something custom
 * to a batch of nodes.
 * 
 * Usage:
 * 
 * bat(D,'a','attr','target', '_blank');
 * 
 */
function bat( n, q, f, a, b ) {
	if ( f == 'html' ) f = 'innerHTML';
	if ( f == 'txt' ) f = 'innerText';
	if ( f == 'attr' && b !== undefined ) f = 'setAttribute';
	if ( f == 'attr' && b === undefined ) f = 'getAttribute';
	var r = [];
	var x = qsa( n, q );
	for(var i = 0; i < x.length; i++) {
		if ( typeof ( x[i][f] ) === 'function' ) {
			r.push(x[i][f](a,b));
		} else {
			r.push(x[i][f] = (a));
		}
	}
	return r;
}

/**
 * Same as html() but for get/setAttribute.
 *
 * Usage:
 *
 * attr( D, 'a#link', 'target', '_blank' );
 * t = attr( D, 'a#link', 'target' );
 */
function attr(n, q, k, v) {
	if ( v !== undefined) {
		qs(n,q).setAttribute(k,v);
	} else {
		return qs(n,q).getAttribute(k);
	}
}

/**
 * Gets/sets attribute of a node.
 * 
 * Usage
 * prop( node, key, value );
 * value = prop( node, key );
 */
function prop(n, k, v) {
	if ( v !== undefined ) {
		n.setAttribute(k,v);
	} else {
		return n.getAttribute(k);
	}
}

/**
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
 */
function wrp( html, wrapper, classes ) {
	var node = classmod( ce( wrapper ), classes );
	node.innerHTML = html;
	return node;
}

/**
 * Assign document to global D.
 */
window.D = document;
