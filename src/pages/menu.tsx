import {
  IonPage,
  IonRouterOutlet,
  IonHeader,
  IonMenu,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonContent
} from "@ionic/react";

import { Redirect, Route } from "react-router-dom";
import Home from "./Home";

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="main">

        {/* Side Menu */}
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {/* Menu content goes here */}
          </IonContent>
        </IonMenu>

        {/* Main Content */}
        <IonRouterOutlet id="main">
          <Route exact path="/home" component={Home} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;