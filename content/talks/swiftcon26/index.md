+++
title = "SWIFTcon2026"
date = 2026-10-20
draft = true
[extra]
time = 15
location = "Universiteit Leiden"
+++

{% <slide time={30} width="75%" background_mov="background_movie.mp4"> %}
<div style="background-color: var(--crust);">

## SWIMBA: A reimplementation of SIMBA feedback in SWIFT
### Sagan Sutherland
with Daniel Anglés-Alcázar and the CAMELS collaboration
</div>

{% <note> %}
Say I'm a PhD student at the University of Connecticut
{% </note> %}
{% </slide> %}

{% <slide> %}
## SWIMBA
{% <columns ncol={2}> %}
<div class="vcenter">

{% <note> %}
What is simba?
Say what it is before we talk about the details of it.
Make the intro as general as possible with respect to simulations!
{% </note> %}

- Takes the AGN and stellar feedback prescriptions from the SIMBA galaxy formation model (Davé+19) and brings them into a new subgrid model.
- Implemented in the SWIFT simulation code (Schaller+24) as compared to SIMBA implemented in GIZMO (Hopkins+14).
- Takes other processes like chemistry and star formation from Swift-EAGLE (Schaller+24).

**Tuned to match SIMBA's z=0 summary statistics!**
</div>

<div class="vcenter">
{{ <video src="simba_swimba_compare.mp4" attrs=`data-autoplay loop style="max-height: 85vh"`/> }}
</div>

{% </columns> %}
{% </slide> %}

{% <slide animate={true}> %}
{% <columns ncol={2}> %}
<div class="vcenter">
<p>
A comparison of <span style="color: #d20f39;">SWIMBA</span> and <span style="color: #2094b5;">SIMBA</span> in many key quantities, showing the range of their cosmic variance.
</p>

- 27 runs
- 27 initial conditions
- Same physics

<!-- Show 1P to show how codes respond differently to cosmology -->
</div>

{{ <figure src="CV.svg" height="90vh"/> }}
{% </columns> %}

{% <note> %}
Each has a set of 27 separate runs, each with different initial conditions.
Colored ranges show the full extent of the 27 runs, and lines show the medians.
{% </note> %}

{% </slide> %}


{% <slide animate={true} time={30}> %}

<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">power spectra</h2>
</div>
{{ <figure src="CV.svg" height="90vh" zoom={2.3} on={[0.54, 0.5]} style="z-index: -1;"/> }}
<div class="withbase" style="position: absolute; right: 0vw; top: 65vh;" data-id="legend_background">
{{ <figure src="CV_legend.svg" height="20vh" attrs="data-no-animate"/> }}
</div>

{% </slide> %}

{% <slide animate={true} time={30}> %}

<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">baryon fraction</h2>
</div>
{{ <figure src="CV.svg" height="90vh" zoom={3} on={[0.35, 0.97]} style="z-index: -1;"/> }}
<div class="withbase" style="position: absolute; left: 0vw; top: 25vh;" data-id="legend_background">
{{ <figure src="CV_legend.svg" height="20vh" attrs="data-no-animate"/> }}
</div>

{% </slide> %}

{% <slide animate={true} time={30}> %}
<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">stellar mass &mdash; black hole mass</h2>
</div>
{{ <figure src="CV.svg" height="90vh" zoom={3} on={[0.35, 1.22]} style="z-index: -1;"/> }}
<div class="withbase" style="position: absolute; left: 0vw; top: 25vh;" data-id="legend_background">
{{ <figure src="CV_legend.svg" height="20vh" attrs="data-no-animate"/> }}
</div>
{% </slide> %}

{% <slide animate="restart" time={2}> %}
## Why did we make SWIMBA?
{% </slide> %}

{% <slide animate={true}> %}
## Why did we make SWIMBA?
<div data-auto-animate-delay="1">

**We want to be able to use machine learning to infer cosmology!**
</div>

{% <columns ncol={2}> %}
<div class="fragment">

### Robustness
- Robust ML models are able to make accurate predictions about unseen physical models
- For example, machine learning techniques tend to have poor robustness when trained on only one model.
- Poor robustness of a model decreases our trust in its results.
</div>
<div class="fragment">

### Model Similarity
- SWIMBA implements much of the same physics as SIMBA. And it produces similar results to SIMBA.
- It stands to reason that a model trained in SIMBA could make good predictions about SWIMBA.
</div>
{% </columns> %}
<div class="fragment">

### Speed
- SWIMBA can run much faster than SIMBA.
- This allows us to make larger datasets cheaper!
</div>
{% </slide> %}

{% <slide> %}
{% <columns ncol={2}> %}
<div class="vcenter">

## CAMELS

#### <span style="color: var(--red);">C</span>osmology and <span style="color: var(--red);">A</span>strophysics with <span style="color: var(--red);">M</span>achin<span style="color: var(--red);">E</span> <span style="color: var(--red);">L</span>earning <span style="color: var(--red);">S</span>imulations
- Large training dataset including thousands of simulations.
- Varying cosmological parameters so that we can try to predict those.
- Also vary astrophysical parameters to try and smooth over the uncertainty in baryonic physics.

We already have a SIMBA dataset, and I have recently added an analogous SWIMBA dataset!
</div>
<div class="hcenter">
{{ <figure src="camels.jpg" width="35vw" style="margin-bottom: 0;"/> }}
<p style="margin-top: 0;"><small>(Villaescusa-Navarro+21)</small></p>
</div>
{% </columns> %}
{% </slide> %}

{% <slide background_img="background.jpg" width="75%"> %}
<div class="withbase" style="padding-top: 0.5pt; padding-bottom: 0.5pt;">

Our new SWIMBA suite contains 2164 individual simulations, for a total simulated volume of $\\left(323\\,\\mathrm{Mpc/h}\\right)^3$!

We will soon be expanding SWIMBA from $\\left(25\\,\\mathrm{Mpc/h}\\right)^3$ to $\\left(50\\,\\mathrm{Mpc/h}\\right)^3$ simulations.

As a part of this project, I have developed [camels-post](https://github.com/smsutherland/camels-post), a post-processing pipeline using 7 different tools to generate data products from simulation our snapshots.

{{ <note n="Come and find me if you want to use the data :)"/> }}
{{ <note n="from galaxy catalogs to cosmic web filaments to... images like this"/> }}
</div>
{% </slide> %}

{% <slide> %}
{% <columns ncol={2}> %}
{{ <figure src="random_map.png" width="50vw"/> }}
<div class="vcenter">
<div>
Villaescusa-Navarro+21 showed cosmological parameters can be predicted using only the projected maps like this one:
{{ <note n="note that these are early tests"/> }}
{% <columns ncol={2} widths="1.5em 1fr"> %}
<div class="vcenter" style="font-size: 2.5em;">
➔
</div>

|           | *Ω<sub>m</sub>* | *σ<sub>8</sub>* |
|----------:|---------------|---------------|
| Predicted | 0.1498        | 0.9594        |
|    Actual | 0.1414        | 0.9786        |
{% </columns> %}

Now can we take this model, trained on images of SIMBA, and make predictions about SWIMBA?
</div>
</div>
{% </columns> %}

{% <note> %}
This map is a matter projection, but there are a variety of fields we could look at.

We're looking at a projection through a 5Mpc/h wedge through the simulation volume.
{% </note> %}
{% </slide> %}

{% <slide time={30}> %}
{% <columns ncol={2}> %}
<div class="vcenter">

Our preliminary results show...

When our image is of the total matter density,<br>**we can!**

</div>
{{ <figure src="SwimbaSIMBA_Mtot_0.svg" height="80vh"/> }}
{% </columns> %}
{% </slide> %}

{% <slide time={30}> %}
{% <columns ncol={2}> %}
<div class="vcenter">

Unfortunately, quantities more dependent on the baryonic physics, such as temperature,<br>**can't achieve the same robustness**.
</div>
{{ <figure src="SwimbaSIMBA_T_0.svg" height="80vh"/> }}
{% </columns> %}
{% </slide> %}

{% <slide width="75%" background_mov="background_movie.mp4"> %}
<div style="background-color: var(--crust);">

## Conclusion!
- SWIMBA and SIMBA produce similar summary statistics!
- Even so, based on our initial robustness tests, the maps are distinct enough that we lose machine learning robustness.
- SWIMBA data is available to be used! Please reach out if you could make use of such a dataset.
  - [sagan.sutherland@uconn.edu](mailto:sagan.sutherland@uconn.edu)
- We provide open-source tools for generating our data products [here](https://github.com/smsutherland/camels-post)
- Slides available at [{{ get_url(path=page.path) }}]({{ get_url(path=page.path) }})
</div>
{% </slide> %}

{% <slide bonus={true}> %}
<div class="elementhcenter" data-id="header">
<h2 class="withbase" style="padding: 0.1em">max circular velocity</h2>
</div>
{{ <figure src="CV.svg" height="90vh" zoom={3} on={[0.65, 1.22]} style="z-index: -1;"/> }}
<div class="withbase" style="position: absolute; left: 10vw; top: 25vh;" data-id="legend_background">
{{ <figure src="CV_legend.svg" height="20vh" attrs="data-no-animate"/> }}
</div>
{% </slide> %}

{% <slide bonus={true}> %}
## max circular velocity
Adaptive softenings in gizmo change the density profile of galaxies.
{{ <figure src="adaptive_fixed.svg"/> }}
{% </slide> %}

{% <slide bonus={true}> %}
{{ <figure src="SwimbaSIMBA_Mtot_1.svg" height="80vh"/> }}
{{ <figure src="SwimbaSIMBA_T_1.svg" height="80vh"/> }}
{% </slide> %}

{% <slide bonus={true}> %}
{{ <figure src="SwimbaSIMBA_Mtot_2345.svg" height="90vh"/> }}
{{ <figure src="SwimbaSIMBA_T_2345.svg" height="90vh"/> }}
{% </slide> %}
