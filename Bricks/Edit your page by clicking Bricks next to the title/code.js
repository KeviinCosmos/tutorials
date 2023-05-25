// Link to YouTube video
// https://youtu.be/ltblC98ioM4

(function($){
    $(document).ready(function() {
        $("#the-list").find("tr").each(function() {
            var postStates = $(this).find(".post-state");
            
            postStates.each(function() {
                if ($(this).text().includes("Bricks")) {

                    var link = $(this).closest("tr").find(".edit_with_bricks a").attr("href");
                    $(this).html('<a class="post-state__link" href="' + link + '">Bricks</a>');

                    var label = '<span class="post-state__label">: Click to edit</span>';
                    $(this).find('.post-state__link').append(label);

                    var hoverLabel = $(this).find(".post-state__label");
                    hoverLabel.hide();

                    $(this).hover(
                        function() {
                            hoverLabel.fadeIn();
                        },
                        function() {
                            hoverLabel.fadeOut();
                        }
                    );
                }
            });
        });
    });
})(jQuery);
