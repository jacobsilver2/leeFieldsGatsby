# Announcement banner:

- [x] Can you add a little bit of increased tracking in the typestyle? Had it at about +50 in the mocks.

  > done. For that, I sort of had to eyeball it, because the news ticker library I'm
  > using only accepts px, rem, em, etc. Lemme know if this works for you.

- [x] Can we shorten the spacing between black and grey lines again? Approx 1/3 smaller.

  > I'm not totally sure what you mean. Are you referring to the spacing between the text elements? If so, see my comment below.

- [x] I noticed when I play with adjusting the browser size that at times the elements in the banner overlap. Not the hugest problem, but if there’s a way to avoid that, great!
  > Unfortunately this is a bug in the css library I'm using to make this component, and as far as I can tell it's the only library which does this sort of thing. This is why I had initally set it as a bit wider than you had spec'ed. If you resize the window (or switch from portrait to landscape on a phone), it will go back to normal, but on first render it won't look right and will overlap. I'm tempted to go back to the wider space so it never overlaps.

# Home/Modal:

- [x] On desktop only, Shorten vertical spacing on show listings approx 1/3 less.

  > Done. I set it to be a shorter vertical spacing on 1200px and above, which is really more like tablet (and above spacing). Seemed a little nicer.

- [x] Love the play hover!! Can it get a little bigger? Can the Play and Next be the same size as the other controls?

  > Done. However, support for custom cursors that are this large will be removed from Chrome at some point (they said it would be June 2019, but apparently they haven't removed it yet). That is why I made it a little smaller than how you had spec'ed.

- [x] Ideally, I would like Play and all the video controls to be the same size. So it can get bigger a few points or so overall, I’m not sure what the balance is because I imagine its going to look puny on the homepage but on the modal I’m liking that its out of the way and smaller.

  > Done. I was hesitant to make the close buttons, title and sound on/off buttons any larger on the modal, because they would have overlapped on mobile screens, but since we're now using a mobile-specific modal, it shouldn't be an issue.

- [x] Also loving that the video fills the screen instead of how we had it originally mocked. I’m not missing the play/pause at all. Will we be able to keep this with dailymotion as well? Will daily motion show the title/related videos like youtube (I'm hoping not but its not the end of the world is so)

  > Yes, that was a happy accident. I was having a hell of a time dealing with all these videos that have different aspect ratios. Once we deal with the copyright issues on Dailymotion, we'll switch back. The reason I chose DM over YT or Vimeo was because you can totally remove every bit of control/overlay/title/releated videos with DM, unlike YT or Vimeo. So once we can get back to DM, the controls will look way better.

- [ ] We’re a bit busy right now, so I’ll need a little more time to get you a mockup. But yes, exactly what you said. Pretty much exactly like the mobile homepage of lekhoa or basically how you had the music page created, but a rectangular image. Can you just use a placeholder image for now? Let me know if that makes sense or if you’d still want a mockup. Do you think this would solve the video page on mobile problem? I think since they would see the title on the list, then we can eliminate it on the pop-up mobile modal in this case and only have “close”. And the sound would come on without having to turn it on/or IDK maybe its with daily motion in this instance?

# About

- [x] On mobile, can you decrease the headers for each contact (management, us publicist, etc). Maybe the same size as join our newsletter?
  > Done. It's now the same size as the Signup title at mobile screen widths.

# Tour

- [x] Same comment on spacing from home page.
  > Done.

# Music

- [x] On mobile, headlines may need some tracking or maybe increase point size to help legibility
  > Done. I increased the tracking by a little bit, but didn't adjust the font-size.

# Shop

- [ ] Can we remove the loading dots when clicking shop?

  > You sure about this? There are only two portions of the site which load dynamically (meaning, they fetch data when the user loads that portion of the page) - Shows and Shop (I made that choice because those are the two portions of the site that Toby will be updating the most frequently). That means for those two pages, it will load data, and on slow connections (I'm thinking Europe...), they'd just see nothing until the data loads if we got rid of the loading dots. I'm happy to get rid of it, but I think some form of a loading indicator is a good thing from a usability standpoint.

  > If you want to see what other loading indicators are available for the library I'm using, check out https://www.davidhu.io/react-spinners/. I'm using "BeatLoader"

- [ ] Yes, I agree I like having 3 columns or less. I’m having trouble envisioning how it’ll work with correct image files, could you use a stock image or something else in its place so I can see how it responds?

- [ ] Break point for 1 column seems to early(see screenshot)

- [ ] Not sure if its just my phone, the margin doesn’t show on the right hand side (See screenshot)

# Nav

- [x] Mobile nav, the fixes definitely helped. Still think some more can be done. I’ll get back to you later this week. I think I need to explore visually what could help.

# Footer

- [ ] Email form is still stuck for me once I enter information :/

- [ ] Yes, It looked fine on mobile, thanks! However, can you maybe shorten the height of the newsletter sign up rules? and/or bring the submit line closer to the “join our newsletter”

# Other

- [ ] Body copy seems like its the wrong weight (too light) on the bio and shop description

- [ ] This is extremely minor because we really love the extremely small margins, but can you make it a hair bigger, like literally only a hair or two. On my browser, the grey bar shows up on the right side as I scroll and I just want to give the text that is on the right the tiniest space from it. It bothers me less on the video, than on the copy in the nav and ticket listing.
