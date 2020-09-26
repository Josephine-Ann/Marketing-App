import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <h1>Hi</h1>
        <button onClick={startLogin}>Login with Google </button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);