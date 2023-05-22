import Button from "./Components/Button";
import EmployeeCard from "./Components/EmployeeCard";
import EmployeeDetails from "./Components/EmployeeDetails";
import ImageComponent from "./Components/ImageComponent";
import NewProductsName from "./Components/NewProductsName";
import ProductsName from "./Components/ProductsName";
import Stationary from "./Components/Stationary";
import StudentDetails from "./Components/StudentDetails";
import "./styles.css";

export default function App() {
  const backgroundColor = "lightgreen";
  const color = "darkgreen";
  const borderRadius = "5px";
  const padding = "10px";

  const items = ["pen", "pencil", "ruler", "eraser"];

  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";

  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 }
  ];

  const student = {
    name: "John Doe",
    english: 90,
    maths: 80,
    computers: 70
  };

  const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200
    }
  ];
  return (
    <div className="App">
      {/* <EmployeeCard
        name={"Vatsal Singh"}
        designation={"Software Developer"}
        workExperience={"Fresher"}
      /> */}
      {/* <Button
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      /> */}

      {/* <Stationary header={"Stationary Items"} items={items} /> */}
      {/* <ImageComponent imageLink={imageLink} caption={caption} /> */}
      {/* <ProductsName products={products} /> */}
      {/* <NewProductsName products={products} /> */}
      {/* <StudentDetails student={student} /> */}
      <EmployeeDetails employees={employees} />
    </div>
  );
}
