document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var data = document.getElementById('data').value;
        var comentario = document.getElementById('comentario').value;

        var avaliacao = {
            nome: nome,
            data: data,
            comentario: comentario
        };

        console.log(JSON.stringify(avaliacao));
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var data = document.getElementById('data').value;
        var comentario = document.getElementById('comentario').value;

        var avaliacao = {
            nome: nome,
            data: data,
            comentario: comentario
        };

        var avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        avaliacoes.push(avaliacao);

        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

        alert('Avaliação enviada com sucesso!');

        form.reset();
    });

    function carregarAvaliacoes() {
        var avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];

        for (var i = 0; i < avaliacoes.length; i++) {
            var avaliacao = avaliacoes[i];
            console.log('Nome:', avaliacao.nome);
            console.log('Data:', avaliacao.data);
            console.log('Comentário:', avaliacao.comentario);
            console.log('-------------------');
        }
    }

    function carregarUsuarios() {
        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        for (var i = 0; i < usuarios.length; i++) {
            var usuario = usuarios[i];
            console.log('Nome do Usuário:', usuario.nome);
            console.log('Histórico de Pesquisas:');

            for (var j = 0; j < usuario.historico.length; j++) {
                var historico = usuario.historico[j];
                console.log('Data:', historico.data);
                console.log('Termo Pesquisado:', historico.termoPesquisado);
                console.log('-------------------');
            }
        }
    }

    carregarAvaliacoes();
    carregarUsuarios();
});