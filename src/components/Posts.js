import '../css/Posts.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listRequests } from '../graphql/queries.js';
import Masonry from 'react-masonry-css';

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
    1536: 3,
    1200: 2,
    600: 1
  }
  
  const getRandomColor = colorsArr => {
    let color = [];

    for (let index = 0; index < requests.length; index++) {
      color[index] = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    }

    return color;
  }

  const colors = [
    "#ef5350",
    "#e91e63",
    "#ab47bc",
    "#7e57c2",
    "#1e88e5",
    "#4fc3f7",
    "#26c6da",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#ffb300",
    "#ff9800",
    "#ff7043",
  ]

  const color = getRandomColor(colors);

  return (
    <div className='allposts'>
      <div className='container'>
        <div id='header'>Search for posts here!</div>
        <main id='main'>
          <Masonry
            breakpointCols={breakpoints}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {requests.map((request, index) => {
              return <Post
                id={request.id}
                title={request.title}
                tags={request.tags}
                description={request.description}
                color={color[index]}
                key={request.id}
              />
            })}

            <Post title="Request" description='Description' tags={[]} color={colors[0]} id='' />
            <Post title="Really Long Title Cuz Why Not" description='Description' tags={['tag', 'tag 2']} color={colors[4]} id='' />
            <Post title="Request" description='Description' tags={[]} color={colors[6]} id='' />
            <Post title="Request" description='Description' tags={['React', 'Node', 'Humply Dumply', 'Long Tags Woooo']} color={colors[7]} id='' />
          </Masonry>
        </main>
        <div id='sidebar'>Sidebar</div>
      </div>
    </div>
  )
}

export default Posts;
