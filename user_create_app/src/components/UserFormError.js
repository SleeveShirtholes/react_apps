function UserFormError(props) {
  if (props.flashMessage === true) {
    return <div>You done and messed up</div>;
  } else {
    return <div></div>;
  }
}

export default UserFormError;
