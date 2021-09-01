import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export const UserService = (userId: string) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const fetchUser = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const newUser: any = res.json();
    setUser(newUser);
  };
  useEffect(() => {
    fetchUser();
  }, [userId]);
  return (
    <div>
      <Alert variant="primary">
        {user.name} and {user.email}
      </Alert>
    </div>
  );
};
