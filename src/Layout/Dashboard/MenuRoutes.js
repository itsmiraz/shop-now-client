import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../Hooks/useAdmin/useAdmin';

const MenuRoutes = () => {
    const { user,userDB } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    console.log(userDB?.userImg);
    return (
        <div>

            <ul className="p-4 menu font-semibold w-72 bg-base-100">
                <li>
                    <Link to='/dashboard  '>
                        <div className='h-28 w-28   overflow-hidden rounded-full'>
                        <img className='overflow-hidden rounded-full ' src={userDB?.userImg ? `${userDB?.userImg}`:'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'} alt="" />
                            
</div>
                    </Link>
                        <h1 className='text-center text-xl font-semibold'>{user?.displayName}</h1>
                </li>

                <li><Link to='/dashboard/delivery'>Delivery</Link></li>
                {
                    isAdmin &&
                    <>

                        <li><Link to='/dashboard/adminpanel'>Admin Panel</Link></li>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/productscatagory'>Products</Link></li>
                        <li><Link to='/dashboard/allsales'>Sales</Link></li>
                    </>
                }
            </ul>
        </div>
    );
};

export default MenuRoutes;