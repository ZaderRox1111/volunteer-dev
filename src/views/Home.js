import { AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listRequests } from '../graphql/queries.js';
import { makeStyles } from '@mui/styles';

import Post from '../components/Post.js';
import NavBar from '../components/NavBar.js';
import topPic from '../img/Main_Preview.jpeg';

const useStyles = makeStyles(theme => ({
  all: {
  },

  first: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#31302e',
  },

  toppic: {
    width: '100%',
    boxShadow: '#e91e63 0 0 10px 0px'
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
    textAlign: 'center',
    color: '#FAF9F6',
  },

  maintitle: {
    fontFamily: 'Courgette, cursive',
    fontSize: '100pt',
  },

  subtitle: {
    fontFamily: 'Courgette, cursive',
    fontSize: '24pt',
  },

  choice: {
    position: 'relative',
  },
}))

function Home() {
  const { all, first, toppic, title, maintitle, subtitle, choice } = useStyles();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const requestsData = await API.graphql(graphqlOperation(listRequests));
      const requestsList = requestsData.data.listRequests.items;

      console.log('Requests list:', requestsList);
      setRequests(requestsList);

    } catch (error) {
      console.error('Error fetching requests list. ', error);
    }
  }

  return (
    <body className={all}>
      <NavBar />

      <div className={first}>
        <img className={toppic} src={topPic} alt='Main'></img>
        <div className={title}>
          <h1 className={maintitle}>Volunteer Dev</h1>
          <h2 className={subtitle}>Choose to make a difference</h2>
        </div>
      </div>

      <div className={choice}>
        <h1>Home</h1>
        <AmplifySignOut />
      </div>

      <div>
        {requests.map(request => {
          return <Post
            title={request.title}
          />
        })}
      </div>
    </body>
  )
}

export default Home;
