$(function() {
    var URL = "http://kulitan.app/assets/kulitan/";
    var IMAGE_PATH = "assets/kulitan/";
    var IMAGE_EXTENSION = ".png";
    var image;

    $('#textBoxTranslator').keyup(function() {
        var wordCounter = 1;

        $('.wordWrapper').remove();
        $('#output').attr('src', '');
        $('#translatedContent').empty();

        var words = $(this).val().split(" ");

        words.forEach(function(word) {
            if ($('#portrait').is(':checked')) {
                var html = "<div id='wordWrapper" + wordCounter + "' class='wordWrapper portrait'></div>";
            } else if ($('#landscape').is(':checked')) {
                var html = "<div id='wordWrapper" + wordCounter + "' class='wordWrapper landscape'></div>";
            }

            $('#translatedContent').append(html);

            var _syllables = syllables(word);
     
            _syllables.forEach(function(syllable) {
                var firstTwoCharacters = syllable.charAt(0) + syllable.charAt(1);

                if ($('#landscape').is(':checked')) {
                    landscapeTranslation(syllable, firstTwoCharacters, wordCounter);
                } else if ($('#portrait').is(':checked')) {
                    portraitTranslation(syllable, firstTwoCharacters, wordCounter);
                }
            });

            wordCounter++;
        });

        generateImageForSyllable();
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

    function landscapeTranslation(syllable, firstTwoCharacters, wordCounter) {
        if ((/[aeiou]/g).test(firstTwoCharacters) == false) {
            if (syllable.length == 3) {
                var firstCharacter = syllable.charAt(0);
                var lastTwoCharacters = syllable.charAt(1) + syllable.charAt(2);

                image1 = "<img class='image' src='" + IMAGE_PATH + firstCharacter + IMAGE_EXTENSION + "'>";
                image2 = "<img class='image' src='" + IMAGE_PATH + lastTwoCharacters + IMAGE_EXTENSION + "'>";

                var word = $('#wordWrapper' + wordCounter).append("<div class='syllable'>" + image1 + image2 + "</div>");

                $('#translatedContent').append(word);
            }
        } else {
            var str = syllable.match(/.{1,2}/g);
           
            if (str.length == 2) {
                var image1 = "<img class='image' src='" + IMAGE_PATH + str[0] + IMAGE_EXTENSION + "'>";
                var image2 = "<img class='image' src='" + IMAGE_PATH + str[1] + IMAGE_EXTENSION + "'>";

                var word = $('#wordWrapper' + wordCounter).append("<div class='syllable'>" + image1 + image2 + "</div>");

                $('#translatedContent').append(word);
            } else {
                str.forEach(function(letter) {
                    image = "<img class='image' src='" + IMAGE_PATH + letter + IMAGE_EXTENSION + "'>";

                    var word = $('#wordWrapper' + wordCounter).append("<div class='syllable'>" + image + "</div>");

                    $('#translatedContent').append(word);
                });
            }
        }
    }

    function portraitTranslation(syllable, firstTwoCharacters, wordCounter) {
        if ((/[aeiou]/g).test(firstTwoCharacters) == false) {
            if (syllable.length == 3) {
                var firstCharacter = syllable.charAt(0);
                var lastTwoCharacters = syllable.charAt(1) + syllable.charAt(2);

                image1 = "<img class='image' src='" + IMAGE_PATH + firstCharacter + IMAGE_EXTENSION + "'>";
                image2 = "<img class='image' src='" + IMAGE_PATH + lastTwoCharacters + IMAGE_EXTENSION + "'>";

                var word = $('#wordWrapper' + wordCounter).append("<div class='syllable'>" + image1 + image2 + "</div>");

                $('#translatedContent').append(word);
            }
        } else {
            var str = syllable.match(/.{1,2}/g);
           
            if (str.length == 2) {
                var image1 = "<img class='image' src='" + IMAGE_PATH + str[0] + IMAGE_EXTENSION + "'>";
                var image2 = "<img class='image' src='" + IMAGE_PATH + str[1] + IMAGE_EXTENSION + "'>";

                var word = $('#wordWrapper' + wordCounter).append("<div class='syllable'>" + image1 + image2 + "</div>");

                $('#translatedContent').append(word);
            } else {
                str.forEach(function(letter) {
                    image = "<img class='image' src='" + IMAGE_PATH + letter + IMAGE_EXTENSION + "'>";

                    var word = $('#wordWrapper' + wordCounter).append("<div class='syllable'>" + image + "</div>");

                    $('#translatedContent').append(word);
                });
            }
        }
    }

    function generateImageForSyllable() {
        if ($('#landscape').is(':checked')) {
            var images = [];
            var x = 0;

            $('.landscape').each(function() {
                $(this).find('img').each(function() {
                    var image = {};
                    image.src = this.src;
                    image.x = x;
                    images.push(image);

                    x += 300;
                });

                x += 300;
            });

            mergeImages(images, {
                width: x,
                height: 350
            }).then(b64 => $('#output').attr('src', b64));
        } else if ($('#portrait').is(':checked')) {
            var images = [];
            var x = 0;

            $('.portrait').each(function() {
                $(this).find('img').each(function() {
                    var image = {};
                    image.src = this.src;
                    image.x = x;
                    images.push(image);

                    x += 300;
                });

                x += 300;
            });

            mergeImages(images, {
                width: x,
                height: 350
            }).then(b64 => $('#output').attr('src', b64));
        }
    }
});