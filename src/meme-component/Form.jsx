import React, { useState } from 'react';

const Form =() =>{
    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: false,
        favColor: ""
    })
    function handleChange(event) {
        const {name,value,type,checked}= event.target
        setFormData(prevData =>{
            return {
                ...prevData,
                [name]:type  === "checkbox"? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="first name" 
            name="firstName" 
            onChange={handleChange}
            value={formData.firstName}
            />
            <br />
            <input type="text" 
            placeholder="last name" 
            name="lastName" 
            onChange={handleChange}
            value={formData.lastName}
            /> <br />
            <input type="email" 
            placeholder="Email" 
            name="email" 
            onChange={handleChange}
            value={formData.email}
            />
            <br />
            <textarea 
            value={formData.comment}
            placeholder="Comment"
            name="comment"
            onChange={handleChange}
            /> <br />
            <input 
            type="checkbox" 
            checked={formData.isFriendly}
            onChange={handleChange} 
            id="isFriendly" 
            name="isFriendly" /> 
            <label htmlFor="isFriendly">Are you friendly</label>
            
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                type="radio" 
                name="employment" 
                id="Unemployed"
                value="Unemployed"
                onChange={handleChange} /> 
                <label htmlFor="unemployed">Unemployed</label><br />
                <input 
                type="radio" 
                name="employment" 
                id="part-time"
                value="part-time"
                onChange={handleChange}
                 /> 
                <label htmlFor="unemployed">Part-time</label><br />
                <input 
                type="radio" 
                name="employment" 
                id="Full-time"
                value="Full-time"
                onChange={handleChange} /> 
                <label htmlFor="unemployed">Full time</label>
            </fieldset> <br />
            <label htmlFor="favColor">What is your favorite color?</label> <br />
            <select 
                name="favColor"
                id="favColor"
                onChange={handleChange}
                value={formData.favColor}>
                <option value="red">---Choose---</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="purple">purple</option>
                <option value="violet">violet</option>
            </select> <br /> <br />
            <button>
                Submit
            </button>
        </form>
    )
}
export default Form;