# Desktop

✅ On the announcement banner, could we reduce the spacing between the black and grey lines? Maybe by about 2/3rds?

◻️ On the videos, I thought that we were going to go with a hosted video vs custom player, but I am liking it without! Feels sleeker without a bar over the video! On the homepage, I’m feeling like I want almost no controls at all…wonder if maybe could use a mouse hover to indicate to press play instead of something always present. I don't mind having the sound option if it was more discrete, but not sure if it's super necessary. The only pro I think of having it is being able to watch a full video from the homepage since once you open the modal it would have to start over?

> I hear you...the only drawback to having the sound icon on hover is that it wouldn't
> be seen on a touch device, and the user likely wouldn't know it would be there.
> I did talk to Toby a few days ago, and he expressed to me that he kind of liked it better on the
> first design pass where there was a video chooser on the homepage. I guess he liked that it
> encouraged the user to stay on the homepage.
> I'm happy to do whatever, but let's decide first. I wonder if we just had some sleeker icons,
> would that make all the difference? On your designs, the icons were much slimmer than what I
> have. Yours are much nicer!

✅ For the logo changing from large to small, can it feel more seamless like one object rather than two…Something more like this. However, I noticed that a lot of examples are only changing the size/position, whereas with ours we’d have to change from 3 lines to 1 line and the font style…is that possible? If not, I think there is an alternate solution we can discuss.

> It's not technically possible to have it actually be one object,
> due to the way I've structured the elements. The big logo is a
> separate element from the small logo, and the mobile logo
> is also separate. But, I added some animations that shrinks and
> fade each logo as the user scrolls, simulating the feel of
> one element. It's pretty cool! Lemme know what you think.

✅ On the tour dates, can it only hover on tickets and not the city?

> That is how I had it, but Toby told me the other day he wanted
> both the tickets and city text to be linked to the same ticket
> link.

◻️ The column/scaling/spacing on the shop page is a bit odd. Is it possible to maintain the small margin style? If not, maybe should just be centered?

> I'm not totally sure what you mean here.
> That way I currently have it is that it's a grid that can fit
> as many elements as possible with the available width. As the
> screen width shrinks, it will wrap the elements until it hits
> one element per row.
> But maybe you're commenting more on the size of each card?
> Once the screen width becomes mobile size, the cards shrink
> a bit. Is that what you're referring to? Should I use those
> sizes for the larger screen widths as well?

✅ On the email sign up can it not have a blue outline/bg when typing?

> good catch!

◻️ On the type weights…could it be like when we specify the “font-weight: 500; font-style: normal;” that’s throwing it off? Can we see how a lighter weight looks/did it appear closer to how we had it that way?

> Actually, here's a theory...maybe with Adobe, when you specify a
> lighter weight (let's use DJR Text Regular as an example), it
> actually loads DJR Text Light. I only have DJR Text Regular and
> DJR Text Medium, and the docs for the font seem to indicate that
> each font only includes one weight, and in CSS you use
> "font-weight: normal" and "font-style: normal".
> So I wonder if I install DJR Text Light and use that in place
> of all the paragraph elements, if that will do the trick. It
> will require purchasing one more font, but I'm sure Toby
> will be ok with that.

> Update: I just installed DJR Text Light, and honestly
> I'm not sure how much of a difference it made. I guess
> the only other thing I can do would be to install
> DJR Text Micro Light.

# Mobile

✅ Can we have a two-line menu icon instead of three lines?

◻️ Still thinking on this…but curious about having the menu take up the whole screen…

> Lemme know. That's how I initially built it, with the nav
> elements centered vertically and in a column.
> I ultimately decided against it...but I'm generally not into
> those full screen mobile menus.
> Totally happy to put it in though if you'd prefer.

◻️ For info, maybe we could make it one page and put the contact info under the bio…or maybe something like this although it probably works better since they have 4 categories rather than 2.

> I really like that example you linked to!
> It would be easy enough to build, but I do kinda like the
> mobile info page as it is, partially because it's a similar
> design as the shop page, so there's continuity there.

◻️ For tour dates, wonder if we can/need it to go slightly bigger on the point size.

> Yeah, I hear ya...only thing is I need to accomodate
> for as much space as possible for the venue column
> as well as the city column. The way I have it now,
> if I go any larger on the font size, the month text
> will wrap, which doesn't look good. If it's definitely
> a problem I can increase the size for the month column
> and decrease the size for the venue name column, but
> it definitely is a slipperly slope and I thought it
> was too small at first, but actually looking at it on
> my phone seemed fine to me...

✅ Like the altered footer, music, and shop.

◻️ Thinking on if we need to think through an alternate video modal on mobile.

> I agree. I just did a bunch of work on it yesterday, I'm not sure
> if you wrote this email before or after I applied the updates.
> It was kind of crazy getting all this to work, because Lee's
> videos are all different aspect ratios, so they kept overflowing
> over the text elements. You'll see I placed all the text
> elements the corners. It's cool, but perhaps it's weird for a
> user to be tapping on text instead of buttons or icons...and the
> text is pretty small on mobile.
