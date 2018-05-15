$(document).ready(function () {
    var shifumi_values = ['pierre', 'feuille', 'ciseau'];
    var opponent_win = 0;
    var your_win = 0;

    $('#you button').click(function(){
        var my_value = $(this).val();
        var opponent_value = shifumi_values[Math.floor(Math.random() * shifumi_values.length)];;
        var message = "";

        $('#opponent_choice .choice').hide();
        $('#your_choice .choice').hide();
        $('.choice .fa').hide();

        if (my_value == opponent_value) {
            message = "Égalité !";
        }
        else if (
            (my_value == "pierre" && opponent_value == "ciseau")
            || (my_value == "feuille" && opponent_value == "pierre")
            || (my_value == "ciseau" && opponent_value == "feuille")
        ) {
            message = "Gagné !";
            your_win++;
        }
        else {
            message = "Perdu !";
            opponent_win++;
        }

        $('#message').text('Shi !')
            .animate({ opacity: '1' }, 500)
            .animate({ opacity: '0' }, 500);
        setTimeout(() => {
            $('#message').text('Fu !')
                .animate({ opacity: '1' }, 500)
                .animate({ opacity: '0' }, 500);
            setTimeout(() => {
                $('#message').text('Mi !')
                    .animate({ opacity: '1' }, 500)
                    .animate({ opacity: '0' }, 500);
                setTimeout(() => {
                    $('#opponent_choice .choice').show();
                    $('#opponent_choice .choice .fa[data-value='+opponent_value+']').show();
                    $('#your_choice .choice').show();
                    $('#your_choice .choice .fa[data-value='+my_value+']').show();

                    $('#message').text(message)
                        .animate({ opacity: '1' }, 500)
                        .animate({ opacity: '0' }, 500);

                    $('#your_win').text(your_win);
                    $('#opponent_win').text(opponent_win);
                }, 1000);
            }, 1000);
        }, 1000);
    });
});