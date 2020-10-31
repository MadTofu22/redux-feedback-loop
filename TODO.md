# TODO:
==============

## Client Side Setup:

[X] Setup Redux Store
[X] Setup feedbackReducer
[ ] Setup HashRouter routes in App.js
- [ ] /feeling
- [ ] /understanding
- [ ] /support
- [ ] /comments
- [ ] /review
- [ ] /thanks
- [ ] STRETCH: /admin

## Create InputPage Component:

[ ] Header
 - [ ] Different on each page
 - - [ ] How are you feeling today?
 - - [ ] How well are you understanding the content?
 - - [ ] How well are you being supported?
 - - [ ] Any commenty you want to leave?
[ ] Next Button
- [ ] Routes to the next page
- [ ] Comments page routes to Review Page
[ ] Input
- [ ] Input type is different on some pages
- - [ ] Page 1-3 use Number input and need validation
- - [ ] Page 4 is a text input and can be empty
- [ ] Input labels are different on each page
- - [ ] Feeling?
- - [ ] Understanding?
- - [ ] Support?
- - [ ] Comments

[ ] STRETCH: Allow user to go back and edit entries
- [ ] Back Button
- - [ ] Page 1 does not need a back button
- - [ ] Pages 2-Reviw get a back button
- - [ ] Previous page should have the current entry when loaded

## Create ReviewPage Component:

[ ] Header - Review Your Feedback
[ ] Display inputs
- [ ] Feelings:
- [ ] Understanding: 
- [ ] Support: 
- [ ] Comments: 
[ ] Submit Button
- [ ] Stores feedback into DB
- [ ] Progress to Thanks Page

[ ] STRETCH: Allow user to go back and edit entries
- [ ] Back Button
- - [ ] Previous pages should have the current entry when loaded

## Create ThanksPage Component:

[ ] Header - Thank You!
[ ] Leave New Feedback button
- [ ] Returns user to Page 1
- [ ] Starts new feedback entry process

## Create Server Routes:

[ ] Route server.js to feedback.router.js
[ ] Create POST request to prime_feedback DB
[ ] Create GET request to prime_feedback DB
[ ] STRETCH: Create DELETE request to prime_feedback DB

## STRETCH: Create Admin Page component

[ ] Only accessible by direct url /admin
[ ] Display all existing feedback in the DB
- [ ] Display in table
- [ ] Most recent entry displays at top
[ ] Allow entries to be deleted
- [ ] Confirm deletion before progressing
[ ] Allow the admin to flag entries for further review
