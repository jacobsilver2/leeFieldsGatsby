# Revisions List 5

## Shop

- [x] The shop page is just what I wanted! Yes, let's revert back to the left aligned filter. That's my bad, I meant to say it should be aligned to the left column if the width was going to be smaller. I actually wrote the previous email really late last night to send out this morning, so I must've not been thinking straight!

> All good! Fixed.

## About/Contact

- [x] Yes, let's align "about/contact" filters to management as well

> Done.

## Mobile Nav

- [x] Can we have it so when its open on landing it will still show the smaller one line logo?

> Ok I think I got this right. It's kind of hacky, because the way this works is that the small logo disappears when the big logo is ~80% out of view. So to override that only in the beginning (when the big logo is in view) has to ignore the rules...
> So the way I'm solving this problem is by having the small logo visible at first, but having the website monitor if the user is scrolling, and if they are, to make the small logo invisible. You can see this working if you scroll just a tiny bit right after first launch. But if you scroll fast (making the big logo out of view), it will just disappear, which is what we want. This might require a bit of testing to see if it actually worked. Sorry for the long explanation, it's just a feature I hadn't ever thought about. It's actually really interesting :) (dorky coder, I know.)

- [x] Can the underline on hover be slightly thinner?

> Done.

## Mobile Tour

- [x] Headline is appearing super close to the nav on my phone, see screenshot

> fixed.

## Etc

- [ ] For last touches, are you able to get all the high res images for throughout the site?

> I think that is a question for Toby. I don't have any (I just got these images from the internet). Toby?

- [x] Are there tour dates available for launch or would we have to hide that?

> As far as I'm aware there aren't any upcoming tour dates. I have a basic check which checks if there are shows, and if not, displays some text. The current rev will reflect that.

- [x] For fonts, no problem. Let's stay with the 400 then.

- [x] Noticed the nav is sticky now, but that's fine with me since its working better with the large logo

> Ah damn, I hadn't noticed that. That must have started happening when I changed some of the layout css with the header on the last revision. It is a bummer, but the nav seems to functioning really well now, and if you're happy with the sticky nav, I say we stick with it (no pun intented). Otherwise I can hunt down the bug.
