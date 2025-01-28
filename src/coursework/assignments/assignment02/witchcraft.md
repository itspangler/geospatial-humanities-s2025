# Assignment 02: WITCHCRAFT!

##### *Using data classification to make cartographic propaganda*

| ![witch house](https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:st74fc431/full/pct:25/0/bitonal.jpg) |
| :-: |
| *The Salem Witch House, built 1642, from the [Boston Public Library Arts Department](https://www.digitalcommonwealth.org/search/commonwealth:6d570w881)*. |

## Introduction

"The goat is loose again, William!" cries your wife from across the hall. *Not again*, you think. In your rush to stand up, you knock over the jar of herring you were pickling. The air is pierced twice: first, when the glass breaks, and then again, a moment later, when the baby—your baby, sweet Samuel—begins to wail. There will be hell to pay for that later, but for now, you have a goat to catch.

I've got bad news: you are a 17th century peasant farmer. Between chasing down your shank of a goat and feuding with the neighbors (they are heretics), you barely have time to think about how much your life has really *sucked* lately. Your wife Katherine, teenage daughter Thomasin, preteen son Caleb, and young fraternal twins Mercy and Jonas were recently banished from a nearby settlement over a religious dispute. One day, after your newborn son Samuel suddenly disappears while under Thomasin's care, you begin to suspect there is something dangerous lurking in the secluded woods near your farm, and ...

... whoops. Sorry, I got a little mixed up. That's the plot to Robert Eggers' critically acclaimed 2015 film *The VVitch* – not instructions for this week's assignment. But hear me out: while this week's assignment doesn't deal with disappearing infants or fugitive livestock, it *does* deal with witches, and I *will* need you to occupy the headspace of a 17th century peasant while you work on it. Let me explain.

![family](images/image001.png)

## Context

Between the 16th and 18th centuries, thousands of people were accused of being witches during a [global social panic](https://en.wikipedia.org/wiki/Social_panic) around witchcraft. Today, we know this panic as the witch trials.

There are all sorts of reasons why you might want to study witch trials. One reason, as argued by the feminist political economist Silvia Federici – and highlighted in [this short podcast](https://www.scientificamerican.com/podcast/episode/the-surprising-backstory-behind-witch-hunts-and-reproductive-labor/) – is to trace the rise of capitalism through state-sanctioned reproductive discipline. In *[Caliban and the Witch](https://www.akpress.org/calibanandthewitch.html)* (2004), Federici argues that the global population crises caused by imperial expansion in the 16th and 17th centuries corresponded with a deepening control over (women's) reproductive labor by the state. Building on this point, she analyzes the witch hunts of the 16th and 17th centuries as wars waged against women's bodies that "demonized any form of birth-control and non-procreative sexuality" (2004:88). Every October, we're reminded of the witch trials that occurred around the corner in Salem, MA, but those were small compared to the witch trials in [England](https://en.wikipedia.org/wiki/Witch_trials_in_England) and [early modern Scotland](https://en.wikipedia.org/wiki/Witch_trials_in_early_modern_Scotland). In this week's assignment, you will turn your attention to Scotland.

## Objectives

For this assignment, you are an 18th-century Scot who has been meticulously collecting data on where witches have been accused accross the country. Your incredible foresight compelled you to encode the data in a `csv` that contains a **join field**, making it easy to map using ArcGIS Pro.

You'll take what you learned about cartographic best practices—as well as all the other stuff we've discussed throughout the last 4 weeks—and apply it to create a pair of maps that will use the **same data** to tell **different stories** about the Scottish witch trials.

More specifically, you will:
* **Join** tabular data to feature data
* **Utilize** classification techniques to show how data can be used to tell different stories that are often at odds with one another
* **Create** two map layouts using good cartographic principles (or strategically breaking them) to demonstrate these thematic mapping techniques

## Requirements

Create two maps using the same exact data, but telling very different stories:
* **Map 1** should make us believe that witches are a serious problem on the rise for Scotland.
* **Map 2** should calm our nerves, insisting that there's nothing, really, to worry about.

## Things your map must include
The following items are <span class="key">required</span> for both maps you submit:
* A homemade basemap (for this assignment, you <span class="key">may not</span> use a standard ArcGIS Pro basemap)
* A title
* A legend
* Some sort of inset map
* Accused witches by parish, represented appropriately for the message
* Some kind of "propogandistic" accompanying text
* Labels, where appropriate

Optionally, you could include things like:
* a scale bar and/or a north arrow
* archival objects about the Scottish witch trials ([HathiTrust](https://www.hathitrust.org/) and [Internet Archive](https://archive.org/) are good places to start)

## Things you should consider when making your map
* How to use color to convey meaning
* What kind of font and font placements are useful for getting your message across
* How you can use scale to bolster your argument
* Which classification schemes will help get your points across

## Things I'll dock you points for
* Parishes with "no data" use the same symbology as areas with `0` values
* Including a pre-made basemap
* "Data speak" in your legend – e.g., titles like `accused_witches_scotland`

## Download the data

These two datasets <span class="key">must</span> be represented in your map:
* [Accused witches in the Scottish witch trials](https://canvas.tufts.edu/courses/54475/files/7097163?wrap=1) (the original data is from is from [here](https://witches.is.ed.ac.uk/resources/))
* [Scotland's civil parishes in 1930](https://www.nrscotland.gov.uk/files/geography/products/CivilParish1930.zip) (from [NRS](https://www.nrscotland.gov.uk/statistics-and-data/geography/our-products/other-national-records-of-scotland-nrs-geographies-datasets/civil-parishes))

Optionally, you can use these datasets from Natural Earth to compose a basemap:
* [Various land and water features](https://www.naturalearthdata.com/downloads/10m-physical-vectors/)
* [Shaded relief data](https://www.naturalearthdata.com/downloads/10m-raster-data/10m-natural-earth-2/) (**large dataset!** - if you don't want to download this, you could use the standard hillshade in ArcGIS Pro instead)

## Examples

Before you start working on this assignment, check out this pair of maps that [Daniel Huffman](https://somethingaboutmaps.wordpress.com/about/) created for the Leventhal Map & Education Center (LMEC):

<div class="grid grid-cols-2">
    <figure>
        <a href="https://collections.leventhalmap.org/search/commonwealth:3x817744n" target="blank"></a>
        <img src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:s4657c413/full/full/0/default.jpg">
        <figcaption> 
            Disconnected
        </figcaption>
    </figure>        
    <figure>
        <a href="https://collections.leventhalmap.org/search/commonwealth:3x817734d" target="blank"></a>
        <img src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3x8177423/full/full/0/default.jpg">
        <figcaption>
            Connected
        </figcaption>
    </figure>
</div>

Using the same exact datasets of [free wi-fi locations](https://data.leventhalmap.org/#/catalog/dkhq95eqi) and [household internet subscription rates in Boston](https://data.leventhalmap.org/#/catalog/dkhm2yhrb), Daniel makes two opposite arguments.

I highly encourage you to look through [these additional examples of similar maps](https://www.leventhalmap.org/digital-exhibitions/bending-lines/how-to-bend/data-stories/) from the Leventhal Map & Education Center. Also, Cornell has an amazing collection of "persuasive maps" in the [P.J. Mode Collection](https://digital.library.cornell.edu/catalog?f%5Bcollection_tesim%5D%5B%5D=Persuasive+Maps%3A+PJ+Mode+Collection&search_field=all_fields).

You should feel empowered to borrow liberally from the styles, techniques, and tropes that these mapmakers used. Imitation is the sincerest form of flattery (though imitation should not be confused with plagiarism).

## Submit

Submit the assignment via Canvas before class time on **Tuesday, February 20**. Your map should be uploaded at 300 DPI in `png` format.

<a href="" target="blank" class="submit">Submit</a>

