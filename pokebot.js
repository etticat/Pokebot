// ==UserScript==
// @name         Ettis awesome Poking Bot
// @namespace    http://etticat.net/
// @version      1.0
// @description  nope
// @author       etti
// @match        https://www.facebook.com/pokes/?notif_t=poke
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

jQuery.noConflict();
jQuery('document').ready(function($){
   setInterval(function(){
      var $item = $('a[ajaxify^="/pokes"]');
      
      if($item !== 'undefined' && $item.length && $($item.get(0)).text() == 'Poke Back' ){
               $item.get(0).click();
      }
   }, 1000);
   
});
