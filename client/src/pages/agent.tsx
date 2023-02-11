import { useList } from '@pankod/refine-core';
import { Box, Typography } from '@pankod/refine-mui';

import { AgentCard } from 'components';

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: 'users'});

  const allAgents  = data?.data ?? [];

  if(isLoading) return <div>loading...</div>
  if(isError) return <div>error...</div>

  return (
    <Box  style={{
      margin: "auto",
      textAlign: "center",
      backdropFilter: "blur(30px)",
      backgroundColor: "rgba(25, 255, 255, 0.2)",
      opacity: 0.9,
      boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
      border: "1px solid rgba(25, 255, 255, 1",
      borderRadius: "15px ",
          
      
      
    }} >
      <Typography fontSize={25} fontWeight={700} color="#11142d">Agents List</Typography>

      <Box
      style={{
        margin: "auto",
        textAlign: "center",
        backdropFilter: "blur(30px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        opacity: 0.9,
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
        border: "1px solid rgba(25, 255, 255, 1",
        borderRadius: "15px ",
            
        
        
      }}
        mt="20px"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          backgroundColor: '#fcfcfc'
          
        }}
      >
        {allAgents.map((agent) =>  (
          <AgentCard 
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Agents