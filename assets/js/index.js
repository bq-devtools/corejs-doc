'use strict';
/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function($) {

    $(document).ready(function() {

        $('.post-content').fitVids();

        $('#toc').toc();
        $(document.links).filter(function() {
            return this.hostname != window.location.hostname;
        }).attr('target', '_blank');

        // TODO: refactor this
        $('p').each(function() {
        	if(!$(this).html()) {
        		this.remove();
        	}
        });

        $('.nav__menu--mobile').change(function() {
            if (this.selectedIndex!==0) {
                window.location.href = this.value;
            }
        });

    });

}(jQuery));

// Google Analytics Tracking code
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52250178-1', 'auto');
  ga('send', 'pageview');
