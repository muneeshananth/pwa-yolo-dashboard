import React from 'react'
import { Button } from 'react-bootstrap';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';

export const Invoices = ({invoices}) => {

    console.log('invoice length:::', invoices.length)
    if (invoices.length === 0) return null

    function payment()
    {
      alert("Payment");
    }  

    return invoices.map( invoice => (
            <>    
              <tr key = {invoice.guest_invoice_id}>
                  <td><b>{invoice.details}</b></td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td color='red' style={{color: "red"}}><b>INR {invoice.amount}</b></td>
              </tr>
              <tr>    
                  <td><b>{invoice.payment_status}</b></td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
               
                  <td>
                    <Button onClick={ (e) => { this.payment(invoice.guest_invoice_id) } }>Pay</Button>
                  
                  </td>
              </tr>
              <hr/>
            </>
          )
    )
}

    