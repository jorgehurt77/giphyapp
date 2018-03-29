$(function(){
    populateButtons(searchArray,'searchButton','#buttonsArea');
    console.log("Page Loaded");
})

var searchArray = ['Dog','Cat','Bird'];

function populateButtons(searchArray,classToAdd,areaToAdd){
    $(areaToAdd).empty();
    for(var i=0;i<searchArray.lenght;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on('click','.searchButton',function(){
    var type = $(this).data('type');
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+type+'&api_keyTxGPb5QOCHX5JL2miMqBFXzPbaZVXy9Climit=10';
    $.ajax({url:queryURL,method:'GET'})
        .done(function(responce){
            for(var i=0;i<responce.data.lenght;i++){
                var searchDiv = $('<div class="search=item">');
                var rating = responce.data[i].rating;
                var p = $('<p>').text('Rating: '+rating);
                var animated = responce.data[i].images.fixed_height.url;
                var still = responce.data[i].images.fixed_height_still.url;
                var image =$('<img');
                image.attr('src',still);
                image.attr('data-still',still);
                image.attr('data-animated',animated);
                image.attr('data-state','still');
                image.addClass('searchImage');
                searchDiv.append(p);
                searchDiv.append(image);
                $('searches').append(searchDiv);
            }
    })
})

$('#addSearch').on('click',function(){
    var newsearch = $('input').eq(0).val();
    searchArray.push(newSearch);
    populateButtons(searchArray,'searchButton','#buttonsArea');
    return false;
})