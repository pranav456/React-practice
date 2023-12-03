import UserClass from "./UserClass";
const About = () => {
    return (
        <div className="user-card">
            <h1>About</h1>
            <h2>Namaste React Web Series</h2>
            <UserClass name={"Pranav S Bhargav"} location={"Bengaluru"} />
        </div>
    )
}

export default About;