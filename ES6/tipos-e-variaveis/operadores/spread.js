// Spread ...

var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

// o spread (...) faz isso:
var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pés'];


function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);