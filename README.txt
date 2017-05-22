README.txt

Requirements:
- bootstrap 3.3.7

Compatabilities:

Libraries:

Packages:

Logs:
20170313 - creating website using bootstrap-3.3.7
		 - created home / index page with bootstrap carousel theme

20170314 - created about.html
		 - added services pages as a dropdown menu on the navbar

20170315 - created license.html
		 - created gallery.html
		 - created faq.html

20170316 - created contact.html
		 - created php script to sending information via email

20170317 - completed the two different background color on the index page
	     - center the images in the carousel

20170318 - modified webpages where needed
		 - added phone banner

20170323 - added social media icons to navbar
		 - linked social media icons to companies social media

20170402 - created submenu in service pages
			- 3 submenus that consist of air duct, dryer, hooding cleaning
				- commercial
				- residental
				- industrial

20170403 - modified navbar
			- navigation
			- background colors of social media
			- add logo to center of navbar
			- switched different shade of blue
			- added subtext to top right

20170404 - created store page with paypal button

20170405 - completed company horiztonal scroller
		 - added jquery.simplyscroll.js
		 	- jQuery plugin from logicbox.net
		 - added simplyscroll css to airsopure_2017.css
		 - hyperlink on images for interactive compatiability
		 - navbar text to black

20170410 - register Google Map API key
			- AIzaSyCb8mxFvwbd97jGydjmp8FNsD9bOe4Yk_k
		 - added map in contact page

20170412 - NameBright.com for configuration of domain
			- User: Airsopure6
			- Passwd: Airsopure1
		 - Set up emails on NameBright using airsopure domain???
		 	- johnathan.mccormick@airsopure.com / A1rS0Pur3123!
		 	- Settings :
		 	URL : http://www.NameBrightMail.com
		 	Username: johnathan.mccormick@Airsopure.com
			Email Address: johnathan.mccormick@Airsopure.com
			Password: A1rS0Pur3123!
			Incoming Mail Server: POP.NameBrightMail.com
			Incoming Mail Port: 110 (Standard) or 995 (Secured)
			Outgoing Mail Server: SMTP.NameBrightMail.com
			Outgoing Mail Port: 587 (Unsecured), 465 (Secured)
			Use Authentication: True
			- added NameBright to name server for email to work properly

20170413 - GoDaddy account
	 	 	- username: airsopure.ductcleaning@gmail.com
	 	 	- passwd: A1rS0Pur3123!
	 	 	- pin: 1357
	 	 	- Customer #154148953
	 	 	- cPanel:
	 	 		- username: airsopure
	 	 		- passwd: A1rS0Pur3123!
	 	 	- Website IP: 107.180.56.155
	 	 - VistaPrint account:
	 	 	- username: airsopure1@gmail.com
	 	 	- passwd: Airsopure123
	 	 - Changed nameservers on Huge Domains by logging into NameBright
	 	 	- Changed from:
	 	 		- logan.ns.cloudflare.com
	 	 		- maya.ns.cloudflare.com
	 	 	- Changed to (GoDaddy & found by zone file)
	 	 		- ns13.domaincontrol.com
	 	 		- ns14.domaincontrol.com
	 	 - uploaded all necessary files via FTP for website

20170414 - After phone meeting with John, fixed the following:
			- index / home page (completed)
				- view details - no url page found
			- remove Sanitizing & Deodorizing (completed)
			- remove pop out for 350 (completed)
			- phone banner (completed)
				- center text
				- center phone number
			- contact page (completed)
				- change to airsopure llc
			- black background
				- wouldn't look good with the black text
			- load with pictures on slideshow
			- make images on scroller larger (completed)
			- mobile capability (completed)

20170415 - worked on mobile viewing
			- insert navbar-toggle for mobile viewing
			- changed background color to view links
		 - finished index.html for iphone 6 view

20170416 - modify navigation for mobile viewing
			- able to have menu toggle on sm/xs devices
		 - changed background color to light blue per John's request
		 - changed color of navigation text to black per John's request
		 	- .nav.navbar-nav.nav-text-pg li a {} in carousel.css

20170419 - modify navigation for mobile viewing
			- able to have menu toggle on sm/xs devices
			- finished about.html for mobile view
			- finished gallery.html for mobile view
			- finished license.html for mobile view
			- finished faq.html for mobile view
			- finished store.html for mobile view
			- finished contact.html for mobile view
			- finished commercial-services-air-duct-cleaning.html for mobile view
			- finished commercial-services-dryer-cleaning.html for mobile view
			- finished commercial-services-hood-cleaning.html for mobile view
			- finished industrial-services-air-duct-cleaning.html for mobile view
			- finished industrial-services-dryer-cleaning.html for mobile view
			- finished industrial-services-hood-cleaning.html for mobile view
			- finished residental-services-air-duct-cleaning.html for mobile view
			- finished residental-services-dryer-cleaning.html for mobile view
			- finished residental-services-hood-cleaning.html for mobile view

20170420 - made change request by John
			- made spelling corrections
		 - site to find radius of certain city : https://www.freemaptools.com/find-zip-codes-inside-radius.htm

20170501 - added additional fees applied for buy it now services
		   - removal of Sanitizing & Deodorizing services on store page
		 - fixed the paypal description when purchasing from paypal

20170503 - implemented the cities web page (testing with Farmington, MI)
	 	   - URL : airsopure.com/air-duct-cleaning-farmington.html
		 - adding sanitizing & deodorizing services on store page
		 - adding PABL # on license page
		 - removed residental hood services page from navbar in all pages

20170504 - added Thumbtack widget to phone banner

20170509 - created 266 cities using the template John's qpproved
		   - use the following command to import multiple files: ftp -i airsopure.com then mput *

20170522 - updated MX entry for contact page to work properly
		   - updated navbar to extend to full screen by switch class="container-fluid" from class="container"

ToDo:
- remove the href to the parent services options
- fixed the view in about.html
  - fixed to be embed-responsive ... like video in faq.html
- vertical center text for purchasing dryer service in store.html
  - center dryer image as well
- might need to figure out how to resize the map if it's too small on the website
- fix the contact.php file
