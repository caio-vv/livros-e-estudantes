const estudante_controller = require("../controllers/estudante.js")
const livro_controller = require("../controllers/livro.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.data_aluguel != undefined &&
        body.data_aluguel != "" &&
        estudante_controller.show(body.estudante_id),
        livro_controller.show(body.livro_id)
    ) {
        return {
            id,
            data_aluguel: body.data_aluguel,
            estudante_id: body.estudante_id,
            livro_id: body.livro_id,
            data_devolucao: body.data_devolucao
        }
    }
}

module.exports = model