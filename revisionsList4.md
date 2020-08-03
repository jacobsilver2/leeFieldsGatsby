# Revisions 4

## Announcement Banner

- [x] Tracking looks great thank you.

  > Great!

- [x] Can you send me a screenshot of how it looked where the spacing accommodated for the bug?
  > Ok, I think I actually just figured a workaround for this bug. If you see any overlap, please let me know.

## Nav

- [ ] On mobile, I’m not sure what the answer is but the headline dances around when the announcement banner or nav is open and closed.
      But maybe this new design will help, see mockup.

> Yeah that started happening when I put in the header which hides and shows when scrolling. I'll incorporate the new design and see if that solves it.
> Update: I found the bug that was causing that issue. I had to rework the header a bit, which may have affected the spacing between the header and the content below it when scrolled to the very top of the page. Please take a look and lemme know if you think anything needs tweaking.
> Update2: New design is up. I'm thinking maybe a grow/shrink animation as the secondary menu opens and closes?

## Home Page

- [x] On Mobile newsletter module, thanks for moving up the form closer to the headline. On mobile, can we center the whole unit (headline and email form) in the space? See screenshot

> Yes, sorry! I should have done that last week. It should be fixed now. It's a somewhat manual process because the css does odd things with line-heights sometimes.

## Hover

- [x] When I looked at the site when you sent this last week, it seemed like the hover was being overridden as you said. But using it today, it looks like its functioning great.

  > Yep, I fixed that over the weekend ;)

- [x] PLAY vs PREV/NEXT vs video controls still look different sizes on my end.
      If matching all the sizes didn’t work out, it would be nice if there was sizing alignment in at least two of the use cases. How does it look if either 1. Play and Prev/Next match OR 2. Prev/Next and the video controls match. Whichever seems less weird to you?

> Yeah, this is not a scientific process, because all these cursors are just images. I increased the sizing of the prev/next cursors, and I think they look about the same now. That seems to be nicer to me than matching it up than the controls.

## Video Modal

- [x] Preferred the fade than the new swipe down animation when the modal comes up.

> No problem. It's back at fade.

- [x] On mobile, it's feeling a little redundant with the image/title/youtube embed. I think let's just have the title and item count as underneath each video (see mockup). Is it possible that the embedded videos don't show the youtube title?

> I love it. Making it now. Unfortunately the videos have to show those titles, as youtube doesn't allow removing any more overlay than I already have.

## Shop

- [x] Centered alignment helped a lot, wonder if the filter should always align to the right column? and maybe increase the overall width?

> Ok the filter is now aligned right...I think I prefer left-aligned fwiw.

- [x] I’d be satisfied with this, but if it's possible, I'm still hoping for something that feels like the example sites and maintains the tight margins even at larger browser sizes and I’m not sure how/if we can get there?

> Oh ok, I didn't realize that's how you wanted it. Totally doable. It should be more like you wanted it now. I set the single-column breakpoint to just before the title text starts wrapping fyi. The nice thing about this style is that a mobile phone in a landscape view can see 2 columns now. 1 column on landscape looked super weird to me.

## Music Page

- [x] Can you add some more spacing between Buy and Listen links to help differentiate them?

> done

## About

What's the weight and tracking on the headline? Something looks different, I apologize if this was because of a previous request. I think maybe less tracking? Bothers me less so on mobile than desktop.

> Hmm, I don't think that's changed at all. It's large body copy. FormaDJRText. 90pt, 0 tracking, font weight regular. I decreased the letter spacing to -.2rem now. Let me know if you like that.

## Contact

- [x] On both desktop and mobile: Can we move up the copy a little bit? Approximately the height of "Management"/like one line up if that makes sense.

> Done. For desktop, I wasn't sure if you wanted the About and Contact links to come up with the copy or not. Right now they are not aligned with the copy (which I moved up).

# Etc

- [x] Body copy weight still seems off on bio vs contact vs shop description. Looking for it to feel the same weight even if its different sizes across pages. Seems like its either too thin or too bold.

> Ok I just set the body weight to 400 in the Contact page, and I think they should all be the same now. The issue is that we have weights 300 (which you thought was too light) and 400, which is what we have now. If there is something in between, we don't have it and we're already about to around $300 or $350 in fonts and I don't think we want to go much higher than that.

- [x] Loader: Prefer the “Cliploader” Is there a way to customize the placement of a loader? Maybe more in the center and smaller so it feels more intentional. Maybe we could add opacity overlay to the page/grey out the page slightly if it's loading?

> I changed the loader to Cliploader, and now it's aligned to the middle of the page, and the size is pretty small. I didn't add any opacity to the page, because it hasn't loaded yet...I'm thinking about how I would fix that, it would require restructuring some things and I don't know if it's worth it at this point for what is likely something that'll only last at most like a second...

- [x] When the logo is on one line in the nav, it looks a little thinner than in the mockups. it doesn't bother me, except on mobile nav. If its something that can be fixed, great, if not that's ok. I'm not sure if its just the font issues coming up and I don't want it to get too bold and illegible on mobile when we don't have a ton of space.

> Ok I just changed it from an h3 to an h2. It's possible that's what you had initally.
