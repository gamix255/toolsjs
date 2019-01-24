# toolsjs
Simple DOM manipulation toolkit for JavaScript

# qs()

Query Selector

Shortcut function to perform query selection.

Usage:

qs('.myelement');

This function is just a wrapper for:
document.querySelector()

# qsa()

Query Selector All

Shortcut function to perform query selection.

Usage:

```javascript
qsa('.myelement');
```

This function is just a wrapper for:
document.querySelectorAll()

# html()

Takes a node and query and returns
or sets the innerHTML of the specified target.

Usage:

```javascript
html( D, 'h1', 'Title' );
title = html( D, 'h1' );
```

# txt()

Same as html() but for innerText.

# bat()

Applies html(),txt() or attr() or something custom
to a batch of nodes.

Usage:

```javascript
bat(D,'a','attr','target', '_blank');
```

#attr()

Same as html() but for get/setAttribute.

Usage:

```javascript
attr( D, 'a#link', 'target', '_blank' );
t = attr( D, 'a#link', 'target' );
```

Gets/sets attribute of a node.

# prop()

Usage:

```javascript
prop( node, key, value );
value = prop( node, key );
```

# classmod()

Modifies classes of a node.

Usage:

```javascript
classmod(node, add, remove)
```


# cp()

Copy function. Clones a node.

# cpr()

Copy recursively. Clones a node using:
node.cloneNode(true).

# mv()

Modifies the DOM by appending or inserting a node.

Usage:

```javascript
mv( node, other, position )
mv( p, body ) -- append p to body
```

Where position can be:
0 = append as child to other
1 = insert before other
2 = append child to parent of other

# fdoc()

Frame document.
Returns document of specified frame number.

# comp()

Compares the property of 2 nodes using == operator.


# ce()

Create Element. Creates element of specified type.

# rm()

Removes the specified node.

# ls()

Lists child nodes of the specified node.

# each()

Each. Applies function f to all nodes in list l
and appends the result to array r which will
be returned.

# wrp()

Wraps html in wrapper and adds classes.


wrp( html, wrapper, classes );

Usage:

```javascript
wrp( 'hello', 'div', ['highlight'] );
```

# show()

Given a dataURI, opens a new browser window
displaying the object in the dataURI by registering
an object url. If noopen flag is set, no window
will be opened and the blob object will be returned
instead.

Usage:

```javascript
show( pdfdata ); //displays pdf in tab
```

# fread()

Reads file object.
Mode 0 = read as text (default)
Mode 1 = read as data url

Usage:

```javascript
fread(upload, func, 1);
```


# download()

Downloads a string as a file in the browser.

Usage:

```javascript
download( 'hello', 'test.txt', 'text/plain' );
```

# rq()
 
Send async request to server.

Usage:

```javascript
rq( '', alert );
```
