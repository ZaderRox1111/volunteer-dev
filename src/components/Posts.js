import '../css/Posts.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listRequests } from '../graphql/queries.js';
import Masonry from '@mui/lab/Masonry';

import Post from '../components/Post.js';

function Posts() {
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

  const breakpoints = {
    default: 4,
    1100: 3,
    750: 2
  }

  return (
    <div className='allposts'>
      <div class='container'>
        <div id='header'>Search for posts here!</div>
        <main id='main'>
          <Masonry
            breakpointCols={breakpoints}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {requests.map(request => {
              return <Post
                title={request.title}
              />
            })}
          </Masonry>
        </main>
        <div id='sidebar'>Sidebar</div>
      </div>
    </div>
  )
}

export default Posts;
