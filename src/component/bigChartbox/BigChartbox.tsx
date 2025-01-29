import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts'
import './bigchart.scss'

const data = [
    {
        name: 'Sunday',
        cloths: 4000,
        books: 2400,
        eletronic: 2400,
    },
    {
        name: 'Monday',
        cloths: 3000,
        books: 1398,
        eletronic: 2210,
    },
    {
        name: 'Thuesday',
        cloths: 2000,
        books: 9800,
        eletronic: 2290,
    },
    {
        name: 'Wednesday',
        cloths: 2780,
        books: 3908,
        eletronic: 2000,
    },
    {
        name: 'Thuesday',
        cloths: 1890,
        books: 4800,
        eletronic: 2181,
    },
    {
        name: 'Friday',
        cloths: 2390,
        books: 3800,
        eletronic: 2500,
    },
    {
        name: 'Sutraday',
        cloths: 3490,
        books: 4300,
        eletronic: 2100,
    },
];
const BigChartbox = () => {
    return (
        <div className='bigchart'>
            <h1>Revainew Analytics</h1>
            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        {/* <XAxis dataKey="name" /> */}
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="cloths"dot={false} stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="eletronic" dot={false} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="books" dot={false} stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartbox