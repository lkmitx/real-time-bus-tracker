# Real Time Bus Tracker

#### A project for the MIT xPro course *Web Development with JavaScript*

<img src="https://github.com/lkmitx/lkmitx.github.io/blob/main/gfx/mitbus.png" width="310" height="310" alt="Map of MIT environs">

## Description

This project is a simulation of a real-time bus tracker, created in week 9 of the course. Using the Mapbox API with an access token, the Mapbox GL JS library, and an array of latitude and longitude coordinates to place a marker on a map of the MIT environs, `mapanimation.js` moves the marker to each bus stop sequence between the MIT and Harvard campuses. The `move()` and `reverse()` functions cycle through an array of coordinates and effectively simulate marker movement. An added feature -- when one button is pressed, the other is disabled for the duration of the simulation.

## How to Run

- Download the repository on your machine as a zip file.
- Unzip the file.
- Open the `index.html` file in your web browser.
- Press the first button to see the bus stops going from MIT to Harvard.
- Use the second button to see the bus stops going from Harvard to MIT.
- Reload the page to reset and start over.

## Roadmap of Future Improvements

Further development of this repository could include the following:

- [ ] Connect to live bus data from the Massachusetts Bay Transportation Authority and update campus bus movement in real-time.
- [ ] Add estimated arrival times from the MBTA if possible.
- [ ] Add button to stop movement at any given stop.
- [ ] Consider adding other useful map features from the Mapbox GL JS library.

## License Information

The MIT License (MIT)

Copyright (c) 2022 Latika K.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
