import ReactToPdf from "react-to-pdf";
import { createContext, createRef, useContext, useRef, useEffect } from "react";
import { InvoiceData } from "./jsonData/data";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Button } from "@material-ui/core";
import ReactDOM from "react-dom";


//in this function Invoice Template is display on screen.
export const InvoiceTemplate = () => {
  const contentArea = useRef(null);
  debugger;
  const ToPDF = (event) => {
    debugger;
    savePDF(contentArea.current, {
      paperSize: "A1",
      repeatHeaders: true,
      margin: "2cm",
    });
  };
  return (
    <>
      <body>
        <Button onClick={ToPDF} variant="contained" color="secondary">
          PRINT
        </Button>
        {/* <PDFExport paperSize="A1"> */}
        <div ref={contentArea}  >
          <div className="container mb-5">
            <div className="row justify-content-between mt-5">
              <div className="col-auto me-auto text-start">
                <h3>Synergic Professionals</h3>
                <p>
                  Haseeb Ahmed <br />
                  Kohinoor one, Jaranwala road, Faisalabad
                  <br />
                  Faisalabad
                  <br />
                  Pakistan
                </p>
              </div>
              <div className="col-auto">
                <h1>INVOICE</h1>
              </div>
            </div>
            <div className="row justify-content-between mt-4 ">
              <div className="col-auto me-auto text-start">
                <h5>Bill To:</h5>
                <p>
                  Grand Dealer Portal
                  <br />
                  Gulberg Islamabad
                  <br />
                  Islamabad
                  <br />
                  Pakistan
                </p>
              </div>
              <div className="col-auto col-sm-3">
                <table className="table table-borderless text-start">
                  <tr>
                    <th>Invoice ID:</th>
                    <td>INV0003</td>
                  </tr>
                  <tr>
                    <th>Invoice Date:</th>
                    <td>Jan 28, 2021</td>
                  </tr>
                  <tr>
                    <th>Due Date:</th>
                    <td>Feb 06, 2021</td>
                  </tr>
                </table>
              </div>
            </div>

            <table className="table ">
              <thead className="table-dark">
                <tr className=" text-white row row-cols-4">
                  <td className="col-sm-7 text-start">Item Description </td>
                  <td className="col-sm-1 text-end">Qty </td>
                  <td className="col-sm-2 text-end">Rate</td>
                  <td className="col-sm-2 text-end">Amount</td>
                </tr>
              </thead>
              <tbody>
                {InvoiceData.product.map((item) => (
                  <tr key={item.id} className="col-sm-12 row row-cols-4">
                    <td className="col-sm-7 text-start">{item.discription}</td>
                    <td className="col-sm-1 text-end">{item.quantity} </td>
                    <td className="col-sm-2 text-end">{item.rate}</td>
                    <td className="col-sm-2 text-end">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div class="row justify-content-end">
              <table class="col-sm-5 text-end table-borderless">
                <tbody class="">
                  <tr>
                    <td>Sub Total</td>
                    <th>2500.00</th>
                  </tr>
                  <tr>
                    <td>Sales Tax (10%)</td>
                    <th>250.00</th>
                  </tr>
                  <tr>
                    <td>TOTAL</td>
                    <th>$2750.00</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-auto">
                <br />
                <h6 class="text-secondary">Notes</h6>
                <p>It was great doing business with you.</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-auto">
                <h6 class="text-secondary">Terms & Conditions</h6>
                <p>Please make the payment by the due date.</p>
              </div>
            </div>
          </div>
        </div>
        {/* </PDFExport> */}
      </body>
    </>
  );
};


//               OR


// Another Function... for convert into PDF
// In this function only Print Button is visible that print invoice.
export const InvoiceTemp = () => {

  //html
  const InvoiceHtml = () => {
    return (
      <html>
        <body>
          <div >
            <div className="container mb-5">
              <div className="row justify-content-between mt-5">
                <div className="col-auto me-auto text-start">
                  <h3>Synergic Professionals</h3>
                  <p>
                    Haseeb Ahmed <br />
                    Kohinoor one, Jaranwala road, Faisalabad
                  <br />
                    Faisalabad
                  <br />
                    Pakistan
                </p>
                </div>
                <div className="col-auto">
                  <h1>INVOICE</h1>
                </div>
              </div>
              <div className="row justify-content-between mt-4 ">
                <div className="col-auto me-auto text-start">
                  <h5>Bill To:</h5>
                  <p>
                    Grand Dealer Portal
                  <br />
                    Gulberg Islamabad
                  <br />
                    Islamabad
                  <br />
                    Pakistan
                </p>
                </div>
                <div className="col-auto col-sm-3">
                  <table className="table table-borderless text-start">
                    <tr>
                      <th>Invoice ID:</th>
                      <td>INV0003</td>
                    </tr>
                    <tr>
                      <th>Invoice Date:</th>
                      <td>Jan 28, 2021</td>
                    </tr>
                    <tr>
                      <th>Due Date:</th>
                      <td>Feb 06, 2021</td>
                    </tr>
                  </table>
                </div>
              </div>

              <table className="table ">
                <thead className="table-dark">
                  <tr className=" text-white row row-cols-4">
                    <td className="col-sm-7 text-start">Item Description </td>
                    <td className="col-sm-1 text-end">Qty </td>
                    <td className="col-sm-2 text-end">Rate</td>
                    <td className="col-sm-2 text-end">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  {InvoiceData.product.map((item) => (
                    <tr key={item.id} className="col-sm-12 row row-cols-4">
                      <td className="col-sm-7 text-start">{item.discription}</td>
                      <td className="col-sm-1 text-end">{item.quantity} </td>
                      <td className="col-sm-2 text-end">{item.rate}</td>
                      <td className="col-sm-2 text-end">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div class="row justify-content-end">
                <table class="col-sm-5 text-end table-borderless">
                  <tbody class="">
                    <tr>
                      <td>Sub Total</td>
                      <th>2500.00</th>
                    </tr>
                    <tr>
                      <td>Sales Tax (10%)</td>
                      <th>250.00</th>
                    </tr>
                    <tr>
                      <td>TOTAL</td>
                      <th>$2750.00</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-auto">
                  <br />
                  <h6 class="text-secondary">Notes</h6>
                  <p>It was great doing business with you.</p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-auto">
                  <h6 class="text-secondary">Terms & Conditions</h6>
                  <p>Please make the payment by the due date.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  };

  var htmlElement = InvoiceHtml();

  // function to convert html to PDF
  const SaveToPDF = () => {
    debugger;
    savePDF(ReactDOM.render(<InvoiceHtml />), {
      paperSize: "A1",
      repeatHeaders: true,
      margin: "2cm",
    });
  };
  //call function for Conversion
  return <Button onClick={() => SaveToPDF()}>Print</Button>;
};
