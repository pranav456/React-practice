import React from "react"; 

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            // count:0,
            userInfo: {
                name:"Dummy",
                location:"Bengaluru"
            }
        };


    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/pranav456")
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json,
        })

    }

    render(){
        // const {name,location} = this.props
        // const {count} = this.state;
        const {name,location,avatar_url} = this.state.userInfo; 
        return(
            <div>
                {/* <h1>Count: {count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({count: this.state.count + 1}) 
                }}>Count Increase</button> */}
                <img src={avatar_url}/>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
               

            </div>
        )
    }

}
export default UserClass;