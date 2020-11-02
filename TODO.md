# TODO:

## Client Side Setup:

- [X] Setup Redux Store
- [X] Setup feedbackReducer
- [X] Setup HashRouter routes in App.js
- - [X] /feeling
- - [X] /understanding
- - [X] /support
- - [X] /comments
- - [X] /review
- - [X] /thanks
- - [X] STRETCH: /admin
- [X] Update visuals with material UI

## Create InputPage Component:

- [X] Header
 - - [X] Different on each page
 - - - [X] How are you feeling today?
 - - - [X] How well are you understanding the content?
 - - - [X] How well are you being supported?
 - - - [X] Any comments you want to leave?
- [X] Next Button
- - [X] Routes to the next page
- - [X] Comments page routes to Review Page
- [X] Input
- - [X] Input type is different on some pages
- - - [X] Page 1-3 use Number input and need validation
- - - [X] Page 4 is a text input and can be empty
- - [X] Input labels are different on each page
- - - [X] Feeling?
- - - [X] Understanding?
- - - [X] Support?
- - - [X] Comments

- [X] STRETCH: Allow user to go back and edit entries
- - [X] Back Button
- - - [X] Page 1 does not need a back button
- - - [X] Pages 2-Reviw get a back button
- - - [X] Previous page should have the current entry when loaded

## Create ReviewPage Component:

- [X] Header - Review Your Feedback
- [X] Display inputs
- - [X] Feelings:
- - [X] Understanding: 
- - [X] Support: 
- - [X] Comments: 
- [X] Submit Button
- - [X] Stores feedback into DB
- - [X] Progress to Thanks Page

- [X] STRETCH: Allow user to go back and edit entries
- - [X] Back Button
- - - [X] Previous pages should have the current entry when loaded

## Create ThanksPage Component:

- [X] Header - Thank You!
- [X] Leave New Feedback button
- - [X] Returns user to Page 1
- - [X] Starts new feedback entry process

## Create Server Routes:

- [X] Route server.js to feedback.router.js
- [X] Create POST request to prime_feedback DB
- [X] STRETCH: Create GET request to prime_feedback DB
- [X] STRETCH: Create DELETE request to prime_feedback DB

## STRETCH: Create Admin Page component

- [X] Only accessible by direct url /admin
- [X] Display all existing feedback in the DB
- - [X] Display in table
- - [X] Most recent entry displays at top
- [X] Allow entries to be deleted
- - [X] Confirm deletion before progressing
- [X] Allow the admin to flag entries for further review
