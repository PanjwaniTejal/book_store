// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// require("@popperjs/core")

import "bootstrap"
require("../stylesheets/application.scss")

import $ from 'jquery'
import "jquery-validation"

import 'select2/dist/css/select2.css'
import 'select2'

/// if you don't have turnbolinks then use this:
//// document.addEventListener('DOMContentLoaded', () => { 
window.addEventListener('turbolinks:load', () => {
  $('.select2').select2({
    tags: true,
    tokenSeparators: [',', ' ']
  });

  // Author form validation
  $('#author_form').validate({
    rules: {
      "author[first_name]": {
        required: true,
      },
      "author[last_name]": {
        required: true,
      },
      "author[date_of_birth]": {
        required: true,
      }
    },
    messages: {
      "author[first_name]": {
        required: "Please enter first name"
        },
      "author[last_name]": {
        required: "Please enter last name"
      },
      "author[date_of_birth]": {
        required: "Please enter date of birth"
      }
    }
  });


  // Book form validation
  $('#book_form').validate({
    rules: {
      "book[title]": {
        required: true,
      },
      "book[price]": {
        required: true,
      },
      "book[level]": {
        required: true,
      },
      'author_ids[]': {
        required: true,
      }
    },
    messages: {
      "book[title]": {
        required: "Please enter title"
        },
      "book[price]": {
        required: "Please enter price"
      },
      "book[level]": {
        required: "Please choose level"
      },
      "author_ids[]": {
        required: "Please choose author"
      }
    }
  });

  
  $('#filter_form').validate({
    rules: {
      "min_price": {
        number: true
      },
      "max_price": {
        number: true,
        greaterThan: '#min_price'
      },
    },
    messages: {
      "min_price": {
        number: "Please enter a valid number",
        min: "Minimum price must be greater than or equal to 0",
        max: "Minimum price must be less than or equal to 9999.99"
      },
      "max_price": {
        number: "Please enter a valid number",
        min: "Maximum price must be greater than or equal to 0",
        max: "Maximum price must be less than or equal to 9999.99"
      }
    }
  });

  $.validator.addMethod('greaterThan', function(value, ele, params){
    var target = parseInt($(params).val());
    return parseInt(value) > target;
  }, 'Invalid Value');

})
