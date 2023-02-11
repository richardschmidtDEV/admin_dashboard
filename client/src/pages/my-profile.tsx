import { useGetIdentity, useOne } from "@pankod/refine-core"

import { Profile } from 'components';

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: user?.userid,
  })

  const myProfile = data?.data ?? [];

  if(isLoading) return <div>loading...</div>
  if(isError) return <div>error...</div>

  return (
    <div style={{
   padding: '10px',
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      opacity: 0.8,
      boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
      borderRadius: "15px",
      
    }}>
    <Profile 
      type=""
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
    </div>
  )
}

export default MyProfile