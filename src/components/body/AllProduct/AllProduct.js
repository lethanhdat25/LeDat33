import React,{useEffect,useState} from 'react'
import { connect } from "react-redux";
import { getAllProduct } from "../../../redux/actions/productAction";
import { Link } from 'react-router-dom';
import { getCartItems, removeCartItems, setCartItems } from '../../../utils/storeSession';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../utils/Loading/Loading'
import { fCurrency } from '../../utils/FormatCost';
import { getToTalCart } from '../../../redux/actions/productAction';


const AllProduct = ({listProducts,getAllProduct,getToTalCart}) => {
  const [paCur,setPaCur] = useState(1)
  const [total,setTotal] = useState(0)
  const [products,setProducts] = useState([])

    useEffect(() => {
        getAllProduct();
      }, []);
      useEffect(() => {
        getData();
      }, [paCur,listProducts]);
      const getData = ()=>{
        let data = []
        if(paCur === 1){
          for (let index = 0; index < 8; index++) {
            if(listProducts[index]){
              data.push(listProducts[index])
            }
          }
        }else if(paCur > 1){
          for (let index = paCur * 8 - 8; index < paCur * 8; index++) {
            if(listProducts[index]){
            data.push(listProducts[index])
            }
          }
        }
        if(data){
          setProducts(data)
        }
        if(listProducts && listProducts.length % 8 === 0){
          setTotal(Math.floor(listProducts.length / 8))
        }else{
          setTotal(Math.floor((listProducts.length / 8) + 1))
        }
      }

      const handleNextPage = ()=>{
        if(paCur < total){
          let data = paCur + 1;
          setPaCur(data)
        }
      }
      const handlePrevPage = ()=>{
        if(paCur > 1){
          let data = paCur - 1;
          setPaCur(data)
        }
      }
      const handleSetPageCu =(data)=>{
        setPaCur(data)
    }
      const handleAddToCart = (item) => {
        let id = item.product.id;
        let price = 0;
        if (item.product.priceSale > 0) {
          price = item.product.priceSale;
        } else {
          price = item.product.price;
        }
        const cartItems = getCartItems();
        let indexItemInCart = cartItems.findIndex((item) => item.id === id);
    
        if (indexItemInCart > -1) {
          cartItems.splice(indexItemInCart, 1, {
            id: item.product.id,
            amount: cartItems[indexItemInCart].amount + 1,
            name: item.product.name,
            image: item.image,
            price: price,
          });
          toast.success("Cập nhật giỏ hàng");
         
          getToTalCart(getCartItems())
        } else {
          cartItems.push({
            id: item.product.id,
            amount: 1,
            name: item.product.name,
            image: item.image,
            price: price,
          });
          toast.success("Thêm giỏ hàng thành công");
          getToTalCart(cartItems.length)
        }
    
        removeCartItems();
        setCartItems(cartItems);
      };
      const pagination = ()=>{
        for (let index = 1; index >= total; index++) {
          if(index === paCur){
            return <span className="page-numbers current" aria-current="page">{index}</span>
          }else{
            return <a onClick={()=>handleSetPageCu(index)} href="#" className="page-numbers">{index}</a>
          }
          
        }
      }
  return (
    <><Loading/>
           <ToastContainer
        position="bottom-left"
        autoClose={1000}
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
        <div className="col-lg-5 col-md-5">
          <div className="inner-content">
            <h2>Sản phẩm</h2>
            <ul>
              <li><a href="index.html">Trang chủ</a></li>
              <li>Sản phẩm</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 col-md-7">
          <div className="inner-img">
            <img src="assets/images/inner-banner/inner-banner2.png" alt="Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="product-area pt-100 pb-70">
    <div className="container">
      <div className="product-topper">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="product-category">
              <div className="form-group">
                <select className="form-control">
                  <option>Categories</option>
                  <option>Beef Meat</option>
                  <option>Vegetable</option>
                  <option>Natural Fruits</option>
                  <option>Health &amp; Beauty</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      {products &&
            products.length > 0 &&
            products.map((item, index) => {
              if(item.product.name){
                return(
                    <>
                            <div className="col-lg-3 col-sm-6">
          <div className="product-item">
            <div className="product-img">
              <Link to={`/detail-products/${item.product.id}`}>
                <img src={`https://localhost:44349/uploads/${item.image}`} alt="Product Images" />
              </Link>
              {index < 5 && <div className="product-item-tag">
                <h3>Mới</h3>
              </div>}
              <ul className="product-item-action">
                <li><Link to={`/detail-products/${item.product.id}`}><i className="bx bx-zoom-in" /></Link></li>
                <li><a href="#" onClick={()=>handleAddToCart(item)}><i className="bx bx-cart" /></a></li>
              </ul>
            </div>
            <div className="content">
              <h3><a href="shop-details.html">{item.product.name}</a></h3>
              <span>{item.product.priceSale > 0 ? <>{fCurrency(item.product.priceSale * 1000)}  <del>{fCurrency(item.product.price * 1000)}</del></> : <>{fCurrency(item.product.price * 1000)}</>}</span>
            </div>
          </div>
        </div>
                    </>
                )
              }

            }
            
            )}

        <div className="col-lg-12 col-md-12 text-center">
          <div className="pagination-area">
            <a onClick={handlePrevPage} href="#" className="prev page-numbers">
              <i className="bx bx-chevron-left" />
            </a>
            {pagination()}
            
            <a onClick={handleNextPage} href="#" className="next page-numbers">
              <i className="bx bx-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

const mapStateToProps = (state) => ({
    listProducts: state.product,
  });
  
  const mapDispatchToProps = {
    getAllProduct,
    getToTalCart
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);