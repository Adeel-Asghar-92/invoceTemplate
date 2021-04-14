import "./App.css";
import { Tabs } from "./components/tabs";
import { Route, Switch } from "react-router-dom";
import { Users } from "./components/users";
import { Comments } from "./components/comments";
import { Posts } from "./components/posts";
import { Albums } from "./components/albums";
import { Photos } from "./components/photos";
import { EditOrAddUser } from "./components/User/addOrEditUser";
import { Counter } from "./prcComponents/counter";
import { MyStyles } from "./prcComponents/makeStyle";
import MyCard from "./prcComponents/cards";
import { Collapes } from "./prcComponents/transition";
import { Lists } from "./prcComponents/lists";
import { Buttons } from "./prcComponents/inputs";
import { FABAnimation } from "./prcComponents/FABAnimation";
import { RadioButton } from "./prcComponents/radiobutton";
import HorizontalLinearStepper from "./prcComponents/Navigation";
import BasicTabs from "./prcComponents/tabs";
import {
  ConvertedToPDF,
  InvoiceTemp,
  InvoiceTemplate,
} from "./ConvertInvoiceToPdf/invoiceTemplate";
import { ConvertInvoiceToPdf } from "./ConvertInvoiceToPdf/ReactInvoiceToPdf";

function App() {
  return (
    <div className="App">
      <InvoiceTemp />
      {/* <InvoiceTemplate /> */}
      {/* <ConvertInvoiceToPdf /> */}
      {/* <Tabs /> */}
      {/* <Route>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/newUser" exact component={EditOrAddUser} />
          <Route path="/comments" component={Comments} />
          <Route path="/posts" component={Posts} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/photos" exact component={Photos} />
          <Route path="/counter" exact component={Counter} />
          <Route path="/makeStyles" exact component={MyStyles} />
          <Route path="/cards" exact component={MyCard} />
          <Route path="/transition" exact component={Collapes} />
          <Route path="/lists" exact component={Lists} />
          <Route path="/button" exact component={Buttons} />
          <Route path="/fab" exact component={FABAnimation} />
          <Route path="/radio" exact component={RadioButton} />
          <Route path="/speed-dial" exact component={HorizontalLinearStepper} />
          <Route path="/tabs" exact component={BasicTabs} />
          <Route>Page not Found</Route>
        </Switch>
      </Route> */}
    </div>
  );
}

export default App;
