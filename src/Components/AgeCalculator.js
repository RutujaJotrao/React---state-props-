import React, { useState } from 'react';

const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (birthdate) {
            const birthdateObj = new Date(birthdate);
            const currentDate = new Date();
            
            const ageDifference = currentDate.getFullYear() - birthdateObj.getFullYear();

            if (
                currentDate.getMonth() < birthdateObj.getMonth() ||
                (currentDate.getMonth() === birthdateObj.getMonth() && currentDate.getDate() < birthdateObj.getDate())
            ) {
                setAge(ageDifference - 1);
            } else {
                setAge(ageDifference);
            }
        } else {
            alert('Please select a valid birthdate.');
        }
    };

    return (
        <div>
            <h3>Select birthdate</h3>
            <input
                type='date'
                onChange={(event) => setBirthdate(event.target.value)}
                value={birthdate}
            />
            <br /><br />
            <button type='button' onClick={calculateAge}>Calculate Age</button>
            {age !== null && <p>Your age is: {age} years</p>}
        </div>
    );
}

export default AgeCalculator;
