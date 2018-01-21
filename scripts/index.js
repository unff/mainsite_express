$('#btn_fields').on('click', function() {
    // console.log ('click')
    $('.cover').css('background-image', 'url(../images/field.jpg)')
    $('.cover .content h1').text("Oh look, a field.")
    $('.cover .content #descriptor').text("Could it be boundless possibilities?")
    setCoverButtons(this.id);
})

$('#btn_mountains').on('click', function() {
    // console.log ('click')
    $('.cover').css('background-image', 'url(../images/mountain.jpg)')
    $('.cover .content h1').text("Oh look, a mountain.")
    $('.cover .content #descriptor').text("Could it be majesty?")
    setCoverButtons(this.id);
})

$('#btn_ponds').on('click', function() {
    // console.log ('click')
    $('.cover').css('background-image', 'url(../images/pond.jpg)')
    $('.cover .content h1').text("Oh look, a pond.")
    $('.cover .content #descriptor').text("Could it be peace and tranquility?")
    setCoverButtons(this.id);
})

function setCoverButtons(clicked) {
    $('.cover button').each(function(){
        console.log('id: '+this.id)
        if (this.id == clicked) {
            console.log('clicked: '+clicked)
            $('#'+this.id).hide()
        } else {
            $('#'+this.id).show()
        }
    })
}

