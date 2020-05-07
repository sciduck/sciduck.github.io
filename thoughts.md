---
layout: page
title: My thoughts
permalink: /thoughts/
---
{% for post in site.posts %}
  {% if post.categories contains 'trash' %}
    <div class="post">
        <h3 class="title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="meta">Date: {{ post.date }}</p>
    </div>
  {% endif %}
{% endfor %}
