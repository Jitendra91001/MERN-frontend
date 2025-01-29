import { Link } from 'react-router-dom';
import './menu.scss'
import { menu } from '../../data';
const Menu = () => {
    return (
        <>
            <div className="menu">
                {
                    menu?.map((ele: any) => (
                        <div className="item" key={ele?.id}>
                            <span className='title'>{ele?.title}</span>
                            {
                                ele?.listItems?.map((subitem: any) => (
                                    <Link to={subitem?.url} className='listItem' key={subitem?.id}>
                                        <img src={subitem?.icon} alt="" />
                                        <span className='listItemTitle'>{subitem?.title}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }


                {/* <div className="item">
                    <span className='title'>MAIN</span>

                    <Link to='/home' className='listItem'>
                        <img src="/home.svg" alt="" />
                        <span className='listItemTitle'>Home</span>
                    </Link>
                    <Link to='/home' className='listItem'>
                        <img src="/profile.svg" alt="" />
                        <span className='listItemTitle'>Profile</span>
                    </Link>
                </div> */}
            </div>
        </>
    )
}

export default Menu;