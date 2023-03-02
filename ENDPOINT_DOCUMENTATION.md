# API Data Types

### CredentialsDto
``` javascript
{
  username: string,
  password: string
}
```

### ProfileDto
``` javascript
{
  firstname: string,
  lastname: string,
  email: string,
  phone: string
}
```

### BasicUserDto
``` javascript
{
  id: long,
  profile: ProfileDto,
  isAdmin: boolean,
  active: boolean,
  status: string
}
```

### FullUserDto
``` javascript
{
  id: long,
  profile: ProfileDto,
  isAdmin: boolean,
  active: boolean,
  status: string,
  companies: [CompanyDto],
  teams: [TeamDto]
}
```

### UserRequestDto
``` javascript
{
  credentials: CredentialsDto,
  profile: ProfileDto,
  isAdmin: boolean,
}
```

### TeamDto
``` javascript
{
  id: long,
  name: string,
  description: string,
  users: [BasicUserDto]
}
```

### CompanyDto
``` javascript
{
  id: long,
  name: string,
  description: string,
  teams: [TeamDto],
  users: [BasicUserDto]
}
```

### AnnouncementDto
``` javascript
{
  id: long,
  date: timestamp,
  title: string,
  message: string,
  author: BasicUserDto
}
```

### ProjectDto
``` javascript
{
  id: long,
  name: string,
  description: string,
  active: boolean,
  team: TeamDto
}
```

### TeamWithProjectsDto
``` javascript
{
  id: long,
  name: string,
  description: string,
  users: [BasicUserDto],
  projects: [BasicProjectDto]
}
```

### BasicProjectDto
``` javascript
{
  id: long,
  name: string,
  description: string,
  active: boolean,
}
```

---

# API Endpoints

### `POST /users/login`
Logs a user into the application. If any required fields are missing or the `credentials` passed in do not match those of an active user in the database, an error should be sent in lieu of a response.

#### Request
``` javascript
'CredentialsDto'
```

#### Response
``` javascript
'FullUserDto'
```

### `PATCH /users/{id}`
Changes the specified user's `active` property to the provided `active` property in the request's `BasicUserDto`.

#### Request
``` javascript
'BasicUserDto' // field values should be null except: active
```

#### Response
``` javascript
'BasicUserDto'
```

### `GET /company/{id}/users`
Retrieves a list of *all* users that work for the given company. If the company id provided does not match an active company in the database, an error should be sent in lieu of a response.

#### Response
``` javascript
['FullUserDto']
```

### `GET /company`
Retrieves a list of all companies.

#### Response
``` javascript
['CompanyDto']
```

### `GET /company/{id}/users/active`
Retrieves a list of all *active* users that work for the given company. If the company id provided does not match an active company in the database, an error should be sent in lieu of a response.

#### Response
``` javascript
['BasicUserDto']
```

### `GET /company/{id}/announcements`
Retrieves a list of all non-deleted announcements for the provided company. If the company id provided does not match an active company in the database, an error should be sent in lieu of a response.

#### Response
``` javascript
['AnnouncementDto']
```

### `GET /company/{id}/teams`
Retrieves a list of all non-deleted teams for the provided company. If the company id provided does not match an active company in the database, an error should be sent in lieu of a response.

#### Response
``` javascript
['TeamDto']
```

### `GET /company/{id}/projects`
Retrieves a list of all teams within a given company, including a list of their projects. If the company id provided does not match an active company in the database, an error should be sent in lieu of a response.

#### Response
```javascript
['TeamWithProjectsDto']
```

### `POST /company/{id}/users`
Creates a new user for a company. If the company id provided does not match an active company in the database, an error should be sent in lieu of a response.

### Request
``` javascript
'UserRequestDto'
```

#### Response
``` javascript
'BasicUserDto'
```

### `POST /company/{id}/announcements`
Creates a new announcement for a specified company. If the company id provided does not match an active company in the database or the provided announcement is '', or the provided `BasicUserDto.id` does not match an active user in the given company, or the `BasicUserDto.admin` is not `true`, an error should be sent in lieu of a response.

#### Request
``` javascript
'AnnouncementDto' // field values should be null except: title, message, BasicUserDto.id, BasicUserDto.admin
```

#### Response
``` javascript
'AnnouncementDto'
```

### `POST /company/{id}/teams`
Creates a new team for a specified company. If the company id provided does not match an active company in the database or any of the team members are not active or a member of the company or the team has no members, an error should be sent in lieu of a response.

#### Request
``` javascript
'TeamDto' // TeamDto.id value should be null, and every user's BasicUserDto field values should be null except id
```

#### Response
``` javascript
'TeamDto'
```

### `GET /teams/{id}/projects`
Retrieves a list of all non-deleted projects for the provided team. If team id provided does not match an active team in the database or if the name is null, an error should be sent in lieu of a response.

#### Response
``` javascript
['ProjectDto']
```

### `GET /teams/{id}/users`
Gets the users of the specified team. If team id provided does not match an active company in the database, an error should be sent in lieu of a response.

#### Response
``` javascript
['BasicUserDto']
```

### `POST /teams/{id}/projects`
Creates a project for the specified team. If the team id provided does not match an active team in the database, an error should be sent in lieu of a response.

#### Request
``` javascript
'ProjectDto' // id value should be null
```

#### Response
``` javascript
'ProjectDto'
```

### `PATCH company/{id}/teams/{id}/projects`
Updates a project. If the project id provided does not match an active project or the new name is '', an error should be sent in lieu of a response.

#### Request
``` javascript
'ProjectDto' // field values should be null except: id, name, description
```

#### Response
``` javascript
'ProjectDto'
```
