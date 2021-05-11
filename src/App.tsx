import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonReactRouter, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import Currency from './pages/Currency';
import India from './pages/India'
import { cog, film, home,logoBitcoin,logoBuffer,logoDribbble} from 'ionicons/icons';

import 'flag-icon-css/css/flag-icon.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
import Sports from './pages/Sports';
import Tech from './pages/Tech';
import Entertain from './pages/Entertain';

const appPages: AppPage[] = [
  {
    title: 'USA News',
    url: '/home',
    icon: logoBuffer
  },
  {
    title:'India News',
    url:'india',
    icon:null
  } ,
  {
    title:'BitCoin News',
    url:'/currency',
    icon:logoBitcoin
  },
  {
    title:'Sports',
    url:'sports',
    icon:logoDribbble
  },
  {
    title:'Technology News',
    url:'/tech',
    icon:cog
  },
  {
    title:'Entertainment',
    url:'/entertainment',
    icon:film
  }
]
const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonPage id="main">
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true} />
            <Route path="/:tab(currency)" component={Currency} exact={true} />
            <Route path="/:tab(india)" component={India} exact={true} />
            <Route path="/:tab(sports)" component={Sports} exact={true} />
            <Route path="/:tab(tech)" component={Tech} exact={true}/>
            <Route path="/:tab(entertainment)" component={Entertain} exact={true}/>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
