import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barchart.scss'
const Barchart = (props: any) => {
    // console.log(props.chartData,"data")
    return (
        <div className='barchart'>
            <h1>{props.title}</h1>
            <ResponsiveContainer width="100%" height={150}>
                <BarChart data={props.chartData}>
                    <Tooltip
                    contentStyle={{background:"#2a3447", borderRadius:"5px"}}
                    labelStyle={{display:"none"}}
                    cursor={{fill:"none"}}
                    />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Barchart