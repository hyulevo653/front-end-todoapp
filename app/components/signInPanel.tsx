import { LoginLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from '@nextui-org/react';
import React from 'react'
import UserProfile from './UserProfile';

const signInPanel = async () => {
  const {isAuthenticated,getUser} = await getKindeServerSession();
  const user = getUser();
  if(await isAuthenticated()) return  <UserProfile/>;
return (
    <div className='flex gap-3'>
        <Button color="primary">
            <LoginLink>Sign In</LoginLink>
        </Button>
        <Button>
            <RegisterLink>Sign up</RegisterLink>
        </Button>
     
    </div>
  )
 
}

export default signInPanel