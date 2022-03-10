import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import Loading from '../../utils/Loading/Loading'
import { setSessionStorage } from '../../../utils/sessionStorage';


const initialState = {
    email: '',
    password: '',
}

function Login() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history=useHistory();
    const {email, password} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
          const res = await axios.post('https://localhost:44349/api/Accounts/login', {email, password})
            setSessionStorage(res.data);

            localStorage.setItem('firstLogin', true)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('name', res.data.name)
            localStorage.setItem('gmail', res.data.gmail)
            localStorage.setItem('phoneNumber', res.data.phoneNumber)
            dispatch(dispatchLogin())
            history.push("/");
        } catch (err) {
           toast.error('Đăng nhập thất bại!')
        }
    }


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
        {/* Same as */}
        
              <div>
  <div className="inner-banner-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-4">
          <div className="inner-content">
            <h2> Đăng nhập</h2>
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li> Đăng nhập</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 col-md-8">
          <div className="inner-img">
            <img src="assets/images/inner-banner/inner-banner4.png" alt="Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="user-area pt-100 pb-70">
    <div className="container">
      <div className="user-width">
        <div className="user-form">
          <div className="contact-form">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="form-group">
                    <input onChange={handleChangeInput} name='email' type="text" className="form-control" placeholder="Nhập email..." />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input onChange={handleChangeInput} className="form-control" type="password" name="password" placeholder="Nhập mật khẩu..." />
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <Link to='/register' className="default-btn btn-bg-three">
                    Đăng ký
                  </Link>
                </div>
                <div className="col-lg-6 ">
                  <button type="submit" className="default-btn btn-bg-three">
                    Đăng nhập ngay
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
        // <div className="login_page">
        //     <h2>Login</h2>
        //     {err && showErrMsg(err)}
        //     {success && showSuccessMsg(success)}

        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="email">Email Address</label>
        //             <input type="text" placeholder="Enter email address" id="email"
        //             value={email} name="email" onChange={handleChangeInput} />
        //         </div>

        //         <div>
        //             <label htmlFor="password">Password</label>
        //             <input type="password" placeholder="Enter password" id="password"
        //             value={password} name="password" onChange={handleChangeInput} />
        //         </div>

        //         <div className="row">
        //             <button type="submit">Login</button>
        //             <Link to="/forgot_password">Forgot your password?</Link>
        //         </div>
        //     </form>

        //     <div className="hr">Or Login With</div>

        //     <div className="social">
        //         <GoogleLogin
        //             clientId="Your google client id"
        //             buttonText="Login with google"
        //             onSuccess={responseGoogle}
        //             cookiePolicy={'single_host_origin'}
        //         />
                
        //         <FacebookLogin
        //         appId="Your facebook app id"
        //         autoLoad={false}
        //         fields="name,email,picture"
        //         callback={responseFacebook} 
        //         />

        //     </div>

        //     <p>New Customer? <Link to="/register">Register</Link></p>
        // </div>
    )
}

export default Login
