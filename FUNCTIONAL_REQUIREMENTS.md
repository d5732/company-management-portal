FUNCTIONAL REQUIREMENTS
===============================

- Create a User // (Only an Admin can create a User)
    - Non-Admin
    - Admin
- Get all companies (useful when selecting a company from options)
- Post an announcement (Only an Admin can create an announcement)
- Create a Project // (Only an Admin can create a project)
- Create a Team // (Distinct users set)
- Update project


QUESTIONS
---

- How are companies created?
    - Seeded, hard coded

- How is the first admin (superadmin) in each company created?
    - Seeded - e.g. {username: "companyadmin@company.com", password: "adminpassword"}

- How is User.active updated? 
    - User.login()
    - User.logout()
    - Last endpoint interaction + 15 minutes

- How is User.status ("pending"|"active") updated? **tech lead/account manager**
    - Is this a deleted flag, and/or should there be a deleted flag?
    - Assumed behavior:
        - Default = "pending"
        - First User.login() :: "pending" -> "active" 

- How is Project.active (true|false) updated? **tech lead/account manager**
    - What does Project.active indicate? Project is active/pending or active/deleted
    - Do you really want a boolean instead of a Tuple? ("pending", "active", "completed")
    - Assumed behavior: 
        - Project member has logged in :: false -> true

- Deletes? 
    - Is anything ever deleted? **tech lead/account manager**
    - Non-deleted and "active" are mentioned often in the wiki, what do all these really mean? 

- When is project.edited date updated, or is this even used? **This is in the Figma, but not in the ERD**





Notes:
teamnames distinct within a company, lots of sets in entities

BACKEND CODE STYLE GUIDE
---

- PascalCase Classes
- camelCase member functions
- camelCase properties and variables
- returns between members and properties
- no/minimal(expressive only) returns within functions


BACKEND SPRINT WORK STRATEGY AND GOALS
---

- How soon can we test with PostMan?
- Pairing? Individual tasks?