import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import './piechart.scss'
const Piechart = () => {
    const data = [
        { name: 'Mobile', value: 400, color: "#0088FE" },
        { name: 'Destop', value: 300, color: "#00C49F" },
        { name: 'Laptop', value: 300, color: "#FFBB28" },
        { name: 'Tablet', value: 200, color: "#FF8042" },
    ];
    return (
        <div className='piechart'>
            <h1>Leads for Chart</h1>
            <div className='chart'>
                <ResponsiveContainer width={"99%"} height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={'70%'}
                            outerRadius={'90%'}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell
                                    key={item.name}
                                    fill={item.color}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='options'>
                {
                    data?.map((ele:any)=>(
                        <div className='option'>
                            <div className='title'>
                                <div className='dot' style={{backgroundColor:ele.color}}/>
                                <span>{ele?.name}</span>
                            </div>
                            <span>{ele?.value}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Piechart