$(document).mouseup(function (e)
{
    var container = $(".tuslah-menu-medium");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $(".tuslah-menu").hide();
    }else{
    	$(".tuslah-menu").toggle();
    }
});