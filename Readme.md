**Project title**
-- Anime Valley --

**Project objective**
This project aims to help me solidify my learning in Javascript and also recall previously learned HTML and CSS languages by requiring me to build a single page application (SPA).

**Project Description**
The SPA is built in HTML, CSS and fetched information from the below API in Javascript.

The idea behind this SPA is that users can move along the page to click on any of the 4 succulents images and a anime quote will be randomly generated, fetched from https://animechan.vercel.app/.

The user can then choose if they like or dislike a quote, therefore determining if they may be interested in watching the anime at a future date in time.

If they # liked a quote, an alert will pop up to let them know it has been added to a list that can be revealed at the end.

If they # disliked a quote, they will be prompted to move along.

At the end, they can click on the "Reveal your anime to watch" button and a list of anime titles will be displayed.

**API used**
https://animechan.vercel.app/

**Project run through video**
https://www.loom.com/share/cd9e7bf6a02940d5a8adb31c6e4cfcc3

**Live GitHub Page link**
https://janicedc.github.io/anime-valley/


**Future improvements**
- The quote display box can be made to look more appealing with title of aniome and qupte being displayed separately and it contains longer quotes better
- Consider numbering the list rather than bullet points
- Consider displaying quote + Anime title if it is more visiually appealing and makes significant impact to user experience
- There is a slight lag in fetching quote and user may get impatient and click again. When this happens, another quote is re-fetched and the first quote is missed.
    -- Consider how to improve fetching time?
    -- Consider how to block a second click fetching before the first one has been fetched