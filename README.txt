JACOBABAD CITY WEBSITE — README
Made by: Saqib Anwar
================================================================

★★★ WHY INFINITYFREE WAS SHOWING ERRORS ★★★
----------------------------------------------
InfinityFree limits file size to 10MB per file (1MB for HTML files
specifically) — confirmed on their own support forum. If you were
using a single-file version of this site before, that file was ~29MB,
which InfinityFree flatly rejects. This zip uses small separate files
instead (index.html is ~35KB, the largest file — the video — is
8.5MB), all comfortably within InfinityFree's limits. See HOSTING.txt
for exact upload steps for InfinityFree.

★★★ HOW TO OPEN THIS — PLEASE READ FIRST ★★★
----------------------------------------------
This zip uses proper, separate files (HTML, CSS, JS, images, video) —
the correct professional structure. This means the folders MUST stay
together for it to work. Follow these steps exactly:

1. Download the zip file to your phone or computer.
2. FULLY EXTRACT it using a real file manager or "Extract All" —
   do NOT just tap the zip and preview index.html from inside it.
   On most phones: open your Files app, find the zip, tap "Extract"
   or "Unzip" (not "Open" or "Preview"), and choose a location.
3. After extracting, you should see a FOLDER containing:
     index.html
     css/  (a folder)
     js/   (a folder)
     assets/  (a folder, with images/ and video/ inside it)
     README.txt, robots.txt, sitemap.xml
4. Open index.html from INSIDE that extracted folder — with all the
   other folders sitting right next to it, in the same place.

If index.html ever ends up on its own, separated from its css/, js/
and assets/ folders, the page will load with no design, no photos,
and no video. That's not a bug — it's just how any website works: the
browser needs to find those files next to index.html. If you're ever
unsure, the safest test is: does this folder, when you look at it in
your file manager, show index.html sitting alongside css, js and
assets folders? If yes, you're good.

WHAT'S IN THIS FOLDER
----------------------
index.html            → the whole website structure (all sections)
css/style.css          → all styling (colors, fonts, layout, responsive rules)
js/script.js            → all interactivity (menu, map search, gallery, theme switch, newspaper day-strip, lightbox, contact form)
assets/images/          → all 12 real photos used across the site
assets/video/jacobabad-tour.mp4 → the city tour video (with music)
robots.txt, sitemap.xml → SEO files, see the SEO section below

SECTIONS ON THE PAGE
----------------------
1. Home / Hero        – intro with a search box that jumps straight to
                          a place on the map
2. History             – the story of Jacobabad, founded 1847 by
                          General John Jacob, with a timeline
3. Places to Visit     – 8 cards (Railway Station, Victoria Tower,
                          Green Dome Mosque, Grand Domed Shrine,
                          Blue-Tiled Shrine, Village Life, Thull
                          Tehsil, Garhi Khairo Tehsil) in a split
                          photo/story card style — tap any card to
                          read its full history
4. Video                – the tour video, playable directly on the
                          page, with a download button
5. Gallery              – 9 photos, each with a category ribbon —
                          click to view full-size with its history
6. Map                  – live embedded Google Map with search
7. Newspaper             – day-by-day strip with links to 5 Sindh/
                          Pakistan dailies (Kawish, Sindh Express,
                          Ibrat, Dawn, The News International)
8. Contact / Footer     – full multi-column footer with your phone,
                          WhatsApp, email, and a working message form

THEME
----------------------
Blue-and-cyan colour scheme (matching the reference site you sent),
with a pink accent used for category ribbon badges on the Places and
Gallery cards, and dark navy for night mode and the footer/video
sections.

CONTACT FORM — HOW IT WORKS
----------------------
The message form is connected to FormSubmit.co (a free service, no
backend or account needed). Any message from any visitor, using any
email address, is delivered straight to saqibabro595@gmail.com — that's
automatic and not tied to who's sending it.
ONE-TIME STEP: the very first message ever sent through the form
triggers a confirmation email from FormSubmit to saqibabro595@gmail.com.
Open that email and click the confirmation link once — after that,
every message goes straight to your inbox with no further steps.

SEO
----------------------
Added: page title and description built around "Jacobabad", Open Graph
and Twitter Card tags (for link previews on WhatsApp/Facebook),
JSON-LD structured data telling Google this page is about the place
"Jacobabad", plus robots.txt and sitemap.xml.

Also added "JCD" throughout — this is Jacobabad Junction's real,
official railway station code (verified), so it's an accurate keyword
to target, not a made-up one. It's in the page title, meta description,
keywords, Open Graph/Twitter tags, the structured data, and mentioned
naturally in the Railway Station card itself ("station code JCD").

Important — what this can and can't do: none of this makes Google show
your site immediately. Being found for "Jacobabad" or "JCD" searches
needs: (1) hosting this at a real domain, (2) submitting that domain to
Google Search Console, (3) time — usually days to a few weeks for a
brand-new site to get crawled and ranked, and (4) other sites linking
to yours. Once you have a domain, open robots.txt, sitemap.xml, and
index.html's <head> section, and replace "https://jacobabad.pk/" with
your real domain everywhere it appears.

CUSTOMIZING
----------------------
- Photos: swap any file in assets/images/ — keep the same file name and
  it updates everywhere automatically.
- Newspaper links: edit the "Newspaper" section in index.html.
- Text: all copy is plain English/Urdu inside index.html — search for
  the heading you want to change and edit directly.
- Colors: all colours are defined once at the top of css/style.css as
  CSS variables (--madder, --turmeric, --moss, --indigo-950, etc.) —
  change a value there and it updates across the whole site.

CONTACT ON THE SITE
----------------------
Phone / WhatsApp: 0334 9867384
Email: saqibabro595@gmail.com

Enjoy the site — built for Jacobabad, by Saqib Anwar.
