$(function() {
    $('#textBoxTranslator').keyup(function() {
        var number = new_count($(this).val());
        console.log(number);
    })
});

function new_count(word) {
    word = word.toLowerCase();    

    
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
    word = word.replace(/^y/, '');      
    return word.match(/[aeiouy]{1,2}/g).length;                    
}