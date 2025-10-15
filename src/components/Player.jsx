import { useState } from "react";

export default function Player({ initialPlayerName, symbol, isActive, onPlayerNameChange }) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(prevEditing => !prevEditing);
    
    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input 
            type="text" 
            required 
            value={playerName} 
            onChange={handleChange} 
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
