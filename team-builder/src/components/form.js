import React, {useState} from "react";

export default function Form (props) {

    const [teamMember, setTeamMember] = useState({

        name: "",

        email: "",

        role: ""

    });

    const handleChange = i => {
        setTeamMember({...teamMember, [i.target.name]: i.target.value});
    };

    const submitForm = i => {
        i.preventDefault();
        props.addTeamMember(teamMember);
        setTeamMember({name:"", email:"", role:""});
    };

    return (
        <form className ="form"onSubmit={submitForm}>

            {/* Name */}
            <label htmlFor="name"> Name </label>

            <input id="name" type="text" name="name" value={teamMember.name} onChange={handleChange}/>

            {/* Email */}
            <label htmlFor="email"> Email </label>

            <input id="email" type="text" name="email" value={teamMember.email} onChange={handleChange}/>

            {/* Role */}
            <label htmlFor="role"> Role </label>

            <input id="role" type="text" name="role" value={teamMember.role} onChange={handleChange}/>

            <button className="submitBtn" type="submit">Add Member</button>

        </form>
    )
};