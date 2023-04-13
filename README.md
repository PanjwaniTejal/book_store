# Setup
1. rvm use 2.6.2
2. bundle install
3. rails db:create
4. rails db:migrate
5. start rails server using 
   rails s


# Steps I follow to create model and controller
1. rails g model author first_name last_name date_of_birth:datetime
2. rails g model book title price:decimal level:integer
3. rails g migration CreateJoinTableAuthorBook author book

4. rails g controller authors
5. rails g controller books

# Add bootstrap and jquery
1. yarn add bootstrap jquery @popperjs/core
2. update it with the following code:

```config/webpack/environment.js
const { environment } = require('@rails/webpacker')

// Add the following lines
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
}))
// End new addition

module.exports = environment
```

3. update our application.js file to load Bootstrap:

```import "bootstrap"
require("../stylesheets/application.scss")

import $ from 'jquery'
import "jquery-validation"
```
# Add jquery validation
1. yarn add jquery-validation
2. Add into application.js

```import "jquery-validation" ```

# Requirement 1:
Create 2 models

### Authors:
author_id
first_name
Last_name
date_of_birth

### Books:
book_id
book_title
price
level (Beginner, intermediate, advanced)


# Requirement 2:
Books can have many authors and Authors can have many Books.

### For example:
R D Sharma has written 2 Books Trigonometry and Advanced Trigonometry
On Advanced Trigonometry, he Collaborated with Deepika Yadav.
So Advanced Trigonometry itself is composed of 2 Authors

Create any join tables if needed for the above requirement


# Requirement 3:
Create an interface from where you can:

Add Author
List Author
Edit Author
Delete Author


Add Book
List Book
Edit Book
Delete Book


While adding a book, you can select multiple authors from the author's table for that book.


# Requirement 4:
Add JQuery validation on all  forms (Required fields, Max or Min length, data type, etc)


# Requirement 5:
Create an author/show to get author details

For Eg:

If I fire /authors/{author_id}
It will return the author's details and all the books that the author has written for the {author_id}


# Requirement 6:
Add a ReactJS filter in the book listing page with price, level, and author name.







