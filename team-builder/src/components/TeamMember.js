import React from "react";

export default function TeamMember (props) {

    const {teamMember} = props;

    return (
        <div>

            {props.teamMember.map(person => (
                <div className="team-member" key={teamMember.id}>

                    <h1><em>Name</em> = <strong>{person.name}</strong></h1>

                    <p><em>Email</em> = <strong>{person.email}</strong></p>

                    <p><em>Role</em> = <strong>{person.role}</strong></p>

                </div>
                
            ))}
        </div>
    );
};