---
layout: page
title: search
permalink: /search/
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="type here to search">
    <ul id="results-container"></ul>
</div>

<script src="{{ site.baseurl }}/assets/simple-jekyll-search.min.js" type="text/javascript"></script>

<script>
    SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<div style="text-align: left !important;"><a href="{url}"><h1 style="text-align:left !important;">{title}</h1></a><span style="text-align:left !important;">{date}</span><br><span style="text-align:left !important;">{content}</span></div>',
    templateMiddleware: function(prop, value, template) {
            if (prop=='content') {
                var wordIndex = value.toLowerCase()
                                .indexOf(document.getElementById('search-input').value.toLowerCase());
                console.log(wordIndex, value);
                excerpt = value.slice(Math.max(wordIndex-70, 0), Math.min(wordIndex+70, value.length));
                return excerpt.split(' ')
                    .slice(1, excerpt.split(' ').length-1)
                    .join(' ').toLowerCase()
                    .replace(document.getElementById('search-input').value.toLowerCase(), '<font color="#ee82ee">' + document.getElementById('search-input').value + '</font>');
            }
          },
    json: '{{ site.baseurl }}/search.json',
    });
</script>