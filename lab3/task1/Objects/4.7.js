let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) );
alert( Symbol.keyFor(localSymbol) ); 

alert( localSymbol.description )