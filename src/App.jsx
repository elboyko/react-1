
import './App.css'
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 5],
  ["Eat", 2],
  ["Learn JS", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
const options = {
  title: "My Daily Activities",
}

function App() {


  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  )
}

export default App
