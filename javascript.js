$(function(){
    populateButtons(searchArray,'searchButton','#buttonsArea');
    console.log("Page Loaded");
})

var searchArray = ['Dog', 'Cat', 'Bird'];

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
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+type+'&api_keyTxGPb5QOCHX5JL2miMqBFXzPbaZVXy9Climit=10'
})