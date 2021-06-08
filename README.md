# Budget Tracker <!-- omit in toc -->
- [Description](#description)
- [Demo](#demo)
- [Submission Requirements](#submission-requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Grading Criteria](#grading-criteria)
## Description

## Demo

## Submission Requirements
### User Story
```
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
```
### Acceptance Criteria
```
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```
### Grading Criteria
#### Technical Acceptance Criteria - 40% <!-- omit in toc -->
- [ ] Includes a service worker
- [ ] Includes a web manifest
- [ ] Uses IndexedDB for offline functionality
- [ ] Deployed using Heroku
#### Deployment - 32% <!-- omit in toc -->
- [ ] Deployed at live URL
- [ ] Loads with no errors
- [ ] GitHub URL submitted
- [ ] Repository contains application code
#### Application Quality - 15% <!-- omit in toc -->
- [ ] User experience is intuitive and easy to navigate
#### Repository Quality - 13% <!-- omit in toc -->
- [ ] Has a unique name
- [ ] Follows best practices for file structure and naming conventions
- [ ] Follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [ ] Contains multiple descriptive commit messages
- [ ] Contains a high-quality README file with description, screenshot, and link to deployed application