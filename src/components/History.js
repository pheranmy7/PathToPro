import React from 'react'
import {Link} from 'react-router-dom'
function History() {
  return (
   <React.Fragment>
    <body className="bodyH">
      <div className="side-menuH">
        <ul className="pur">
            <li className="pur"><img className="pur" src="assets/img/7632690_dashboard_graph_analytics_report_icon.png" alt="" />&nbsp;<span><Link to="/Dashboard">Dashboard</Link></span></li>
            <li className="pur"><img className="pur" src="assets/img/bills_cash.png" alt="" />&nbsp;<span><Link to="/About">Pay Bills</Link></span></li>
            <li className="pur"><img className="pur" src="assets/img/user_icon.png" alt="" />&nbsp;<span><Link to="/Profile">Profile Update</Link></span></li>
            <li className="pur"><img className="pur" src="assets/img/3440922_bag_basket_cart_ecommerce_remove_icon.png" alt="" />&nbsp;<span><Link to="/About">Purchase Book</Link></span></li>
            <li className="pur" style={{ color: 'red'  }}><img className="pur" src="assets/img/history_order_icon.png" alt="" />&nbsp;<span><Link to="/History">Purchase History</Link></span></li>
            <li className="pur"><img className="pur" src="assets/img/374629_card_contact_info_sketch_sketchy_icon.png" alt="" />&nbsp;<span><Link to="/Info">User info</Link></span> </li>
            <li className="pur"><img className="pur" src="assets/img/28363_door_exit_logout_mail_out_icon.png" alt="" />&nbsp; <span><Link to="/Home">Log out</Link></span></li>
          

                  
        </ul>
    </div> 

    <div className="containerH">
        <div className="headerH">
            <div className="navH">
             
                <div className="userH">
                    <a href="f.com" className="btn">Add new</a>
                    <img src="assets/img/3643784_bell_notification_notify_reminder_ring_icon.png" alt="" />
                    <div className="img-caseH">
                        <img src="assets/img/user_icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    <h1 className="pur">PURCHASE HISTORY</h1>
    <div className="containH">
        Payment History
    </div>
    <table className="pur">
        <tr className="pur">
            <td className="pur">Amount</td>
            <td className="pur">Type</td>
            <td className="pur">Date Requested</td>
            <td className="pur">Date Paid</td>
            <td className="pur">Book id</td>
            <td className="pur">Trans Id</td>
            <td className="pur">
                Receipt </td>
                <td className="pur"><button className="pur">Print</button>
            </td>
            
        </tr>
        <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr>

         <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr>   
        
        <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr>  
        
         <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr> 
        
          <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr> 
        
          <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr>

        <tr>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr>

        <tr className="pur">
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
            <td className="pur"></td>
        </tr>
        
    </table>
    </div>
</body>
   </React.Fragment>
  )
}

export default History