import React from 'react'
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import '../Footer/Footer.css'
const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      return (
       <div className="footer">
           <div className="footer_backtotop" onClick={topFunction}>
           {/* <p><ArrowDropUpIcon /></p> */}
           <p>Back to top</p>
           </div>
           <div className="footer_mid">
               <div>
               <p>Get to Know Us</p>
                   <span>Careers</span>
                   <span>Blog</span>
                   <span>About Amazon</span>
                   <span>Amazon Devices</span>
               </div>
               <div>
                   <p>Connect Us</p>
                   <span>Facebook</span>
                   <span>Instagram</span>
                   <span>Snapchat</span>
                   <span>Twitter</span>
                </div>
               <div>
                   <p>Make Money with Us</p>
                   <span>Sell products on Amazon</span>
                   <span>Sell on Amazon Business</span>
                   <span>Sell apps on Amazon</span>
                   <span>Become an Affiliate</span>
                   <span>Fulfilment by amazon</span>
                   <span>Advertise by product</span>   
                   <span>Advertise pay on merchants</span>   
               </div>
               <div>
                   <p>Let Us Help You</p>
                   <span>Your Account</span>
                   <span>Shipping Rates & Policies</span>
                   <span>Returns & Replacements</span>
                   <span>Amazon Assistant</span>
                   <span>100% purchase protection</span>
                   <span>Returns Centre</span>
               </div>
            
              
           </div>
          
           <div className="footer_end">
           <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
           <div>
           <span>Conditions of Use</span>
           <span>Privacy Notice</span>
           <span>Interest-Based Ads</span>
           <span>© 1996-2022, Amazon.com</span>
           </div>
 
           </div>

       </div>
    )
}
export default Footer;