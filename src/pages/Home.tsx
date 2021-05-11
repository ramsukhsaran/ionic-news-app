import {
  IonImg,
  IonThumbnail,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonLoading,
  IonBadge,
  IonCardSubtitle,
  IonSpinner
} from '@ionic/react';

import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs'

import './Home.css';

const API_KEY = "e40d07f00b094602953cc3bf8537477e";
// Top business headlines in the US right now
// const URL=`http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
const URL=`http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
const fetchArticles = () => {

  return axios({
    url: URL,
    method: 'get',
  }).then(response => {

    console.log(response);
    return response.data;
  })
};

const HomePage: React.FunctionComponent = () => {

  const [articles, setArticles] = React.useState([]);
  const [showL,setShowL] = React.useState(true)
  const items: any[] = [];

  React.useEffect(() => {

    fetchArticles().then(data => setArticles(data.articles));
    setShowL(false)

  }, []);

  return (
    <>
        <IonLoading
        cssClass='my-custom-class'
        isOpen={showL}
        onDidDismiss={() => setShowL(false)}
        message={'Please wait...'}
        duration={5000}
      />
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>USA Top Headlines</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" >
      <IonList>
          {
            articles.map(a => {
              const date = dayjs(a['publishedAt'])
             
              return (
                <>
               
               <IonCard>
           
                  <IonImg src={a['urlToImage']} alt=" image error"   />
                  <IonCardHeader>
                  <IonCardSubtitle>
                     <IonLabel class="">  <IonBadge color="warning" slot="end">{date.format('D MMM YYYY')}</IonBadge></IonLabel>
                  </IonCardSubtitle>
                  </IonCardHeader>
                    {  
                          <div className="ion-padding ion-text-start"><span style={{fontWeight: 'bold'}}>{a['title']}</span></div> 
                      
                    }
                    <IonCardContent>
                      <p>{a['description']}</p>
                      <br />
                      <IonLabel>
                          <IonButton href={a['url']} target="_blank" color="success">Read More</IonButton>
                      </IonLabel>
                    </IonCardContent>
                </IonCard>
                </>
              
              );
            })
          }

        </IonList>
      </IonContent>
    </>
  );
};

export default HomePage;
