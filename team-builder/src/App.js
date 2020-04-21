import React, {useState} from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/form';

import './App.css';

export default function App (props) {

  const [teamMember, setTeamMember] = useState([
    {
      name: "John Doe",
      email: 'johndoe@email.com',
      role: 'Developer'
    }
  ]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    role: ""
  });

  const addTeamMember = person => {
    const newTeamMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };

    setTeamMember([...teamMember, newTeamMember]);

  };

  return (
    <div className="App">

      <h1>Team Builder</h1>

      <Form addTeamMember={addTeamMember}/>

      <TeamMember teamMember={teamMember}/>

    </div>
  );
}