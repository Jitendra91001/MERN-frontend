import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import './single.scss'

type props = {
    id: number;
    img?: string;
    title: string;
    info: Object;
    chart?: {
        dataKeys: { name: string, color: string }[],
        data: Object[];
    },
    activities?: {
        time: string,
        text: string
    }[],
}

const Single = (props: props) => {
    return (
        <div className='single'>
            <div className="view">
                <div className="info">
                    <div className="topinfo">
                        {props.img && <img src={props.img} alt="" />}
                        <h2>{props.title}</h2>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {
                            Object.entries(props.info)?.map((item) => (
                                <div className="item">
                                    <span className="itemTitle">{item[0]}</span>
                                    <span className="itemValue">{item[1]}</span>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <hr />
                {props.chart && <div className="charts">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props?.chart?.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            {/* <XAxis dataKey="name" /> */}
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {
                                props.chart.dataKeys?.map((dataKey => (
                                    <Line type="monotone" dataKey={dataKey?.name} stroke={dataKey?.color} />

                                )))
                            }

                        </LineChart>
                    </ResponsiveContainer>
                </div>}
            </div>
            <div className="activities">
                <h2>latest Activities</h2>
                {props.activities && <ul>
                    {props.activities?.map((ele) => (
                        <li key={ele?.text}>
                            <div>
                                <p>{ele.text}</p>
                                <time>{ele?.time}</time>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}
export default Single;