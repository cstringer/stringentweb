<?php

// IMPORTANT - set the default time zone
date_default_timezone_set('America/Chicago');

?>
<!doctype html>
<html>

 <head>

  <title>Stringent Studios &middot; Software Design</title>
  <meta charset="utf-8" />
  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="stylesheet" href="css/stringent.css" />
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script src="js/stringent.js"></script>

 </head>

 <body>

  <header>
   <img src="stringent-logo.png" />
   <h1>Stringent Studios</h1>
   <span class="subhead">Software &middot; Design</span>
  </header>

  <nav>
   <ul>
    <li><a href="#products">Products</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  </nav>

  <section id="products">

   <h2>Products</h2>

   <div class="section-content">

   <h3>iOS Apps</h3>

    <p class="item">
    <b><a href="http://24.124.127.203/products/telescript-tech-i" target="_blank">TeleScript TECHi for iPad</a></b><br />
     Teleprompting app and peripheral, developed for 
     <a href="http://www.telescriptwest.com" target="_blank">Telescript West, Inc.</a>
    </p>

   <h3>iOS Games</h3>

    <p class="item">
    <b>Idiots and Lunatics!</b><br />
     Arcade driving game for iPad, iPhone and iPod Touch <i>(in development)</i>
    </p>

   <h3>Web Apps</h3>

    <p class="item">
    <b><a href="https://notify.lawrenceks.org" target="_blank">Notify! from the City of Lawrence</a></b><br />
     Secure web-based notifications system, alerts residents about solid waste pickup
    </p>

   <h3>Web Sites</h3>

    <p class="item">
    <b><a href="http://www.lawrenceks.org" target="_blank">City of Lawrence, Kansas</a></b><br />
     Official site for the city, winner of 
		 <a href="https://nagw.org/news/2014/09/14/2014-nagw-pinnacle-award-winners-announced" target="_blank">2014 NAGW Pinnacle Award</a>
    </p>

    <p class="item">
    <b><a href="http://24.124.127.203" target="_blank">Telescript West, Inc.</a></b><br />
     Maker of teleprompting software systems
    </p>

    <p class="item">
    <b><a href="http://twinoaksgolf.us" target="_blank">Twin Oaks Golf Complex</a></b><br />
     Driving range and pitch-and-putt golf course, serving Lawrence and Eudora, Kansas
    </p>

    <p class="item">
    <b><a href="http://electronobots.com" target="_blank">ELECTRONOBOTS</a></b><br />
     Miniature robot sculptures made from reclaimed electronic components
    </p>

   </div>

  </section>

  <section id="services">
   <h2>Services</h2>

   <div class="section-content">

    <h3>Mobile Development</h3>

    <ul class="item">
     <li>Specializing in Objective-C for iOS devices (iPhone, iPad, et al.)</li>
     <li>Cross-platform development using Apache Cordova for Android, Windows Phone and Kindle Fire
		     using Web technologies</li>
     <li>Embedded device firmware (ARM-based microcontrollers) in C</li>
    </ul>

    <h3>Web Design &amp; Deveopment</h3>

    <ul class="item">
     <li>Responsive, mobile-first, multi-device designs with future-friendly thoughtfulness</li>
     <li>HTML5, CSS3, JavaScript, jQuery, and dojo on the client-side</li>
     <li>LAMP-based, CMS-driven: Drupal, Joomla, WordPress, Symphony2 and proprietary back-ends</li>
     <li>Custom REST APIs, secure data sharing, and remote systems management</li>
     <li>Accessibility, internationalization and localization</li>
    </ul>

   </div>

  </section>


  <section id="contact">

   <h2>Contact</h2>

   <div class="section-content">

   <p>
    <b>Stringent Studios</b><br />
    <a href="mailto:cstringer42@gmail.com">cstringer42@gmail.com</a><br />
    +1&nbsp;785&nbsp;764&nbsp;0385<br />
		<address>
		 2009 Maple Ln<br/>
		 Lawrence, KS 66046-3257<br />
		 USA
		</address>
   </p>

   </div>

  </section>

  <footer>

   <p>&copy; copyright <?php echo date("Y"); ?> stringent studios. all rights reserved.</p>

   <p>This site available <a href="https://github.com/cstringer/stringentweb" target="_blank">open source on GitHub</a>.</p>

  </footer>

 </body>

</html>
