// src/components/Hello.tsx
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HELLO } from "../queries";

function Hello() {
  const { loading, error, data } = useQuery(GET_HELLO);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>{data.hello}</p>;
}

export default Hello;
