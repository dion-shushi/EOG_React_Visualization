// import React from 'react';
// import './App.css';

// import renderLineChart from './Chart';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
import React from "react";
import { Line, LineChart } from "recharts";


const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const App = ({ data }) => {
  return (
    <LineChart width={600} height={400} data={data}>
      <Line
        dataKey="temperature"
      />
    </LineChart>
  );
};

export default App(data);