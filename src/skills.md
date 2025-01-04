# Skill clusters

Use the filterable table below to search for particular concepts, skills, or workflows that we've covered in class. Try `clip`!

```js
import yaml from 'js-yaml';

const activities = await FileAttachment('data/activities.yaml').text();
const labs = await FileAttachment('data/labs.yaml').text();
const assignments = await FileAttachment('data/assignments.yaml').text();

const actdata=yaml.load(activities);
const labdata=yaml.load(labs);
const assdata=yaml.load(assignments);

const all = actdata.concat(labdata, assdata)

const search = view(Inputs.search(
    all, {placeholder: "Search `clip`…"}
    ));
```

<div class="">

```js
const table = view(Inputs.table(search, {
        columns: ["title","tags"],
        header: {title: "Title", tags: "Tags"},
        width: {title: 60, tags: 580}
    },
))
```

</div>