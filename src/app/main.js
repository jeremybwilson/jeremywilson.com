import { run } from "./app.js";
import { AlertService } from "./alert.service";
import { ComponentService } from "./component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

import '../css/variables.scss';
import '../css/theme.scss';

import brushLogo from '../images/logo_brush.png';
import cssLogo from '../images/logo_css.png';
import htmlLogo from '../images/logo_html.png';
import jsLogo from '../images/logo_js.png';
import seattleSkyline from '../images/seattle_skyline.png';
import webpackLogo from '../images/webpack.svg';

const writeYear = () => {
  const fullYear = new Date();
  const currentYear = fullYear.getFullYear();
  // find element to insert current year into
  const yearSpan = document.querySelector('.current-year');
  // insert current year into element
  yearSpan.innerHTML = `${currentYear}`;
}
console.log(`Writing in the year here`);
writeYear();

// import practiceStuff from "./practice";

let myName = 'Jeremy';
console.log(`Hello ${myName}!`);

/*============================================================================
  Header on Index
==============================================================================*/
theme.Header = (function() {
  function Header(container) {
    const $container = this.$container = $(container);
    const ui = {
      arrows: $( '#promo-arrow-left, #promo-arrow-right' ),
      body: $( 'body' ),
      containerId: $container.attr('data-section-id'),
      html: $( 'html' ),
      swapRate: $container.attr('data-swap-rate'),
      promoWrap: $( '#double-promo-wrapper' ),
      promoTrigger: $( '.promo-banner > a' )
    }
    const self = this;


    // PROMO BANNER : If 2+ Promos enabled, connect swapping and arrow functionality
    // if ( ui.promoWrap && ui.arrows && ui.swapRate ) {
      if ( ui.promoWrap ) {

      // METHOD : SWAP : Swap promo functionality
      const swapPromos = () => {
        ui.promoWrap.toggleClass( 'show-promo-two' );
      }

      // METHOD : TOGGLE : Swap promos every 5 seconds
      var start = () => {
        this.autoToggle = setInterval( function() {
          swapPromos();
        },  1000 );
      };

      // METHOD : RESUME : Resume toggle after 25 secs of no user activity
      const resume = () => {
        if ( this.resumeTimer ) {
          clearTimeout( this.resumeTimer );
        }
        this.resumeTimer = setTimeout( function() {
          start();
        }, 25000 );
      };


      // EVENT : CLICK : User clicks either arrow, banner toggles and pauses swapping for ~30 secs
      ui.arrows.on( 'click', () => {
        swapPromos();

        // DISABLE : Pause auto-toggle, user is focusing on banner
        if ( this.autoToggle ) {
          clearInterval( this.autoToggle );
        }

        // RESUME : Begin 30 sec countdown timer to resume swapping (25 + 'ui.swapToggle' in sec )
        resume();
      });


      // START : Begin auto-toggle until user interaction
      start();
    }

    // POPUP : Activate popup

    ui.promoTrigger.each(function() {

      $(this).fancybox({
        href: $(this).attr('href'),
        wrapCSS: 'fancybox-promo-popup',
        openEffect: 'none',
        closeEffect: 'none',
        autoHeight: true,
        maxWidth: 400,
        maxHeight: 400,
        padding: 30,
        live: true
      });
    });

  }
  Header.prototype = _.assignIn({}, Header.prototype, {});
  return Header;
})();

/*============================================================================
  Registering Sections
==============================================================================*/
$(document).ready(function() {
  var sections = new theme.Sections();
  sections.register('header-section', theme.Header);
});
