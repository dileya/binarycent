$(document).ready(function() {
    var btn = $('#show-more');
    var hiddenRows = $('.winners-table .row-hidden');
    btn.on('click', function () {
        hiddenRows.fadeIn();
        btn.hide();
    })
});