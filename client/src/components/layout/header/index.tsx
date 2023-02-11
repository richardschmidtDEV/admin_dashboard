import React from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { AppBar, Avatar, Stack, Toolbar, Typography } from "@pankod/refine-mui";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);

  return (
    <AppBar
    style={{
      margin: "auto",
      textAlign: "center",
      backdropFilter: "blur(30px)",
      backgroundColor: "rgba(10, 10, 10, 0.5)",
      opacity: 0.9,
      boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.2",
      borderBottomRightRadius:"30px"
    
          
      
      
    }} color="default" position="sticky" elevation={0} sx={{ background: '#fcfcf'}}>
      <Toolbar>
        <Stack direction="row" width="100%" justifyContent="flex-end" alignItems="center" >
          {showUserInfo && (
            <Stack direction="row" gap="16px" alignItems="center">
              {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              {user.name && <Typography variant="subtitle2">{user?.name}</Typography>}
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
