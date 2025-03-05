const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Anson",
      lastName: "Joseph",
      email: "ansonjoseph@gmail.com",
    },
    {
      id: 2,
      firstName: "Saji",
      lastName: "Anson",
      email: "sajianson@gmail.com",
    },
    {
      id: 3,
      firstName: "Steve",
      lastName: "Anson",
      email: "steveanson@gmail.com",
    },
    {
      id: 4,
      firstName: "Shaun",
      lastName: "Anson",
      email: "shaunanson@gmail.com",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">List of Employees</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
