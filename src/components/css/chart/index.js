import s from './style.less';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Chart() {

  const data = [
    {
      name: 'Jan',
      "Active User": 4000
    },
    {
      name: 'Feb',
      "Active User": 2000
    },
    {
      name: 'Mar',
      "Active User": 5000
    },
    {
      name: 'Apr',
      "Active User": 1000
    },
    {
      name: 'May',
      "Active User": 7000
    },
    {
      name: 'Jun',
      "Active User": 10000
    },
    {
      name: 'Jul',
      "Active User": 3000
    },
    {
      name: 'Aug',
      "Active User": 4300
    },
    {
      name: 'Sep',
      "Active User": 600
    },
    {
      name: 'Oct',
      "Active User": 13000
    },
    {
      name: 'Nov',
      "Active User": 3000
    },
    {
      name: 'Dec',
      "Active User": 10000
    },
  ];

  return (
    <div className={s.chart}>
      <h3 className={s.chartTitle}>Users Analytics</h3>

      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          data={data}
        >
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey="Active User" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}