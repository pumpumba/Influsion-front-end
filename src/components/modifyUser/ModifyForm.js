import React from 'react'

class ModifyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usrid: this.props.userId,
            username: '',
            password: '',
            email: '',
            age: 0,
            sex: '',
            confirmPassword:''
        }
        this.sendChanges = this.sendChanges.bind(this);
        this.confirmChanges = this.confirmChanges.bind(this);
    }

    confirmChanges(e){
        e.preventDefault()
        fetch('http://40.127.101.155/db/login/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username : this.state.username, password : this.state.confirmPassword})
        })
            .then(response => response.json())
            .then(response => (response.dbResults.loginSuccess) ? this.sendChanges(e) : this.props.wrongPassword())
            .catch(error => this.loginUnsuccsessfull())
    }

    sendChanges(e){
        e.preventDefault()
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
                email: data.rows[0].email,
                age: data.rows[0].age,
                sex: data.rows[0].sex
            })
        })
        .then(data => console.log(data))
    }

    render() {
        return (
            <form className="modifyForm">
                <p className="inputTitle">Enter new username</p>
                <input className="input" placeholder="Username"
                onChange={(e) => this.setState({ username: e.target.value })}
                ></input>

                <p className="inputTitle">Enter new password</p>
                <input className="input" placeholder="Password" type="password"
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

                <div className="confirmForm">
                    <p className="inputTitle">Enter password to confirm</p>
                    <input className="inputConfirm" placeholder="Password" type="password"
                        onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                    ></input>
                    <button className="modButton" onClick={this.confirmChanges}>Confirm</button>
                </div>
            </form>
        )
    }
}

export default ModifyForm
