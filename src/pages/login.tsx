import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";

const login : React.FC = () => {
    const navigation = useIonRouter();

    const dologin = () => {
        navigation.push("/app" , "forward" , "replace");
    }

    return (
         <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
                <IonTitle>Template</IonTitle>
              </IonToolbar>
            </IonHeader>
      
            <IonContent fullscreen>
                <IonButton expand ="full" onClick={() => dologin()} slot="start">
                    Login
                </IonButton>
            </IonContent>
          </IonPage>
    );
}
export default login