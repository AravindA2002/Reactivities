import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response)
      setActivities(response.data);
    })
  }, [])

  return (
    <div>      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
      <Header as='h2' icon='users' content='Reactivities'/>
         
        <List>
        {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}  
        </List>
              
              
      
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' data: fonts.gstatic.com;"></meta>
    </div>
  );
}

export default App;
