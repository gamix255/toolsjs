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

qsa('.myelement');

This function is just a wrapper for:
document.querySelectorAll()

# html()

Sets or returns the innerHTML of a node.

Usage:
html( qs(D, 'h1'), 'Hello' );

# txt()
Same as html() but for innerText.

# bat()
Applies html(),txt() or attr() or something custom
to a batch of nodes.

Usage:

bat('attr', qsa(D, 'a'), 'target', '_blank')


#attr()
Same as html() but for get/setAttribute.

Usage:

attr( a 'target', '_blank' );
t = attr( a, 'target' );

Gets/sets attribute of a node.

# dat()

Get/Set data attribute.

Usage:

dat( node, key, value );
value = dat( node, key );

# classmod()

Modifies classes of a node.

Usage:
classmod(node, add, remove)


# cp()

Copy function. Clones a node.

# cpr()

Copy recursively. Clones a node using:
node.cloneNode(true).

# mv()

Modifies the DOM by appending or inserting a node.

Usage:
mv( node, other, position )
mv( p, body ) -- append p to body

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

# x()

Like Batch but assumes D and with
very short notation. Optional second
parameter to use another delimiter.

Usage:
x('attr/a/target/_blank');

# xf()

Like x() but assumes fdoc(0).
i.e. operates in first frame.

# show()

Given a dataURI, opens a new browser window
displaying the object in the dataURI by registering
an object url. If noopen flag is set, no window
will be opened and the blob object will be returned
instead.

Usage:
show( pdfdata ); //displays pdf in tab

# fread()

Reads file object.

Mode 0 = read as text (default)
Mode 1 = read as data url

Usage:
fread(upload, func, 1);

# download()

Downloads a string as a file in the browser.

Usage:
download( 'hello', 'test.txt', 'text/plain' );

# rq()

Send async request to server.

Usage:
rq( '', alert );
