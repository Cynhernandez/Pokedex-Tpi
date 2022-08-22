function Pokemon(nombre,tipo){
    this.nombre = nombre;
    this.tipo = tipo;

}

function TipoPokemon(nombre,tipo){
    Pokemon.call(this, nombre , tipo);
}


TipoPokemon.prototype = Object.create(Pokemon.prototype);
TipoPokemon.prototype.constructor =  TipoPokemon;

TipoPokemon.prototype.debilidades = function (debilidades){
    this.debilidades = debilidades;
    return debilidades
}
function Charizar(ataques){
    this.ataques = ataques;
}
function Articuno(ataques){
    this.ataques = ataques;
}
function Miu(ataques){
    this.ataques = ataques;
}

Charizar.prototype = Object.create(TipoPokemon.prototype);
Charizar.prototype.constructor = Charizar;

Articuno.prototype = Object.create(TipoPokemon.prototype);
Articuno.prototype.constructor = Articuno;

Miu.prototype = Object.create(TipoPokemon.prototype);
Miu.prototype.constructor = Miu;

const tipoFuego = new TipoPokemon("Charizar","Fuego");
const tipoHielo = new TipoPokemon("Articuno","Hielo");
const tipoPsiquico = new TipoPokemon("Miu","Psiquico");

const charizar = new Charizar({
    ataques:"Lanzallamas,bomba lodo",
})
const articuno = new Articuno({
    ataques:"Lanzallamas,bomba lodo",
})

const miu = new Miu({
    ataques:"Lanzallamas,bomba lodo",
})
console.log( tipoFuego )
charizar.debilidades({
    debilidad1:"Agua",
    debilidad2:"Hielo",
    debilidad3:"Roca",
});
console.log( charizar )

console.log( tipoHielo );
articuno.debilidades({
    debilidad1:"Roca",
    debilidad2:"Fuego",
});
console.log( articuno )
//
console.log( tipoPsiquico );
miu.debilidades({
    debilidad1:"Siniestro",
    debilidad2:"Fantasma",
});

console.log( miu )
