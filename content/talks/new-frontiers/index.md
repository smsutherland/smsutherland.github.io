+++
title = "New Frontiers in Cosmology 2026"
date = 2026-08-10
draft = true
[extra]
time = 8
location = "Universidade da Coruña"
+++

{% slide(time=30, width="75%") %}

## SWIMBA: A reimplementation of SIMBA feedback in SWIFT
### Sagan Sutherland
& Daniel Anglés-Alcázar

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
{% columns(ncol=2) %}
<div class="vcenter">

- Takes the AGN and stellar feedback prescriptions from SIMBA (Davé+19) and brings them into a new subgrid model.
- Made using SWIFT (Schaller+24) rather than SIMBA's GIZMO (Hopkins+14)
- Takes other processes like chemistry and star formation from Swift-EAGLE

**Tuned to match z=0 summary statistics!**
</div>

<div class="vcenter">
{{ video(src="simba_swimba_compare.mp4", attrs=`data-autoplay loop style="max-height: 85vh"`) }}
</div>

{% end %}
{% end %}

{% slide(animate=true) %}
{% columns(ncol=2) %}
<div class="vcenter">
<p>
A comparison of <span style="color: #d20f39;">SWIMBA</span> and <span style="color: #2094b5;">SIMBA</span> in many key quantities, showing the range of their cosmic variance.
</p>

- 27 runs
- 27 initial conditions
- Same physics

</div>

{{ figure(src="CV.svg", height="90vh") }}
{% end %}

{% note() %}
Each has a set of 27 separate runs, each with different initial conditions.
Colored ranges show the full extent of the 27 runs, and lines show the medians.
{% end %}

{% end %}


{% slide(animate=true, time=30) %}

<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">power spectra</h2>
</div>
{{ figure(src="CV.svg", height="90vh", zoom=2.3, on=[0.54, 0.5], style="z-index: -1;") }}
<div class="withbase" style="position: fixed; right: 0vw; top: 65vh;" data-id="legend_background">
{{ figure(src="CV_legend.svg", height="20vh", attrs="data-no-animate") }}
</div>

{% end %}

{% slide(animate=true, time=30) %}

<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">baryon fraction</h2>
</div>
{{ figure(src="CV.svg", height="90vh", zoom=3, on=[0.35, -0.001], style="z-index: -1;") }}
<div class="withbase" style="position: fixed; left: 0vw; top: 25vh;" data-id="legend_background">
{{ figure(src="CV_legend.svg", height="20vh", attrs="data-no-animate") }}
</div>

{% end %}

{% slide(animate=true, time=30) %}

<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">stellar mass &mdash; black hole mass</h2>
</div>
{{ figure(src="CV.svg", height="90vh", zoom=3, on=[0.35, -0.25], style="z-index: -1;") }}
<div class="withbase" style="position: fixed; left: 0vw; top: 25vh;" data-id="legend_background">
{{ figure(src="CV_legend.svg", height="20vh", attrs="data-no-animate") }}
</div>

{% end %}

{% slide() %}
## Why did we make SWIMBA?
- machine learning robustness
- ability to make predictions on unseen physical models
- swimba is a similar model
- can we get ML results out of swimba
- are they at least better than results from tng
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
2x2 panels
top: map we're looking at
bottom: results that come from the map
{% end %}

{% slide() %}
## Conclusion!
- Even with the same underlying physics, and similar resulting statistics, the maps are distinct enough that we lose machine learning robustness.
{% end %}

{% slide(bonus=true) %}
<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">max circular velocity</h2>
</div>
{{ figure(src="CV.svg", height="90vh", zoom=3, on=[0.65, -0.25], style="z-index: -1;") }}
<div class="withbase" style="position: fixed; left: 10vw; top: 25vh;" data-id="legend_background">
{{ figure(src="CV_legend.svg", height="20vh", attrs="data-no-animate") }}
</div>
{% end %}

{% slide(bonus=true) %}

## max circular velocity
Adaptive softenings in gizmo change the density profile of galaxies.
{{ figure(src="adaptive_fixed.svg") }}
{% end %}
