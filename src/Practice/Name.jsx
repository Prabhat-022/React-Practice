
const person = {
    name: 'Gregorio Y. Zara',
    age: 26,
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const Name = () => {

    return (
        <div style={person.theme}>
            <h1>{person.name}s Scientest</h1>
            <h2>{person.age} years olds</h2>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );

}

export default Name
