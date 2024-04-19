import { LoginLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from '@nextui-org/react';
import React from 'react'

const signInPanel = async () => {
  const {isAuthenticated,getUser} = await getKindeServerSession();
  const user = getUser();
  if(await isAuthenticated()) return <div>Duc Huy</div>;
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