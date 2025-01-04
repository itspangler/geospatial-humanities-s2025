const data = [
    {
        "title": "A plan of Boston in New England with its environs",
        "year": 1777,
        "manifest": "https://ark.digitalcommonwealth.org/ark:/50959/q524mv09k/manifest",
        "annotation": "https://annotations.allmaps.org/manifests/82b5e94ab7690162",
        "collection": "Leventhal Map & Education Center, Boston Public Library",
        "url": "https://collections.leventhalmap.org/search/commonwealth:q524mv09k/"
    },
    {
        "title": "Plan of Medford made by Peter Tufts, Jr., dated 1794",
        "year": 1794,
        "manifest": "https://ark.digitalcommonwealth.org/ark:/50959/2227ng58z/manifest",
        "annotation": "https://annotations.allmaps.org/manifests/da7aee02425a7c4b",
        "collection": "Leventhal Map & Education Center, Boston Public Library",
        "url": "https://collections.leventhalmap.org/search/commonwealth:2227ng58z"
    },
    {
        "title": "Plan of Medford made by John Sparrell, dated 1830",
        "year": 1830,
        "manifest": "https://ark.digitalcommonwealth.org/ark:/50959/25152h026/manifest",
        "annotation": "https://annotations.allmaps.org/manifests/aec8a97e3cac5bb0",
        "collection": "Leventhal Map & Education Center, Boston Public Library",
        "url": "https://collections.leventhalmap.org/search/commonwealth:25152h026"
    },
    {
        "title": "Map of the town of Medford, Middlesex County, Mass",
        "year": 1855,
        "manifest": "https://www.digitalcommonwealth.org/search/commonwealth:x059c900f/manifest",
        "annotation": "https://annotations.allmaps.org/manifests/0d437fe8cef4123b",
        "collection": "Leventhal Map & Education Center, Boston Public Library",
        "url": "https://collections.leventhalmap.org/search/commonwealth:x059c900f"
    },
    {
        "title": "Residential security map of Boston, Mass.",
        "year": 1938,
        "manifest": 'https://ark.digitalcommonwealth.org/ark:/50959/00000x52b/manifest',
        "annotation": 'https://annotations.allmaps.org/manifests/e84bd3877f49a9c0',
        "collection": "Leventhal Map & Education Center, Boston Public Library",
        "url": "https://collections.leventhalmap.org/search/commonwealth:00000x52b"
    },
    {
        "title": "Boston's bikemap",
        "year": 1990,
        "manifest": "https://ark.digitalcommonwealth.org/ark:/50959/mk61wx07j/manifest",
        "annotation": "https://annotations.allmaps.org/images/78f103dcef01c46a",
        "collection": "Leventhal Map & Education Center, Boston Public Library",
        "url": "https://collections.leventhalmap.org/search/commonwealth:mk61wx07j"
    },
]

const fetchJson = (url) => fetch(url).then(resp => resp.json())

const dataWithAnnotations = await Promise.all(data.map(i => fetchJson(i.annotation).then(annotationData => ({ ...i, annotationData }))))

process.stdout.write(JSON.stringify(dataWithAnnotations, null, 2));