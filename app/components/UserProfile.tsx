"use client";
import React, { useEffect, useState } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';



const UserProfile = () => {

    const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Gọi API từ phía khách hàng
        const response = await fetch('http://localhost:7000/user');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
    console.log(userData);
  }, []);
  return (
    <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description="@tonyreichert"
            name="Tony Reichert"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@tonyreichert</p>
          </DropdownItem>
        
          <DropdownItem key="logout" color="danger">
           <LogoutLink>Log Out</LogoutLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
  )
}

export default UserProfile