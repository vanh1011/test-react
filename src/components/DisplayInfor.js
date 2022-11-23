import React from "react";
// prop: properties
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser  // dau ! thay cho touchgo neu la false thi sau khi click se thanh true va ngc lai
        })
    }
    render() {
        //  cach 1 
        //console.log(this.props);
        // cach 2 dung destructuring
        const { listUsers } = this.props;  //this.props la obj  nen dung ngoac nhon
        // = const listUsers = this.props.listUsers
        console.log(listUsers);
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list users: " : "Show list users: "}
                    </span>
                </div>
                {this.state.isShowListUser && //  dieu kien bang: true=> xay ra or false=> ko xay ra
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> name: {user.name} </div>
                                    <div> age: {user.age} </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor;