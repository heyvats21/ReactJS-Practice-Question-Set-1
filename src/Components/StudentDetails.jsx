export default function StudentDetails({ student }) {
  const { name, english, maths, computers } = student;
  const totalMarks = english + maths + computers;

  let grade = "";
  if (totalMarks >= 225) {
    grade = "A";
  } else if (totalMarks >= 180) {
    grade = "B";
  } else if (totalMarks >= 150) {
    grade = "C";
  } else {
    grade = "D";
  }
  return (
    <div>
      <h1>Student Details</h1>
      <p>Name:{name} </p>
      <p>English:{english} </p>
      <p>Maths:{maths} </p>
      <p>Computers: {computers} </p>
      <p>Total Grades:{totalMarks}</p>
      <p>Grades:{grade}</p>
    </div>
  );
}
