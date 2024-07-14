# Exhibition Calendar

Exhibition Calendar is an Angular application that displays a calendar of exhibitions. Users can add, edit, and delete exhibitions, and view them on a calendar based on the selected venue.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Running Tests](#running-tests)
- [Mock API](#mock-api)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/aaalvnn/exhibition-calendar.git
    cd exhibition-calendar
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Install JSON server globally:
    ```sh
    npm install -g json-server
    ```

4. Start the JSON server:
    ```sh
    json-server --watch db.json --port 5000
    ```

5. Start the Angular application:
    ```sh
    ng serve
    ```

6. Open your browser and navigate to `http://localhost:4200`.

## Usage

- The main page displays a calendar with exhibitions.
- Users can select a venue from the dropdown in the header.
- Users can add new exhibitions by clicking the "Add Event" button.
- Users can edit or delete existing exhibitions by clicking on them in the calendar.

## API

The application uses a mock API served by JSON server. The API endpoints are:

- `GET /exhibitions`: Retrieves a list of all exhibitions.
- `POST /exhibitions`: Adds a new exhibition.
- `PUT /exhibitions/:id`: Updates an existing exhibition.
- `DELETE /exhibitions/:id`: Deletes an exhibition.

### Exhibition Data Structure

```json
"venues": [
    {
      "id": "string",
      "name": "string"
    }],
"exhibitions": [
    {
      "id": "string",
      "title": "string",
      "date": "string",
      "venue": "string"
  }], 

