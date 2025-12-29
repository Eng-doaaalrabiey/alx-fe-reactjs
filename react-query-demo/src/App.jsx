// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// إنشاء QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          React Query Demo
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
