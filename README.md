# FIFA Player Card App

This project is a React app that displays FIFA player cards using React components and Bootstrap for styling.

## Features
- Uses **create-react-app** to set up the project.
- Displays multiple FIFA players with details (name, team, nationality, jersey number, age, and image) using individual components.
- Uses a JSON array to store player data.
- Integrates **React-Bootstrap** for UI styling.
- Uses props and the spread operator for dynamic rendering.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/flavianokoth/gomycode-react-props-fifa-player-card.git
   ```

2. Navigate to the project directory:
   ```sh
   cd fifa-player-card
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Running the App
To start the development server, run:
```sh
npm start
```
This will launch the app in your default browser at `http://localhost:3000/`.

## Project Structure
```
fifa-player-card/
├── src/
│   ├── components/
│   │   ├── Player.js
│   │   ├── PlayersList.js
│   ├── data/
│   │   ├── players.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── public/
│   ├── index.html
├── package.json
├── README.md
```

## Implementation Details

### 1. Create `players.js` (Array of Players)
```javascript
const players = [
    {
        name: "Lionel Messi",
        team: "Inter Miami",
        nationality: "Argentina",
        jerseyNumber: 10,
        age: 36,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Cristiano Ronaldo",
        team: "Al Nassr",
        nationality: "Portugal",
        jerseyNumber: 7,
        age: 39,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Kylian Mbappe",
        team: "Paris Saint-Germain",
        nationality: "France",
        jerseyNumber: 7,
        age: 25,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Neymar Jr.",
        team: "Al Hilal",
        nationality: "Brazil",
        jerseyNumber: 10,
        age: 32,
        image: "https://via.placeholder.com/150"
    }
];
export default players;
```

### 2. Create `Player.js` (Player Component)
```javascript
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    image: "https://via.placeholder.com/150"
};

export default Player;
```

### 3. Create `PlayersList.js` (List of Players)
```javascript
import React from 'react';
import Player from './Player';
import players from '../data/players';

const PlayersList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;
```

### 4. Update `App.js`
```javascript
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

const App = () => {
    return (
        <div className="container mt-5 text-center">
            <h1>FIFA Player Cards</h1>
            <PlayersList />
        </div>
    );
};

export default App;
```

## Custom Styling
Customize styles in `styles.css`:
```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

## Technologies Used
- **React** (Functional components & props)
- **React-Bootstrap** (Card component for UI)
- **CSS** (Basic styling)

## License
This project is licensed under the MIT License.

---

Enjoy coding! 🚀

