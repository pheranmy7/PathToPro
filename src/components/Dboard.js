import React from 'react'
import {Link} from 'react-router-dom'
function Dboard() {
  return (
    <React.Fragment>
    <body className="bodyD">
      <div className="side-menuD">
            <ul className="dash">
                <li className="dash" style={{ color: 'red'  }}><img className="dash" src="assets/img/7632690_dashboard_graph_analytics_report_icon.png" alt="" />&nbsp;<span> <Link to="/Dashboards">Dashboard</Link></span></li>
                <li className="dash"><img className="dash" src="assets/img/bills_cash.png" alt="" />&nbsp;<span> <Link to="/About">Pay Bills</Link></span></li>
                <li className="dash"><img className="dash" src="assets/img/user_icon.png" alt="" />&nbsp;<span> <Link to="/Profile">Profile Update</Link></span></li>
                <li className="dash"><img className="dash" src="assets/img/3440922_bag_basket_cart_ecommerce_remove_icon.png" alt="" />&nbsp;<span> <Link to="/About">Purchase Book</Link></span></li>
                <li className="dash"><img className="dash" src="assets/img/history_order_icon.png" alt="" />&nbsp;<span> <Link to="/History">Purchase History</Link></span></li>
                <li className="dash"><img className="dash" src="assets/img/374629_card_contact_info_sketch_sketchy_icon.png" alt="" />&nbsp;<span> <Link to="/Info">User info</Link></span> </li>
                <li className="dash"><img className="dash" src="assets/img/28363_door_exit_logout_mail_out_icon.png" alt="" />&nbsp; <span> <Link to="/Home">Log out</Link></span></li>
              </ul>
        </div> 
        <div className="containerD">
            <div className="headerD">
                <div className="navD">
                    <div className="searchD">
                        <input className="dash" type="text" placeholder="search" />
                        <button className="dash" type="submit"><img className="dash" src="assets/img/search_icon.png" alt="" /></button>
                    </div>
                    <div className="userD">
                        <a href="f.com" className="btnD">Add new</a>
                        <img className="dash" src="assets/img/3643784_bell_notification_notify_reminder_ring_icon.png" alt="" />
                        <div className="img-caseD">
                            <img className="dash" src="assets/img/user_icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="contentD">
                <div className="cardsD">
                 <div className="cardD">
                    <div className="boxD">
                        <h1 className="dash" style={{ color: 'red'  }}>4</h1>
                        <h3 className="dash" style={{ color: 'red'  }}>Books Finished</h3>
                    </div>
                    <div className="icon-caseD">
                        <img className="dash" src="assets/img/298731_book_icon (2).png" alt="" />
                    </div>
                    </div>
                    <div className="cardD">
                        <div className="boxD">
                            <h1 className="dash" style={{ color: 'red'  }}>2</h1>
                            <h3 className="dash" style={{ color: 'red'  }}>Books Purchased</h3>
                        </div>
                        <div className="icon-caseD">
                            <img className="dash" src="assets/img/216477_shopping_cart_icon.png" alt="" />
                        </div>
                        </div>
                        <div className="cardD">
                            <div className="boxD">
                                <h1 className="dash" style={{ color: `rgb(${197, 17, 44})` }}>#</h1>
                                <h3 className="dash" style={{ color: 'red'  }}>Total Spent</h3>
                            </div>
                            <div className="icon-caseD">
                                <img className="dash" src="assets/img/4753731_business_cash_coin_dollar_finance_icon.png" alt="" />
                            </div>
                            </div>
                            <div className="cardD">
                                <div className="boxD">
                                    <h1 className="dash" style={{ color: 'red'  }}>70%</h1>
                                    <h3 className="dash" style={{ color: 'red'  }}>Completion Rate</h3>
                                </div>
                                <div className="icon-caseD">
                                    <img className="dash" src="assets/img/3786116_rate_rating_survey_icon (1).png" alt="" />
                                </div>
                                </div>
                            </div>
                                <div className="content-2D">
                                    <div className="recent-paymentsD">
                                        <div className="titleD">
                                            <h2>Recent Payments</h2>
                                            <Link to="/History" className="btnD">View All</Link>
                                        </div>
                                        <table className="dash">
                                            <tr className="dash">
                                                <th className="dash">Title</th>
                                                <th className="dash">Author</th>
                                                <th className="dash">Price</th>
                                                <th className="dash">Receipt</th>
                                            </tr>
                                            <tr className="dash">
                                                <td className="dash">Introduction to frontend</td>
                                                <td className="dash">Bill Gates</td> 
                                                <td className="dash">f.com320</td> 
                                                <td className="dash"><Link to="/History" className="btnD">View All</Link></td>
                                             
                                            </tr>
                                            <tr className="dash">
                                                <td className="dash">Introduction to backend</td>
                                                <td className="dash">Charles Babbage</td> 
                                                <td className="dash">f.com320</td> 
                                                <td className="dash"><Link to="/History" className="btnD">View All</Link></td>
                                             
                                            </tr>
                                            <tr className="dash">
                                                <td className="dash">Introduction to Ui/Ux</td>
                                                <td className="dash">Tc insights</td> 
                                                <td className="dash">f.com320</td> 
                                                <td className="dash"><Link to="/History" className="btnD">View All</Link></td>
                                             
                                            </tr>
                                           
                                        </table>
                                    </div>
                                    <div className="new-studentsD">
                                        <div className="titleD">
                                            <h2 className="dash">New Books</h2>
                                            <Link to="/About" className="btnD">View All</Link>
                                        </div>
                                        <table className="dash">
                                        <tr className="dash">
                                        <th className="dash"></th>
                                        <th className="dash">Title</th>
                                        <th className="dash">Price</th>
                                        <th className="dash">Purchase</th>
                                        </tr>
                                        <tr className="dash"> 
                                            <td className="dash"> <img src="assets/img/book_icon.png" alt="" /></td>
                                            <td className="dash">Python</td>
                                            <td className="dash">f.com200</td>
                                            <td className="dash"><Link to="/About" className="btnD">Cart</Link></td>
                                        </tr>
                                        <tr className="dash"> 
                                            <td className="dash"> <img src="assets/img/book_icon.png" alt="" /></td>
                                            <td className="dash">Python</td>
                                            <td className="dash">f.com200</td>
                                            <td className="dash"><Link to="/About" className="btnD">Cart</Link></td>
                                        </tr>
                                        <tr className="dash"> 
                                            <td className="dash"> <img  src="assets/img/book_icon.png" alt="" /></td>
                                            <td className="dash">Python</td>
                                            <td className="dash">f.com200</td>
                                            <td className="dash"><Link to="/About" className="btnD">Cart</Link></td>
                                        </tr>
                                        
    
    
                                        </table>
                                    </div>
                                </div>
                    </div>
                    </div>
            </body>
   </React.Fragment>
  )
}

export default Dboard