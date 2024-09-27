HTML
-----------
create div with class & id, to host the background image.
create div with class, as a container
	insert heading and paragraph

CSS
-----------
	body -> margin, font type

	bacg image -> width:100%, height:100vh, backg:url(), backg-position to center, backg-attachment:fixed, backg-size (zoom-in)

	container -> padding:100px

	@media for max-width:500px -> container to have only 10px padding


JavaScript
-----------
get bg-image element

insert event listener to the window -> 'scroll' and a function to update image

create a function:
	change the style of bg-image opacity -> 1 minus pageYOffset of the window and divide it by 900 (less than 1)
	change the style of bg-image bg size -> current size minus pageYOffset of the window and divide it by 12 + string "%"