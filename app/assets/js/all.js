// const { escapeSelector } = require("jquery");

$(document).ready(function () {
  $('.header__toggler').click(function (e) { 
    e.preventDefault();
    $('.header__block-list').slideToggle(300);
  });

  
});

