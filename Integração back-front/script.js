const API_URL = "http://localhost:3000/api/livros";

function carregarLivros() {
  $.get(API_URL, (data) => {
    const tbody = $("#livros-tbody").empty();

    data.forEach((livro) => {
      const linha = $(`
                <tr>
                    <td>${livro.id}</td>
                    <td>${livro.nome_livro}</td>
                    <td>${livro.nome_autor}</td>
                    <td>
                        <button onclick="editarLivro(${livro.id})">Editar</button>
                        <button onclick="deletarLivro(${livro.id})">Excluir</button>
                    </td>
                </tr>
            `);
      tbody.append(linha);
    });
  });
}

$('#livro-form').on('submit', (e) => {
    e.preventDefault()

    const id = $('#livro-id').val()
    const livro = {
        nome_livro: $('#nome_livro').val(),
        nome_autor: $('#nome_autor').val()
    }

    if(id) {
        $.ajax({
            url: `${API_URL}/${id}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(livro),
            success: () => {
                $('#livro-form')[0].reset()
                $('#livro-id').val('')
                carregarLivros()
            }
        })
    } else {
        $.post(API_URL, livro, () => {
            $('#livro-form')[0].reset()
            carregarLivros()
        })
    }
})

function editarLivro(id) {
    $.get(`${API_URL}/${id}`, (livro) => {
        $('#livro-id').val(livro.id)
        $('#nome_livro').val(livro.nome_livro)
        $('#nome_autor').val(livro.nome_autor)
    })
}

function deletarLivro(id) {
    if(confirm('Deseja excluir este livro?')) {
        $.ajax({
            url: `${API_URL}/${id}`,
            method: 'DELETE',
            success: carregarLivros
        })
    }
}

$(document).ready(carregarLivros);