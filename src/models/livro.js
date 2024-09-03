let nextId = 1

const model = (body, id = nextId++) => {
    if(body.titulo != undefined &&
        body.titulo != "" &&
        body.ano != undefined &&
        body.ano > 0 &&
        body.genero != undefined &&
        body.genero != "" &&
        body.autor != undefined &&
        body.autor != "" 
    ) {
        return {
            id,
            titulo: body.titulo,
            ano: body.ano,
            genero: body.genero,
            autor: body.autor
        }
    }
}

module.exports = model