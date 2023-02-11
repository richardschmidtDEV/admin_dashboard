import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { yariga } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {(
          <img  src={yariga}  style={{marginTop:"20px"}}  alt="Refine" width="80px" />
        )}
      </Link>
    </Button>
  );
};
