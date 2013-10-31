html5ifier
==========

Convert HTML 5 Source Code to HTML 4 for compatibility issues
Is jQuery plugin used for older browsers that do not support html5 becoming
the following elements:

  <header>
  <nav>
  <section>
  <article>
  <aside>
  <figcaption>
  <figure>
  <footer>

html5 div with a class of html5 element name.

eg

<header> </ header>
<nav> </ nav>
<aside> </ aside>
<article>
<h1> </ h1>
<figure> </ figure>
<figcaption> </ figcaption>
</ article>
<footer> </ footer>

and becomes as follows:

<div class="header"> </ div>
<div class="nav"> </ div>
<div class="aside"> </ div>
<div class="article">
<h1> </ h1>
<div class="figure"> </ div>
<div class="figcaption"> </ div>
</ div>
<div class="footer"> </ div>


Ways to use
  * How to use:
  * $ ('Element html5 convert'). Html5ifier ();
  * This will convert automatically all in html4 html5
  * /
