function UserList(props) {
  return (
    <div>
      <table>
        <tbody>
          {props.userList.map((user) => (
            <tr key={user.id}>
              <td>
                Name: {user.name}, Age: {user.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
