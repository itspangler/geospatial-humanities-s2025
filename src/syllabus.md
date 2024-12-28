---
title: Syllabus
---

# Syllabus

<div class="headless">

| | |
| :-------------------- | :--------------------- |
|        **Term**        |       Spring 2025       |
|     **Day/Time:**      |   Tuesdays, 6:30-9pm    |
|     **Location:**      | Data Lab, Tisch Library |
| **Instructor/Office hours:** |      Ian Spangler, TBD       |
| **TA/Office hours** |      Alicia Tu, TBD       |

</div>

## Course summary

In this course, we will use geospatial tools, theory, and methods to explore "the humanities," broadly conceived. How can concepts like space, place, and landscape inform humanistic inquiry? What kinds of data exist for engaging computationally with topics like art, history, literature, and archaeology? And what tools exist for analyzing the complicated relationships between people, the places they live, and the fruits of their creative endeavors?

Over the semester, students will learn to use geographic information systems—or "GIS"—to ask and answer humanistically-informed, historically-grounded spatial questions. Lectures introduce key concepts in the geospatial humanities, from spatial data structures to feminist cartography, while detailed labs put those concepts into motion. Assignments concentrate on self-guided engagements with course material, and a final project allows students to independently study a geospatial humanities topic of their own choosing.

## Learning objectives and practical skills

Major learning objectives include:

- The coherence (or not) of geospatial humanities as a subset of the humanities in general
- Approaches and applications of GIS across the humanities
- Maps, mapping, and cartography as non-neutral, power-laden processes
- Methods and best practices for interacting with (digital) archives
- Spatial data structures, georeferencing, and geoprocessing
- Technical skills for problem solving in the context of spatial data
- Basic concepts in spatial databases and queries
- Principles of cartographic design (and when to deviate from them)
- The limits of representation and analysis in GIS

More concretely, by the end of this course, students will be able to do the following:

- Identify data structures in spatial data
- Evaluate and select appropriate map projections and coordinate systems
- Identify, locate, evaluate, and acquire spatial data pertinent to projects in their field of interest
- Understand the data creation process and create historical spatial data sets derived from maps, gazetteers, aerial photography, texts, etc.
- Derive spatial data from tabular and textual information
- Use appropriate spatial analysis methods for raster and vector data, both independently and combined
- Create high-quality maps and associated graphics/visualizations with text that clearly communicate spatial information and the results of analysis
- Design an independent project that incorporates spatial analysis methods
- Use ArcGIS Pro software with strong proficiency

## Grading & coursework details

Grading will be based on a 1000-point scale. You can submit graded activities, labs, and assignments up to one week late. Details regarding all course assignments, including requirements for the final project and instructions for curations, will be made available on Canvas.

-  [Numerous activities](#activities) worth 150 points
-  4 [labs]($labs) worth a total of 200 points (50 each)
-  4 skill-building [assignments](#assignments) worth a total of 300 points (75 each)
-  A [curatorial introduction](#curation) on a digital geohumanities project, process, or product, worth 100 points and presented in small groups
-  The [final project](#final-project) worth 250 points

### Activities

Nearly every week, we will spend time during class on some kind of activity. Some are bigger and some are smaller. Some are submitted and some are not. Overall, they count towards your participation grade.

### Labs

Throughout the semester, students will be assigned five labs which explore theories, concepts, and approaches in greater depth. Each lab weaves together methods and concepts, using them in a software application (usually ArcGIS Pro), and application to a particular area of the humanities.

### Assignments

Assignments concentrate on self-directed application of concepts explored in lectures and labs. Eventually, you will use labs to focus on how geospatial humanities intersect with your own interests, building toward a final project that applies geospatial humanities methods to a topic of your choosing.

### Curation

Before the end of the semester, you and 2-3 peers will work together on a curation—a deep dive into a geospatial humanities project, process, or product—presenting your findings to the class in roughly 10 minutes.

You should have your group and your curation topic selected by class time on Week 3. [Detailed instructions are available here](curations).

### Final Project

Beginning officially in Week 8—although you can, and should, start to think about it earlier—you will commence work on a final project. Using concepts and methods learned in class, you'll create and present a large-format infographic presenting original geospatial research into a humanities topic. [Read more about the final project here](final).

Students may choose to exhibit their work at Tufts' GIS Expo day for 10 points (1% of overall grade) of extra credit. The date is TBD, but the Expo will be held from 3-5pm in the Alumnae Lounge of Aidekman Arts Center (40 Talbot Ave). Examples of similar student projects can be found at [Tufts GIS Expo Explorer](https://expoexplorer.it.tufts.edu/).

## Required Readings

You'll have something to read just about every week: this is, after all, a "humanities" course just as well as a "geospatial" one. All readings are  listed in the [schedule](schedule), and they are available through online journal databases open to Tufts students, public web sites, or Canvas.

## Style Guidelines and Citation

All **cartographic work** should adhere, when appropriate, to key principles of map design.

All **written work** should be consistent with the style guidelines of one of the [major style guides](https://researchguides.library.tufts.edu/citation/styles). I have no preference for which one you choose—Chicago, MLA, and APA are all fine—but whatever you select must be applied consistently in your work.

## Accommodations for Students with Disabilities

Tufts University values the diversity of our body of students, staff, and faculty and recognizes the important contribution each student makes to our unique community. Tufts is committed to providing equal access and support to all qualified students through the provision of reasonable accommodations so that each student may fully participate in the Tufts experience. If a student has a disability that requires reasonable accommodations, they should please contact the StAAR Center (formerly Student Accessibility Services) at StaarCenter@tufts.edu or 617-627-4539 to make an appointment with an accessibility representative to determine appropriate accommodations. Please be aware that accommodations cannot be enacted retroactively, making timeliness a critical aspect for their provision.

<!-- ## Abbreviated schedule

A general breakdown of weekly themes can be found below. You'll find a more detailed overview of the course in the [full schedule](schedule). -->

<!-- --- -->

```js

import yaml from 'js-yaml';

async function schedule() {
  try {
    const response = await FileAttachment('data/schedule.yaml').text();
    const data = yaml.load(response);
    renderSched(data)
  } catch (error) {
    console.error('Error loading YAML file:', error);
  }
}

function renderSched(data) {
    console.log(data)
  const schedContainer = document.getElementById('short-schedule');
  schedContainer.innerHTML = '';
  data.forEach(item => {

      const sched = document.createElement('div');
      sched.innerHTML = `

        <span class="week smaller">
            ${item.week} • ${item.date}</span>
        
        <b style="padding-left:2em;">
            ${item.title}</b>

        <i style="padding-left:1.25em;">
            ${item.subtitle}</i>

        <p style="margin-bottom:4em;">${item.abstract}</p>

      `;
      schedContainer.appendChild(sched);
  });
}

// schedule()

```

<!-- <div id=short-schedule class="smaller"></div>

--- -->
