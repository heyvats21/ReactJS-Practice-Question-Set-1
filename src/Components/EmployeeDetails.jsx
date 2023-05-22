export default function EmployeeDetails({ employees }) {
  return (
    <div>
      <h1>Employee Details</h1>
      <ul>
        {
          <ul>
            {employees.map((emp) => (
              <li
                style={{
                  backgroundColor: emp.level === 2 ? "orange" : "",
                  border:
                    emp.designation === "President" ? "4px solid green" : ""
                }}
              >
                Name:{emp.name},Level:{emp.level},Dept:{emp.dept},Designation:
                {emp.designation},Salary:{emp.salary}
              </li>
            ))}
          </ul>
        }
      </ul>
      <p>
        Total Salary=
        {employees.reduce((acc, curr) => (acc += curr.salary), 0)}
      </p>
    </div>
  );
}
