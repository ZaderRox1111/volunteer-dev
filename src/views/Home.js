import { AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listRequests } from '../graphql/queries.js';

import Post from '../components/Post.js';

function Home() {
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
    <div>
      <h1>Home</h1>
      <AmplifySignOut />
      <div>
        {requests.map(request => {
          return <Post
            title={request.title}
          />
        })}
      </div>
    </div>
  )
}

export default Home;
