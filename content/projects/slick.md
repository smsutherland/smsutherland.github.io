+++
title = "SLICK"
weight = 2023
+++

The Scalable Line Intensity Computation Kit ([SLICK](https://karolinagarcia.github.io/slick/)) is a project led by [Dr. Karolina Garcia](https://karolinagarcia.github.io/) which I was involved with while an undergraduate student at the University of Florida.
SLICK is a python package which is able to calculate luminosities for CO, [C I], and [C II] for clouds in [SIMBA](http://simba.roe.ac.uk/) simulations.
SLICK is able to utilize the high parallelization potential of high performance computer clusters to perform these calculations en masse.
My contribution to the project was architecting the package to automatically make use of slurm, the system's job scheduler, to calculate many sets of line intensities at once.
Karol's paper describing SLICK can be found [here.](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..197G/)
