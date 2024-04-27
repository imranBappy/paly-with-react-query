"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};
const page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime: 1000 * 30, // 30 seconds
  });

  if (isLoading) {
    return <div className=" text-4xl text-center py-5">Loading...</div>;
  }

  return (
    <div className="p-5">
      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/todos">Todos</Link>
      </div>
      <h1 className="text-4xl font-bold  text-center py-5">Todos</h1>

      <div>
        {data?.map((todo) => (
          <div key={todo.id} className="border p-2 my-2">
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
