$(function() {
    var URL = "http://kulitan.app/assets/kulitan/";
    var IMAGE_PATH = "assets/kulitan/";
    var IMAGE_EXTENSION = ".png";
    var image;

    $('#textBoxTranslator').focus(function() {
        $(this).val('');
    });

    $('#textBoxTranslator').blur(function() {
        $(this).val('Enter your text here');
    });

    $('#textBoxTranslator').keyup(function() {
        $('#translatedContent').empty();
        var words = $(this).val().split(" ");

        words.forEach(function(word) {
            var _syllables = syllables(word);
            console.log(_syllables);
            _syllables.forEach(function(syllable) {
                var firstTwoCharacters = syllable.charAt(0) + syllable.charAt(1);

                if ((/[aeiou]/g).test(firstTwoCharacters) == false) {
                    if (syllable.length == 3) {
                        var firstCharacter = syllable.charAt(0);
                        var lastTwoCharacters = syllable.charAt(1) + syllable.charAt(2);

                        image = "<img src='" + IMAGE_PATH + firstCharacter + IMAGE_EXTENSION + "'>";
                        $('#translatedContent').append(image);

                        image = "<img src='" + IMAGE_PATH + lastTwoCharacters + IMAGE_EXTENSION + "'>";
                        $('#translatedContent').append(image);
                    }
                } else {
                    var str = syllable.match(/.{1,2}/g);
                    str.forEach(function(letter) {
                        image = "<img src='" + IMAGE_PATH + letter + IMAGE_EXTENSION + "'>";
                        $('#translatedContent').append(image);
                    })
                }
            });
        });
    })
});