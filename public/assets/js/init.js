$(function() {
    var URL = "http://kulitan.app/assets/kulitan/";
    var IMAGE_PATH = "assets/kulitan/";
    var IMAGE_EXTENSION = ".png";
    var image;

    $('#textBoxTranslator').keyup(function() {
        $('#translatedContent').empty();
        var words = $(this).val().split(" ");

        words.forEach(function(word) {
            var _syllables = syllables(word);

            console.log(_syllables);

            _syllables.forEach(function(syllable) {
                var str = syllable.match(/.{1,2}/g);
                
                str.forEach(function(letter) {
                    image = "<img src='" + IMAGE_PATH + letter + IMAGE_EXTENSION + "'>";
                    $('#translatedContent').append(image);
                })
            });
        });
    })
});