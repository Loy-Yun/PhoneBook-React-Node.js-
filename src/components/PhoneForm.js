import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name : '',
        phone : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
            search: '',
        })
    }
    mySearch =(e) =>{
       this.setState({
            [e.target.search] : e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder={'이름'}
                    value={this.state.name}
                    onChange={this.handleChange}
                    name={'name'}
                />
                <input
                    placeholder={'전화번호'}
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name={'phone'}
                />
                <button type={'submit'}>등록</button>
                <input
                    placeholder={'검색'}
                    value={this.state.search}
                    onChange={this.handleChange }
                    name={'search'}
                />
                <button type={'button'} onClick={this.mySearch}>Click</button>
            </form>
        );
    }
}
export default PhoneForm;