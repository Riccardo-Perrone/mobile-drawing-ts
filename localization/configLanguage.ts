import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const i18n = new I18n({
  en: {
    gallery: {
      title: "Gallery",
    },
    tutorial: {
      redoundo:
        "Click these buttons to go BACK and FORWARD between your actions. Be careful if you go back and modify the design you will lose all subsequent modifications",
      draw: "Click this button to activate the BRUSH. By holding it down you can change the size and color",
      erase:
        "Click this button to activate the RUBBER. By holding it down you can change the size",
      background:
        "Click this button if you want to put a photo as a background. You can choose whether to take a photo or take it from your library",
      save: "When you have finished the drawing you can save it to your library",
      gallery: "You can see all the saved designs conveniently from here",
    },
  },
  it: {
    gallery: {
      title: "Galleria",
    },
    tutorial: {
      redoundo:
        "Clicca questi bottoni per andare INDIETRO e AVANTI tra le tue azioni. Attenzione se vai indietro e modifichi il disegno perderai tutte le modifiche successive",
      draw: "Clicca questo bottone per attivare il PENNELLO. Tenendolo premuto potrai cambiare la grandezza e il colore",
      erase:
        "Clicca questo bottone per attivare la GOMMA. Tenendolo premuto potrai cambiare la grandezza",
      background:
        "Clicca questo bottone se vuoi mette un foto come sfondo. Potrai scegliere se fare una foto o prenderla dalla tua libreria",
      save: "Quando hai finito il disegno puoi salvarlo nella tua libreria",
      gallery: "Puoi vedere tutti i disegni salvati comodamente da qui",
    },
  },
});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default i18n;
