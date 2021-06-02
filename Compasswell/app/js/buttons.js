$('#nameEdit').click(function() {
        // $('.nameEdit').focus()
        $(this).addClass('hidden')
        $('.nameClose').addClass('visible')
        $('.nameEdit').prop('readonly', false);
        $('.nameEdit').addClass('editable');
        $('.nameButtons').addClass('visible')
    })
$('.nameClose').click(function() {
    $('.nameClose').removeClass('hidden')
    $('.nameClose').removeClass('visible')
    $('#nameEdit').removeClass('hidden')
    $('#nameEdit').addClass('visible')
    $('.nameEdit').prop('readonly', true);
    $('.nameEdit').removeClass('editable');
    $('.nameButtons').removeClass('visible')
})
$('#companyEdit').click(function() {
    // $('.companyEdit').focus()
    $(this).addClass('hidden')
    $('.companyClose').addClass('visible')
    $('.confirmationLink').addClass('visible')
    $('.companyEdit').prop('readonly', false);
    $('.companyEdit').addClass('editable');
    $('.companyButtons').addClass('visible')
})
$('.companyClose').click(function() {
    $('.confirmationLink').removeClass('visible')
    $('.companyClose').removeClass('hidden')
    $('.companyClose').removeClass('visible')
    $('#companyEdit').removeClass('hidden')
    $('#companyEdit').addClass('visible')
    $('.companyEdit').prop('readonly', true);
    $('.companyEdit').removeClass('editable');
    $('.companyButtons').removeClass('visible')
})
$('#emailEdit').click(function() {
    // $('.emailEdit').focus()
    $(this).addClass('hidden')
    $('.emailClose').addClass('visible')
    $('.emailEdit').prop('readonly', false);
    $('.emailEdit').removeAttr('disabled')
    $('.emailButtons').addClass('visible')
})
$('.emailClose').click(function() {
    $('.emailClose').removeClass('hidden')
    $('.emailClose').removeClass('visible')
    $('#emailEdit').removeClass('hidden')
    $('#emailEdit').addClass('visible')
    $('.emailEdit').attr('disabled', true);
    $('.emailButtons').removeClass('visible')
})
$('#passwordEdit').click(function() {
    // $('.passwordEdit').focus()
    $(this).addClass('hidden')
    $('.passwordClose').addClass('visible')
    $('.passwordEdit').prop('readonly', false);
    $('.passwordEdit').addClass('editable');
    $('.passwordButtons').addClass('visible')
})
$('.passwordClose').click(function() {
    // $('.passwordEdit').focus()
    $('.passwordClose').removeClass('hidden')
    $('.passwordClose').removeClass('visible')
    $('#passwordEdit').removeClass('hidden')
    $('#passwordEdit').addClass('visible')
    $('.passwordEdit').prop('readonly', true);
    $('.passwordEdit').removeClass('editable');
    $('.passwordButtons').removeClass('visible')
})
$('#methodEdit').click(function() {
    // $('.methodEdit').focus()
    $(this).addClass('hidden')
    $('.methodClose').addClass('visible')
    $('.methodEdit').prop('readonly', false);
    $('.methodEdit').addClass('editable');
    $('.methodButtons').addClass('visible')
})
$('.methodClose').click(function() {
    $('.methodClose').removeClass('hidden')
    $('.methodClose').removeClass('visible')
    $('#methodEdit').removeClass('hidden')
    $('#methodEdit').addClass('visible')
    $('.methodEdit').prop('readonly', true);
    $('.methodEdit').removeClass('editable');
    $('.methodButtons').removeClass('visible')
})
