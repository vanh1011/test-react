import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "arigatou", age: "18" },
            { id: 2, name: "ashita", age: "21" },
            { id: 3, name: "kyuno", age: "22" }
        ]
    }
    handleAddNewUser = (userObj) => {
        // console.log(">>>> checkk");
        console.log("check " + userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers,]
        })

    }
    render() {

        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div >
        )
    }
}
export default MyComponent;