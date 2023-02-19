var $tela;
$(document).ready(function () {
    $tela = $("#tela");
    document.getElementById("musica").play();
    }
);
function chkLength() {
    if($tela.val().length > 10) {
        especial('a');
    }
}
function addTela(valor) {
    var valorFinal = $tela.val() + valor;
    $tela.val(valorFinal);
    chkLength();
};
function especial(esp) {
    if(esp == 'A') {
        $tela.val("");
    }
    if(esp == 'a') {
        var parcial = $tela.val();
        var final = parcial.substring(0, parcial.length - 1);
        $tela.val(final);
    }
}
function calcular() {
    var parcial = $tela.val();
    $tela.val(eval(parcial));
}
