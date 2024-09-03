let nextId = 1

const model = (body, id = nextId++) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        body.ano != undefined &&
        body.ano > 0 &&
        body.curso != undefined &&
        body.curso != "" &&
        body.matricula != undefined &&
        body.matricula != "" 
    ) {
        return {
            id,
            nome: body.nome,
            ano: body.ano,
            curso: body.curso,
            matricula: body.matricula
        }
    }
}

module.exports = model