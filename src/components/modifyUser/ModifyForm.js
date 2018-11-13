import React from 'react'

class ModifyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usrid: 49,
            username: '',
            password: '',
            email: '',
            age: 0,
            sex: '',
            confirm: false,
            confirmPassword:''
        }
        this.sendChanges = this.sendChanges.bind(this);
        this.confirmChanges = this.confirmChanges.bind(this);
        this.startConfirm = this.startConfirm.bind(this);
    }

    confirmChanges(e){
        e.preventDefault()
        console.log(this.state.confirmPassword != this.state.password)
        if(this.state.confirmPassword != this.state.password) {
            this.props.wrongPassword()
        }else{
            this.sendChanges(e)
        }
    }

    startConfirm(e){
        e.preventDefault()
        this.setState({confirm: true})
    }

    sendChanges(e){
        e.preventDefault()
        console.log("send changed")
        console.log(this.state)
        fetch('http://40.127.101.155/db/modify_user/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(response => (response.updateSuccess) ? this.props.modSuccsessfull() : this.props.modUnsuccsessfull())
    }

    componentDidMount(){
        var url = "http://40.127.101.155/db/get_user?usrid=" + this.state.usrid

        fetch(url, {
            params: this.state.userid
        })
        .then(data => data.json())
        .then(data => {
            this.setState({
                username: data.rows[0].usrname,
                password: '1234',
                email: data.rows[0].email,
                age: data.rows[0].age,
                sex: data.rows[0].sex
            })
        })
    }

    render() {
        let obj;
        if(this.state.confirm){
            obj =   <div>
                        <p className="inputTitle">Enter password to confirm</p>
                        <input className="input" placeholder="Password"
                            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                        ></input>
                    <button className="modButton" onClick={this.confirmChanges}>Confirm</button>
                    </div>
        }else{
            obj = <button className="modButton" onClick={this.startConfirm}>Send Changes</button>
        }

        return (
            <form className="modifyForm">
                <h1 className="title">Settings</h1>

                <p className="inputTitle">Enter new username</p>
                <input className="input" placeholder="Username"
                onChange={(e) => this.setState({ username: e.target.value })}
                ></input>

                <p className="inputTitle">Enter new password</p>
                <input className="input" placeholder="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
                ></input>

                <p className="inputTitle">Enter new age</p>
                <input className="input" placeholder="Age"
                onChange={(e) => this.setState({ age: e.target.value })}
                ></input>

                <p className="inputTitle">Enter new sex</p>
                <select name="sex" className="input"
                onChange={(e) => this.setState({ sex: e.target.value })}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>

                <p className="inputTitle">Enter new email</p>
                <input className="input" placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                ></input>

                {obj}

            </form>
        )
    }
}

export default ModifyForm
