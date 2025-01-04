<script type="module" src="../../../script.js"></script>

# **Assignment 03: Parking lot cemeteries** <!-- omit in toc -->

| ![mass](./images/image002.png) |
| :----------------------------: |
| *Mass parking lot cemeteries* |

## Introduction and context

In most places, parking lots are everywhere.

Although parking lots only take up about 0.27% of total land area in the commonwealth of Massachusetts, that number starts to grow as you zoom into cities and towns. A back-of-the-napkin estimate using data from [OpenStreetMap](https://www.openstreetmap.org/) suggests that number goes up by a factor of ten in Boston (2.7%)—and it's much lower in Boston than most cities in the U.S.

All things considered, parking lots are a relatively new invention. The turn towards car-dependent urban planning in the twentieth century United States—galvanized by the passage of the 1956 Interstate Highway Act, which provided 90% in federal matching funds for highway construction—radically transformed how people got around. In fact, I think we can draw a direct line from the federal funding of highways seventy years ago to the red line catching on fire today. But I digress.

From a geospatial perspective, what tools exist for visualizing the imprint of parking lots American cities? Perhaps more importantly, how can we adequately assess what we lost through building them?

| ![Alt text](https://tile.loc.gov/image-services/iiif/service:gmd:gmd370:g3701:g3701p:ct006400/full/pct:25/0/default.jpg) |
| :----------------------------------------------------------------------------------------------------------------------: |
| *United States system of highways (1950), from the [Library of Congress](https://www.loc.gov/resource/g3701p.ct006400/)*                                                                                                                         |

## Objectives

In this assignment, you'll use fire insurance and tax atlases—like those displayed in the Leventhal Map & Education Center's [Atlascope](https://atlascope.org) tool—to create a map of "parking lot cemeteries," or things that used to inhabit contemporary parking lots.

| ![img](images/image001.png) |
| :--------: |
|  *Tufts College in [Atlascope](https://www.atlascope.org/#/view:share$mode:glass$center:-71.11966,42.40694$zoom:17.57$base:maptiler-streets$overlay:ark:/76611/al88uzmc7), 1874*   |

With their meticulous documentation of building material and use, street names, urban morphology, and much more, urban atlases provide detailed glimpses into how places have changed over time. Originally created so that banks could [adequately assess fire insurance risk](https://www.loc.gov/collections/sanborn-maps/articles-and-essays/introduction-to-the-collection/), today they are invaluable tools for historical urban research. The [Sanborn Company](https://guides.loc.gov/fire-insurance-maps/sanborn) produced by far the most maps of this genre in the United States. The Library of Congress holds nearly 700,000 Sanborn maps, with tens of thousands of atlases digitized in their entirety.

Your task is to choose a city in the United States—one with decent coverage of fire insurance atlases—and answer two questions:
1. What's buried underneath modern-day parking lots?
2. What percentage of land in my area of interest is devoted exclusively to parking?

## Requirements

Your final map should include the following:
* A visualization of "cemeteries" (a mosaicked layer of five georeferenced Sanborn atlases, clipped to parking lot data)
* Appropriate projection
* Meaningful title, subtitle, explanation of data sources (including ), cartographer information, and date
* Somewhere on the map, the percentage of total land area within your "area of interest" that is occupied by parking lots—e.g., (`sq meters of all parking lots` / `sq meters of city`) * `100`
* Two inset maps that zoom into your most interesting "parking lot cemeteries"
* Accompanying text that describes what's buried underneath parking lots *in general*, as well as your two most interesting "cemeteries" (you may need to do a little extra research for this)
* Generally thoughtful cartographic design (e.g., readable font, no unintentionally garish colors, good figure-ground sensibility)

Note that for this assignment, you may use one of the preset "streaming" base maps from ArcGIS Pro. You could still make your own base map, but this time, you don't have to.

## Workflow

Here is the workflow you should follow. Except for places where specific instructions are necessary, the workflow is only sketched out in broad brushstrokes. You will need to determine how to execute each step, using both the links provided, your existing knowledge, and your best judgment. 

### Download maps

From the Library of Congress, download at least four Sanborn maps from an atlas of your choosing.

Don't just pick an arbitrary area—you should choose four maps that cover an area where modern parking lots exist. To get you started, you could compare the index plate of your chosen atlas with this map from [Parking Lot Reform](https://parkingreform.org/resources/parking-lot-map/). In the example below, I compared the two maps for Richmond, Virginia, and determined that plates 8, 9, 49, and 50, would be suitable, because they contain numerous modern-day parking lots:

<div class="grid grid-cols-2">
<figure width="150px"><img src="./images/image006.png" height="200px">
<figcaption style="text-align:left;">
    
*Index plate from Sanborn atlas*
</figcaption></figure>
<figure width="150px"><img src="./images/image007.png" height="200px">
<figcaption style="text-align:left;">
    
*Parking Lot Reform map*
</figcaption></figure>
</div>


The maps (or "plates" in the parlance of urban atlases) that you choose should adjoin one another—e.g., you shouldn't pick four disconnected plates from across the whole city

When you're ready, download the maps as `TIFF` files from the [Library of Congress](https://loc.gov):
   
<figure>

![searchterm](./images/image008.png)

<figcaption>

*Example search terms in LOC*
</figcaption>
</figure>

<figure>

![download](./images/image005.gif)

<figcaption>

*Downloading an atlas plate*

</figcaption>
</figure>

### Georeference the four maps

[Use this guide](https://pro.arcgis.com/en/pro-app/3.1/help/data/imagery/georeferencing-tools.htm) as a starting point for how to georeference maps using ArcGIS Pro. Street corners will be your most reliable control points!

#### A note on coordinate systems

When you're georeferencing a map, you define its location according to the *coordinate system of the map frame*. So, you want to make sure that you're saving the georeferenced layer in the *same coordinate system of the map frame.* For your urban atlases, follow [Bill Rankin's advice](https://history.yale.edu/sites/default/files/files/Bill%27s%20quick%20guide%20to%20map%20projections.pdf) and use the "evil" Mercator projection:

> "For maps of cities or small regions, the choice is easy: use the Mercator projection. ... It has three great advantages. First, at local scales there is **negligible distortion** (more technically, the Mercator is a conformal projection). This is why the Mercator is used on Google Maps: it’s quite distorted at the global scale, but when you zoom in the map is always undistorted. (Note that at local scales there’s essentially no difference between equal-area projections and non-equal-area projections.) Second, the **Mercator shows north/south lines as vertical and east/west lines as horizontal**, which can be useful for areas like the United States with regular street grids and straight-line borders. And third, the Mercator **requires no tweaking or parameter adjustments**. It’s a one-click solution."

### Mosaic plates

Using your four georeferenced maps as the inputs, [mosaic](https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/mosaic.htm) the plates into a single layer.

<div class="callout">

Be sure to **generate a footprint** of the mosaicked raster when you run the tool! You'll use this later.

</div>
    
### Download parking lots data

Using [overpass turbo](https://overpass-turbo.eu/), download a `geojson` file of parking lots in your area of interest from OpenStreetMap.

Copy and paste this query into the overpass turbo query builder:
            
    {% raw %}
    way
        [amenity=parking]
        ({{bbox}});
    (._;>;);
    out;
    {% endraw %}

Navigate to your area of interest. Make sure that the screen is zoomed in to such an extent that your entire area of interest is visible, but not so zoomed out that you end up retrieving a ton of extra data.

Click **Run**, then click **Export** ➡️ download the GeoJSON
1. [Convert the GeoJSON to a feature class](https://pro.arcgis.com/en/pro-app/latest/tool-reference/conversion/json-to-features.htm) and load it into your map

    While you're doing this, you might opt to remove all the fields that come down from overpass turbo. You won't need them
2. [Raster clip](https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/clip.htm) mosaicked maps by parking lots

3. If not already present, [calculate geometry](https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/calculate-geometry-attributes.htm) for both your parking lot and footprint layers. Then, compute how much of the area of interest is occupied by parking lots today, and include that value somewhere in your map

Once you're done with the above steps, spend some time examining the parking lot cemeteries. Are there any patterns that you notice between what used to exist? What did the land underneath parking lots used to contain?

## Assignment deliverables

By **Tuesday, 3/12 at 6:30pm**, submit to Canvas a map that meets the [requirements](#requirements) outlined above. It should be exported from ArcGIS Pro at 300 dpi.