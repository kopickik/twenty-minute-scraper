## Twenty minute scraper

### Task description

This is an exercise in web scraping.  This is a self test to see what would be the *very first* way that I would tackle the following AJAX-related scenario.

1. Visit https://www.vgmusic.com/music/console/nintendo/snes
2. Find all midi files belonging to FFVI
3. download them into a new folder locally

This will be challenging indeed, as there is **purposefully no semantic HTML** on the target scrape site.  My initial thoughts:

1. This will require a few regexp (to match the somewhat chaotic filenames)
    1. Also note that **HEADERS** and **table rows** are indistinct in the source. :sweat:
    2. Regex refreshser: https://www.oreilly.com/ideas/an-introduction-to-regular-expressions
2. And will need to make use of async filesystem operations
3. No webpage to speak of, no db, straight, simple tasks people!

### Why?

Because twenty minutes *can be* productive.
