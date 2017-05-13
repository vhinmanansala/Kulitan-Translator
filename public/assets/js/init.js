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
        $('#output').attr('src', '');
        $('#translatedContent').empty();
        var words = $(this).val().split(" ");

        words.forEach(function(word) {
            var _syllables = syllables(word);
     
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

        var images = [];
        var x = 0;

        $('#translatedContent img').each(function() {   
            var image = {};
            image.src = this.src;
            image.x = x;
            images.push(image);

            x += 300;
        });

        mergeImages(images, {
            width: x,
            height: 350
        }).then(b64 => $('#output').attr('src', b64));
    });

    $('#export').click(function() {
        var imageSource = $('#output').attr('src');
        var link = document.createElement('a');
        link.download = 'translation.png';
        var uri = imageSource;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
    }); 
});