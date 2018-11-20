import React from 'react'
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, PieChart, Pie, Legend} from 'recharts'



const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data2 = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

class TwoSimplePieChart extends React.Component{
	render () {
  	return (
    	<PieChart width={200} height={200}>
        <Pie isAnimationActive={false} data={data01} cx={100} cy={100} outerRadius={40} fill="#8884d8" label/>
        <Tooltip/>
       </PieChart>
    );
  }
}

class OneSimplePieChart extends React.Component{
	render () {
  	return (
    	<PieChart width={200} height={200}>
        <Pie data={data02} cx={100} cy={100} innerRadius={10} outerRadius={40} fill="#82ca9d"/>
        <Tooltip/>
       </PieChart>
    );
  }
}


class SimpleAreaChart extends React.Component {
	render () {
  	return (
    	<AreaChart width={300} height={200} data={data2}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    );
  }
}


class StatisticsPlatform extends React.Component {
  render() {
    return(
      <div>
        <h1 className="statistics-header"> Site statistics!</h1>
        <div className="all-stat-charts">
          <div className="first-chart">
            <p className="statistics-title"> Amount of Users </p>
            <h1>11235</h1>
          </div>
          <div className="second-chart">
          <p className="statistics-title"> Followers on instagram </p>
            <OneSimplePieChart />
          </div>
          <div className="third-chart">
          <p className="statistics-title"> Followers on instagram </p>
            <TwoSimplePieChart/>
          </div>
          <div className="fourth-chart">
          <p className="statistics-title"> Followers on instagram </p>
            <OneSimplePieChart/>
          </div>
          <div className="fifth-chart">
          <p className="statistics-title"> Followers on instagram </p>
            <TwoSimplePieChart/>
          </div>
          <div className="sixth-chart">
          <p className="statistics-title"> Followers on instagram </p>
            <OneSimplePieChart/>
          </div>
        </div>
      </div>
    )
  }
}

export default StatisticsPlatform
