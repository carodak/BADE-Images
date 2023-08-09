# Methods and functions
Here are some functions and methods that we developed in the Builder's component codes that may not be intuitive:

  * [InitializeSlider1()](#m1)
  * [ChangeSlider1Color()](#m2)
  * [InitializeSlider2()](#m3)

## <a name="m1"></a>InitializeSlider1()
Initialize ```slider1``` marker to position 0 and make it grey.

```slider1```: Slider component
> We define the position and colour of the slider and then we apply these changes with the onChange and setupSlider methods.

## <a name="m2"></a>ChangeSlider1Color()
Changes the colour of the marker in ```slider1``` to black.
>  This function is called once the participant has voted on the slider.

## <a name="m3"></a>InitializeSlider2()
Initialize ```slider2``` marker to the position of the marker of ```slider1``` and make it grey.

> We hide slider1 at the end of image1 and initialise a second slider at the same position. This makes it easier to record scores and assign them to image 1 or 2. 

> There is a small bug if the marker of slider1 was black and that of slider2 is grey, the image flashes a little to pass from black to grey.

