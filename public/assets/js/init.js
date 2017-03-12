$(function() {
    var URL = "http://kulitan.app/assets/kulitan/";
    var IMAGE_PATH = "assets/kulitan/";
    var IMAGE_EXTENSION = ".png";
    var image;

    $('#textBoxTranslator').keyup(function() {
        $('#translatedContent').empty();
        var word = $(this).val();
        var _syllables = syllables(word);

        _syllables.forEach(function(syllable) {
            if (_syllables.length > 1) {
                if (syllable.length > 2) {
                    var letters = syllable.split('');
                    letters.forEach(function(letter) {
                        image = "<img src='" + IMAGE_PATH + letter + IMAGE_EXTENSION + "'>";
                        $('#translatedContent').append(image);
                    });
                } else {
                    image = "<img src='" + IMAGE_PATH + syllable + IMAGE_EXTENSION + "'>";
                    $('#translatedContent').append(image);
                }
               
            }

            if (_syllables.length < 2) {
                var letters = syllable.split('');
                letters.forEach(function(letter) {
                    image = "<img src='" + IMAGE_PATH + letter + IMAGE_EXTENSION + "'>";
                    $('#translatedContent').append(image);
                });
            }
        });
    })
});