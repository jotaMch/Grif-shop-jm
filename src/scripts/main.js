
$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
            required: true
            },
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, insira sua mensagem'
        }
    })
})
/*
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})*/