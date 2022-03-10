import App from '../../../App';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {getSessionStorage, removeUser, setSessionStorage} from '../../../utils/sessionStorage';
import {useDispatch} from 'react-redux';
import {editUser, getUserByGmail} from '../../../redux/reducers/user';
import {unwrapResult} from '@reduxjs/toolkit';
import Loading from '../../utils/Loading/Loading';
import {toast, ToastContainer} from 'react-toastify';
import {getCartItems} from '../../../utils/storeSession';
import {fCurrency} from '../../utils/FormatCost';

const MyAccount = () => {
    const [showOrder, setShowOrder] = useState(true);
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subTotal, setSubTotal] = useState(0);
    const [ship] = useState(30);
    const [cart,setCart]=useState([]);
    useEffect(() => {
        const user = getSessionStorage();
        setName(user.name);
        setAddress(user.address);
        setPhoneNumber(user.phoneNumber);
        setName(user.name);
        setGmail(user.gmail);
        const data = getCartItems();
        setCart(data);
        let total=0;
        data.forEach(item=>total+=item.amount*item.price)
        setSubTotal(total);
        fetchData();
    }, []);

    const dispatch = useDispatch();


    const handleLogout = async () => {
            localStorage.clear();
            removeUser();
            window.location.href = "/login";

    };

    const fetchData = async () => {
        try {
            const resUser = await dispatch(getUserByGmail(getSessionStorage().gmail));
            setId(resUser.payload.id);
            setPassword(resUser.payload.accountPassword);
            toast.success('Cập nhật thông tin thành công!');
            setShowOrder(true);
        } catch (e) {
            toast.error('Cập nhật thông tin thất bại!');
        }
    };

    const handleSubmit = async () => {
        const userEdit = {
            id, name, accountPassword:password, phoneNumber, gmail, userAddress:address,
        };
        console.log(password);
        try {
            const putUser = await dispatch(editUser(userEdit));
            console.log(putUser);
            localStorage.removeItem('name');
            localStorage.removeItem('gmail');
            localStorage.removeItem('phoneNumber');
            localStorage.setItem('name', putUser.payload.name)
            localStorage.setItem('gmail', putUser.payload.gmail)
            localStorage.setItem('phoneNumber', putUser.payload.phoneNumber)
            setSessionStorage(putUser.payload);
            window.location.href='/my_account';
            unwrapResult(putUser);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>

            <Loading/>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="my-account-area ptb-100">
                <div className="container">
                    <div className="tab account-tab">
                        <div className="row">
                            <div className="col-lg-4">
                                <ul className="tabs">
                                    <li>
                                        <a href={'#'} onClick={() => setShowOrder(true)}>
                                            Giỏ Hàng của tôi
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'#'} onClick={() => setShowOrder(false)}>
                                            Tài Khoản Của Tôi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={handleLogout}
                                            href="#"
                                            className="nav-link"
                                        >
                                            Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab_content current active">
                                    {showOrder ? <div className="tabs_item">
                                        <div className="account-tab-item">
                                            <div className="checkout-order">
                                                <h2>My Orders</h2>
                                                <h3 className="title-item">Item Description & Amount <span>Cash</span>
                                                </h3>
                                                <ul className="checkout-product">
                                                    {cart.map((item,index)=>{
                                                        return(
                                                            <li key={index}>
                                                                <img src={`https://localhost:44349/uploads/${item.image}`}
                                                                     alt="Images"/>
                                                                <h3>{item.name} x {item.amount}</h3>
                                                                <span>{fCurrency(item.price*1000)}</span>
                                                                <div className="price-tag">{fCurrency(item.price*item.amount*1000)}</div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                <div className="total-amount">

                                                    <h3 className="vat-title">Ship <span>{ship}</span></h3>
                                                    <h3 className="total-title">Total Amount<span>{fCurrency((subTotal + ship)*1000)}</span></h3>
                                                </div>
                                                <div className="amount-btn">
                                                    <a href="#" onClick={()=>window.location.href='/cart'} className="default-btn btn-bg-three">Next</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        : <div className="tabs_item current">
                                        <div className="account-tab-item">
                                            <div className="account-details">
                                                <h2>Profile Details</h2>
                                                <div className="account-form">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <input type="text" value={name}
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               setName(e.target.value);
                                                                           }}
                                                                           placeholder="Megan"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <input type="text" value={phoneNumber}
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               setPhoneNumber(e.target.value);
                                                                           }}
                                                                           placeholder="+501-529-1747"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <input type="email" value={gmail}
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               setGmail(e.target.value);
                                                                           }}
                                                                           placeholder="megan@hello.com"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <input type="text" value={address}
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               setAddress(e.target.value);
                                                                           }}
                                                                           placeholder="Address"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <button type={'button'} onClick={handleSubmit}
                                                                            style={{
                                                                                width: '100%',
                                                                                border: 'none',
                                                                                borderRadius: '8px',
                                                                                backgroundColor: '#00ab55',
                                                                                color: 'white',
                                                                                height: 30
                                                                            }}
                                                                    >Submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MyAccount;
