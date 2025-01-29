import { Link } from 'react-router-dom'
import './cartbox.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
const ChartBox = (props: any) => {
    // console.log(props.chartData,"data")
    return (
        <div className='cartbox'>
            <div className="boxinfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to='/' style={{color:props.color}}>View all</Link>
            </div>
            <div className="chartinfo">
                <div className="charts">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 60 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <div className="percentage" style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}>{props.percentage}%</div>
                    <div className="duration">this month</div>
                </div>
            </div>
        </div>
    )
}

export default ChartBox