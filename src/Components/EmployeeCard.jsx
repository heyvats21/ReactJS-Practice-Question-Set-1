export default function EmployeeCard({ name, designation, workExperience }) {
  return (
    <div>
      <h2>Employee Card</h2>
      <p>Name:{name}</p>
      <p style={{ color: "green" }}>Designation:{designation}</p>
      <p style={{ color: "blue" }}>Work Experience:{workExperience}</p>
      <button>Start</button>
    </div>
  );
}
