import React from 'react'
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, PieChart, Pie, Legend, RadarChart,PolarGrid,PolarAngleAxis,Radar,PolarRadiusAxis} from 'recharts'
import {RadialChart} from 'react-vis'


const countryDibData = [{name: 'Sweden', value: 7133}, {name: 'Norway', value: 1300},
                  {name: 'Denmark', value: 853}, {name: 'Great Britain', value: 473},
                  {name: 'Other', value: 318}]
const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const dataAreaChart = [
      {name: 'Aug', uv: 3500, pv: 2400, amt: 2400},
      {name: 'Sep', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Oct', uv: 7800, pv: 1398, amt: 2210},
      {name: 'Nov', uv: 11235, pv: 9800, amt: 2290},
];
const dataAreaChartInfluencers = [

      {name: 'Aug', uv: 0, pv: 2400, amt: 2400},
      {name: 'Sep', uv: 3, pv: 1398, amt: 2210},
      {name: 'Oct', uv: 50, pv: 9800, amt: 2290},
      {name: 'Nov', uv: 140, pv: 2400, amt: 2400},
];

const dataAreaChartRevenue = [
      {name: 'Jun', uv: 3000, pv: 2400, amt: 2400},
      {name: 'Jul', uv: 2500, pv: 1398, amt: 2210},
      {name: 'Aug', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Sep', uv: 4520, pv: 1398, amt: 2210},
      {name: 'Oct', uv: 10000, pv: 9800, amt: 2290},
      {name: 'Nov', uv: 11111, pv: 2400, amt: 2400},
];
const dataAreaChartAdEngagement = [
      {name: 'Jun', uv: 10, pv: 2400, amt: 2400},
      {name: 'Jul', uv: 11, pv: 1398, amt: 2210},
      {name: 'Aug', uv: 9, pv: 2400, amt: 2400},
      {name: 'Sep', uv: 14, pv: 1398, amt: 2210},
      {name: 'Oct', uv: 16, pv: 9800, amt: 2290},
      {name: 'Nov', uv: 10, pv: 2400, amt: 2400},
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
  constructor(props){
  super(props)
}
	render () {
  	return (
    	<PieChart width={200} height={200}>
        <Pie dataKey="value" data={this.props.data} cx={100} cy={100} innerRadius={10} outerRadius={40} fill="#82ca9d" label />
        <Tooltip/>
       </PieChart>
    );
  }
}


class SimpleAreaChart extends React.Component {
  constructor(props){
  super(props)
}
	render () {
  	return (
    	<AreaChart width={180} height={180} data={this.props.data}
            margin={{top: 0, right: 20, left: 0, bottom: 0}}>

        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    );
  }
}

const dataTwoLevelPieChart = [
    { subject: 'Instagram', A: 120, B: 110, fullMark: 150 },
    { subject: 'Twitter', A: 60, B: 130, fullMark: 150 },
    { subject: 'Y-Tube', A: 98, B: 130, fullMark: 150 },

];

class TwoLevelPieChart extends React.Component{
	render () {
  	return (
    	<RadarChart cx={100} cy={100} outerRadius={40} width={200} height={200} data={dataTwoLevelPieChart} start>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />

          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    );
  }
}


class StatisticsPlatform extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className='admin-box'>
        <h1 className="section-title">{this.props.title}</h1>
        <div className="all-stat-charts">
          <div className="first-chart">
            <p className="statistics-title"> Amount of Users </p>
            <h1>11235</h1>
            <SimpleAreaChart data={dataAreaChart}/>
          </div>
          <div className="second-chart">
          <p className="statistics-title"> Country distribution </p>
            <OneSimplePieChart data={countryDibData} />

          </div>
          <div className="third-chart">
            <p className="statistics-title">Influencers connected </p>
            <h1>126</h1>
            <SimpleAreaChart data={dataAreaChartInfluencers}/>
          </div>
          <div className="fourth-chart">
          <p className="statistics-title">Engagement Distribution</p>
            <TwoLevelPieChart/>
          </div>
          <div className="fifth-chart">
          <p className="statistics-title"> Revenue </p>
            <SimpleAreaChart data={dataAreaChartRevenue}/>
          </div>
          <div className="sixth-chart">
          <p className="statistics-title"> Engagement on ads in %</p>
            <SimpleAreaChart data={dataAreaChartAdEngagement}/>
          </div>
        </div>
      </div>
    )
  }
}

export default StatisticsPlatform
