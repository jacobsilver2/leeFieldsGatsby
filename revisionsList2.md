# Revisions 2

## Homepage/Modal

- [x] Overall, I think it would help the site to have a little more motion in its transitions. More of a fade from modal to page and from page to page. I think that could be enough, or if there’s an interesting way the images load on the page without being over the top.

> I added a 1 second crossfade in between pages. I think that should help.
> Not currently working on the video modal. I'm working on a fix.

- [x] On these sites we like that the videos are already moving (without sound), so that the site feels really lively. We think it also feels really clean in how you can instantly view the video without a play button in the way.

> The video should autoplay. Is it not working for you?
> I have removed the controls and added a text-based hover cursor. That is awesome! Great idea. (still tweaking it a little bit, but it works)

- [x] In order to keep the mouse experience throughout, can we remove the Prev and Next buttons and make them hovers that change on the right or left sides? And move “sound on” to the bottom right corner?

  > Done. One thing now, which could be a UX issue: The prev/next cursors work everywhere on the screen, with the exception of over the close button and the bottom controls. This now means there is no way to play/pause the video. It will autoplay, but that's all the user gets. No ability to pause. Also fyi, this redesign is now intended to work for the desktop view. It won't really hold up on mobile. Waiting on mobile designs to build the mobile modal. Say that 10x fast!

- [x] For the mobile homepage, can we have the image moving without controls? I think not having the control will aid in a clearer, faster experience for a mobile user. In this case, Id want to encourage the user to view the entire homepage and then navigate to the video.

  > Done

- [] Is it possible to have a video modal specifically for mobile? Ex: becomes a list of video still and title? Once clicking the image that then pops up the individual video for viewing. In this case, I think the image is still but no controls.
  Hear your concern on a mobile user not knowing its there, but when I saw this site on mobile I felt that I wasn't missing any direction. It was clear to me to want to click on the photo/clip to expand it.

> I'm pretty sure I know what you mean, but would it be possible to send a mockup? I just don't want to spend a ton of time coding something that isn't what you were intending.
> What I imagine you mean is that there is a modal which has a list of all the videos, displaying a still and title for each video. Clicking the still will open a new modal, which will play the video. (btw I liked in that example you sent, they were using native vimeo controls on the video modal. No funny business, everyone knows how to operate those controls, and full screen is easily accessible.)

## Shop

- [x] Attached is a screenshot of when I extend my window then it becomes off-balanced
      These are some examples I noticed that maintains its margins/proportions. A lot are four columns…Would it help if the images were a different aspect ratio so that it could be more responsive? Or do you need it to be four columns (this will shorten the amount of rows which wouldn’t be ideal as there arent many products)
      https://sasaijewelry.com/shop/
      https://mineralhealth.co/

> The way I have it is that there is no fixed amount of columns, and will increase depending on your screen width. I liked that because since most people will be using phones, tablets, or laptops, it will almost always be 3 columns or less.
> I just made a fix to make it always have even left-right margins, which should solve the problem of it feeling off-balanced, but it gets screwed up because the images are not the same dimensions. (I just found all these on the internet). Once we get in some images that all have the same dimensions, we should be good.

- [x] Can you also condense the spacing in the titles and descriptions and purchase button?
  > I'm not 100% what you mean here. Are you referring to vertical spacing or letter spacing?
  > Assuming you meant vertical spacing. I've reduced it. If that's not what you meant please let me know!

## Logo Transition

- [x] It’s still feeling in a weird in-between, so we think we should make it feel more intentionally separate.
      Can we have it so upon landing, it is the same. But the user simply scrolls down the large logo and nav disappears without shrinking. When they scroll back up then the nav reappears with the smaller logo. Would have to find this, but I think I’ve also seen it how once you land and you scroll past the large logo it disappears and you’re left with the navbar for the rest of your visit.
  > Yes, I like this solution. This will also help to solve the problem with the mobile nav looking weird. I'll make it so anytime the user is scrolling down (or has just scrolled down), the header will disappear, and anytime the user is scrolling up (or has just scrolled up), the header will re-appear. I'll also make it so anytime the user is scrolling, the secondary, mobile nav will disappear. I gotta admit I like that parallax effect on the seed.com example you sent. I'm not going to implement that for now, but if you want it just say the word.

## Mobile Nav

- [x] On the mobile nav, I do like how it looked when I open it when I first land. But I think once you scroll down and the name becomes a part of the nav, I think the menu falls apart (See screenshot) I hate to keep repeating this reference but I think how lekhoa.com has their mobile nav a little longer will help. I agree that a full-screen menu is not ideal. It's unfortunate the name is so long on mobile…if it helps I think if the name was centered on two lines it might look cool or I also don't think the nav needs to always show when scrolling on mobile.

> Yeah, I hear you. For now, all I've done is what I stated in the paragraph above. I've added a function which will remove the secondary mobile nav whenever the header/nav gets hidden. This might help the cause as well. Please let me know if you think that is sufficient, or if there's anything else that should be done.

# About Page

- [x] Understand it will be different from desktop to mobile, but can it just be one page? Nest contact info under the about.
  > done.

## Other Minor Details

- [x] On the video modal, can we do the all caps style for the titles?

  > Not sure if you mean just the title of the video, or all the controls? I did everything, so please let me know if that's what you meant.

- [x]
  When I submitted my email, it doesn’t reset itself as I go to other pages.

  > fixed.

- [x] The error message shows up as a serif, unlike the submitted message.

  > fixed. Good catch!

- [x] Is it possible it can show up on the line/in the field in the site font rather than underneath?

  > I actually don't think this is possible. The reason is that is there are two forms of validation, one on the front end, and another on the backend (mailchimp in our case). So, if you enter an invalid email address, you will get an error message from the front-end (and the submit button will be disabled), which will persist until you enter a valid email address. For that reason, there can be a state where there is an error message as well as text in the input field, so I don't think they can co-exist. (see attached screenshot)

- [x] We still feel strongly that it is strange to have the city as a link. It seems confusing to link to “Houston, TX”. If feels like it would link me to a wikipedia page about the city. If it helps I think it’d make much more sense to link to the venue or festival in addition to tickets.

  > Gotcha. I removed the link on the city.

- [x] On desktop, the spacing of “upcoming shows”, can it feel more even in between the video and tour dates?

  > Done. It's now an equal value on top and bottom. That value is a percantage of the width of the screen, so it will dynamically change, but always equally.

- [x] As browsers get smaller, is it possible to ensure that “and” always stays on the second line in the name?

  > That should be fixed now. There was about a 100px range where it wrapped. The solution was to bump up the font size by .4 at the mobile breakpoint.

- [x] Can the stroke on the top nav match the strokes around the footer?

  > Are you referring to the bottom-border? Yes, it's 2px on the top nav and 1px on the footer. That's how it looked to me on the mockup. Now changed to 1px.

- [x] Can the nav get slightly thinner in height? Slightly smaller logo to help this.

  > Done. Right now I took it down 1rem(10px), and didn't adjust the logo size. If you feel anything needs further adjustment, lemme know.

- [x] Can the height of the footer get smaller? Approximately half the height.

  > Took care of it on the desktop view.
  > For mobile, it's a little tougher because of the block elements. I could make the icons a little smaller and that would help, but perhaps you're only referring to the desktop footer...I'm not sure. Lemme know.

- [x] On the fonts, if we haven't figured it out, I actually don't mind everything a little bolder, but it is unfortunate for body copy on the about and on the product description. Which fonts did you guys purchase? Only text weights? Forma is kinda weird in which it makes styles for given sizes and then weights within that. Ex. a banner size is for large scale and within that you can choose light, regular, bold, etc.
  > GOOD GRAVY I FINALLY SOLVED THIS.
  > Things still feel a bit heavier than some of your mockups, but it seems much better now. I haven't purchased anything yet, just demo'ing for now until we finalize the revisions. I think for purchasing the fonts, you have to separately purchase the light, regular, bold, etc, weights. So that was why some of the font weights weren't doing anything for me.
