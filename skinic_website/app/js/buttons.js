$('#nameEdit').click(function() {
        // $('.nameEdit').focus()
        $(this).addClass('hidden')
        $('.nameClose').addClass('visible')
        $('.nameEdit').prop('readonly', false);
        $('.nameButtons').addClass('visible')
    })
    $('.nameClose').click(function() {
        $('.nameClose').removeClass('hidden')
        $('.nameClose').removeClass('visible')
        $('#nameEdit').removeClass('hidden')
        $('#nameEdit').addClass('visible')
        $('.nameEdit').prop('readonly', true);
        $('.nameButtons').removeClass('visible')
    })
    $('#phoneEdit').click(function() {
        // $('.phoneEdit').focus()
        $(this).addClass('hidden')
        $('.phoneClose').addClass('visible')
        $('.confirmationLink').addClass('visible')
        $('.phoneEdit').prop('readonly', false);
        $('.phoneButtons').addClass('visible')
    })
    $('.phoneClose').click(function() {
        $('.confirmationLink').removeClass('visible')
        $('.phoneClose').removeClass('hidden')
        $('.phoneClose').removeClass('visible')
        $('#phoneEdit').removeClass('hidden')
        $('#phoneEdit').addClass('visible')
        $('.phoneEdit').prop('readonly', true);
        $('.phoneButtons').removeClass('visible')
    })

    $('#passwordEdit').click(function() {
        // $('.passwordEdit').focus()
        $(this).addClass('hidden')
        $('.passwordClose').addClass('visible')
        $('.passwordEdit').prop('readonly', false);
        $('.passwordButtons').addClass('visible')
    })
    $('.passwordClose').click(function() {
        // $('.passwordEdit').focus()
        $('.passwordClose').removeClass('hidden')
        $('.passwordClose').removeClass('visible')
        $('#passwordEdit').removeClass('hidden')
        $('#passwordEdit').addClass('visible')
        $('.passwordEdit').prop('readonly', true);
        $('.passwordButtons').removeClass('visible')
    })

    $('#dateEdit').click(function() {
        // $('.dateEdit').focus()
        $(this).addClass('hidden')
        $('.dateClose').addClass('visible')
        $('.dateEdit').prop('readonly', false);
        $('.dateButtons').addClass('visible')
    })
    $('.dateClose').click(function() {
        $('.dateClose').removeClass('hidden')
        $('.dateClose').removeClass('visible')
        $('#dateEdit').removeClass('hidden')
        $('#dateEdit').addClass('visible')
        $('.dateEdit').prop('readonly', true);
        $('.dateButtons').removeClass('visible')
    })

    $('#addressEdit').click(function() {
        // $('.addressEdit').focus()
        $(this).addClass('hidden')
        $('.addressClose').addClass('visible')
        $('.addressEdit').prop('readonly', false);
        $('.addressButtons').addClass('visible')
    })
    $('.addressClose').click(function() {
        $('.addressClose').removeClass('hidden')
        $('.addressClose').removeClass('visible')
        $('#addressEdit').removeClass('hidden')
        $('#addressEdit').addClass('visible')
        $('.addressEdit').prop('readonly', true);
        $('.addressButtons').removeClass('visible')
    })
    $('#methodEdit').click(function() {
        $(this).addClass('hidden')
        $('.methodClose').addClass('visible')
        $('.methodEdit').removeAttr('disabled')
        $('.methodButtons').addClass('visible')
    })
    $('.methodClose').click(function() {
        $('.methodClose').removeClass('hidden')
        $('.methodClose').removeClass('visible')
        $('#methodEdit').removeClass('hidden')
        $('#methodEdit').addClass('visible')
        $('.methodEdit').attr('disabled', true);
        $('.methodButtons').removeClass('visible')
    })