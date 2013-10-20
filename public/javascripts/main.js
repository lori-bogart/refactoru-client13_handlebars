$(function(){
        var searchResultsTemplate = $('#search-results-template').html();
        var renderTemplate = Handlebars.compile(searchResultsTemplate);


        $('#search').on('keyup', function(e){
                if(e.keyCode === 13){
                     // console.log("keyup worked");
                        // do something
                        var val = $(this).val()
                        // console.log(val);
                        $.get('/search', {search : val}, function(data){
                             var render = renderTemplate(data);
                             $('#results').html(render);
                                
                        });
                }
        });
});


