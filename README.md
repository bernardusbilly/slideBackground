### Slide Background 
Developed in Less CSS, this library helps the creation of slide background using pure CSS. Custom slide background is made in Less file and it is available for convenient usage of this library.

### Version
1.1.0

### How To Use
1. Install this library using git clone or download the file directly from github.
	```
	$ git clone https://github.com/bernardusbilly/slidebackground.git
	```

2. Link the CSS file to the html file.
	```
	<link href="your_css_path/slidebackground.css" rel="stylesheet">
	```

	note: The default CSS setting will have 4 pictures changing through a cycle of 7 seconds

3. In your html file just have these lines of code to begin with
	```
	<div class="slidebackground">
		<div class="background" style="background-image: url(your_image_path/image1.jpg);"></div>
		<div class="background" style="background-image: url(your_image_path/image2.jpg);"></div>
		<div class="background" style="background-image: url(your_image_path/image3.jpg);"></div>
	</div>
	```

### Customize
1. To change the number of photos used and length of time of each photo, open the slidebackground.less and change what is necessary
	```
	/* fill in part */

	@background : 4; // number of background
	@timer      : 7; // in second

	/* end of fill in part */
	```

2. To make the photo black and white, just add the class 'bw' in each 'background'
	```
	<div class="slidebackground">
		<div class="background bw"></div>
		<div class="background bw"></div>
		<div class="background bw"></div>
	</div>
	```