import React from 'react';
import './User.css';
// import styled from 'styled-components';
import Card from '../UI/Card';
import UserInfo from './UserInfo';

const User = (props) => {

  const saveUserInfoHandler = (userData) => {
    props.onUserInfoHandler(userData);
  }

  return (
    <div>
      <Card className="input">
        <UserInfo onSaveUserInfoHandler={saveUserInfoHandler} />
      </Card>
    </div>
  )
}

export default User;