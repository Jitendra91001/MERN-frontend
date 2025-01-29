import { topDealUsers } from '../../../data';
import './topbox.scss'
const Topbox = () => {
    return (
        <>
            <div className="topbox" >
                <h1>Top Deals</h1>
                <div className='list'>
                    {
                        topDealUsers?.map((ele) => (
                            <div className='listItem' key={ele?.id} >
                                <div className="user">
                                    <img src={ele?.img} alt="" />
                                    <div className="userTest">
                                        <span className="username">{ele?.username}</span>
                                        <span className="email">{ele?.email}</span>
                                    </div>
                                </div>
                                <div className="amount">${ele?.amount}</div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Topbox;