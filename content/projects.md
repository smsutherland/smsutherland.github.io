+++
+++

These are the projects I've been involved with.
**Bold** indicates projects that are ongoing.

1. [**SWIMBA**](#SWIMBA)
2. [SLICK](#SLICK)

## SWIMBA

SWIMBA, aka SWIFT-SIMBA, is a re-implementation of the [SIMBA](http://simba.roe.ac.uk/) subgrid model in the [SWIFT](https://swift.strw.leidenuniv.nl/) hydrodynamic code.
Most of SWIMBA's code was written by Drs. Doug Rennehan and Romeel Davé.
SWIMBA has been tuned to match the original SIMBA results as closely as possible.
Original SIMBA is built in the [GIZMO](http://www.tapir.caltech.edu/~phopkins/Site/GIZMO.html) simulation code, while SWIMBA is built in SWIFT.
The goal is to determine what the difference in simulation code changes does to the results of the simulation.
This project is being undertaken as a part of my PhD at the University of Connecticut, under [Dr. Anglés-Alcázar](https://angles-alcazar.physics.uconn.edu/), and is associated with the [CAMELS collaboration](https://camels.readthedocs.io/en/latest/).

## SLICK

The Scalable Line Intensity Computation Kit ([SLICK](https://karolinagarcia.github.io/slick/)) is a project led by [Dr. Karolina Garcia](https://karolinagarcia.github.io/) which I was involved with while an undergraduate student at the University of Florida.
SLICK is a python package which is able to calculate luminosities for CO, [C I], and [C II] for clouds in [SIMBA](http://simba.roe.ac.uk/) simulations.
SLICK is able to utilize the high parallelization potential of high performance computer clusters to perform these calculations en masse.
My contribution to the project was architecting the package to automatically make use of slurm, the system's job scheduler, to calculate many sets of line intensities at once.
Karol's paper describing SLICK can be found [here.](https://ui.adsabs.harvard.edu/abs/2024ApJ...974..197G/)
