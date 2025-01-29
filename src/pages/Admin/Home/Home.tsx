
import Barchart from '../../../component/barChartBox/Barchart';
import BigChartbox from '../../../component/bigChartbox/BigChartbox';
import ChartBox from '../../../component/cartBox/CartBox';
import Piechart from '../../../component/pieChart/Piechart';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../../data';
import Topbox from '../topBox/TopBox';
import './home.scss'
const Home = () => {
    return (
        <>
            <div className="home" >
                <div className="box box1">
                    <Topbox />
                </div>
                <div className="box box2"><ChartBox {...chartBoxUser} /></div>
                <div className="box box3"><ChartBox {...chartBoxRevenue} /></div>
                <div className="box box4"><Piechart/></div>
                <div className="box box5"><ChartBox  {...chartBoxProduct} /></div>
                <div className="box box6"><ChartBox {...chartBoxConversion} /></div>
                <div className="box box7"><BigChartbox/></div>
                <div className="box box8"><Barchart {...barChartBoxRevenue}/></div>
                <div className="box box9"><Barchart {...barChartBoxVisit}/></div>
            </div>
        </>
    )
}

export default Home;