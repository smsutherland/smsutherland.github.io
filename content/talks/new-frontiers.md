+++
title = "New Frontiers in Cosmology 2026"
weight = 2026
[extra]
time = 8
+++

{% slide(time=30) %}
## SWIMBA: A reimplementation of SIMBA feedback in SWIFT
### Sagan Sutherland
#### Daniel Anglés-Alcázar
at the University of Connecticut
{% end %}

{% slide(hidden=true) %}
1. Introduce Camels as a collaboration focused on using simulations to explore machine learning and cosmology
2. Introduce SWIMBA and explain the rationale for its existence
3. Show the match between SWIMBA and SIMBA on the summary statistic level
4. Show how using machine learning doesn't produce good results on the field level
{% end %}

{% slide(animate=true, hidden=true) %}
<h2>
    <span class="fragment highlight-red" data-fragment-index="1">C</span><span class="fragment fade-out" data-fragment-index="2">osmology and</span>
</h2>
<h2>
    <span class="fragment highlight-red" data-fragment-index="1">A</span><span class="fragment fade-out" data-fragment-index="2">strophysics with</span>
</h2>
<h2>
    <span class="fragment highlight-red" data-fragment-index="1">M</span><span class="fragment fade-out" data-fragment-index="2">achin</span><span class="fragment highlight-red" data-fragment-index="1">E</span>
</h2>
<h2>
    <span class="fragment highlight-red" data-fragment-index="1">L</span><span class="fragment fade-out" data-fragment-index="2">earning</span>
</h2>
<h2>
    <span class="fragment highlight-red" data-fragment-index="1">S</span><span class="fragment fade-out" data-fragment-index="2">imulations</span>
</h2>
{% end %}

{% slide() %}
## SWIMBA
- movie of the two side by side
- Then show a few of the summary statistics in which they match
- Great, now we've established we have two simulations which appear similar
{% end %}

{% slide() %}
## Talk about CAMELS
- Large training dataset. It already had SIMBA and now I've added SWIMBA.
- Varying cosmological parameters so that we can try to predict those
- Also vary astrophysical parameters to try and smooth over our poorer understanding of the baryonic physics.
- We have multiple models as well for that purpose.
{% end %}

{% slide() %}
## Use the summary statistics to make cosmological predictions
- Hopefully if it's similar to SIMBA, the predictions will be about the same between the two
{% end %}

{% slide() %}
## Now use machine learning
- SWIMBA is alright when looking at the total matter map
- But it's pretty much a wash when looking at, for example, the temperature map.
{% end %}

{% slide() %}
## Conclusion!
- Even with the same underlying physics, and similar resulting statistics, the maps are distinct enough that we lose machine learning robustness.
{% end %}
