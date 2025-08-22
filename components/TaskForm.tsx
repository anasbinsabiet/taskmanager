"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Plus } from "lucide-react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const createTask = useMutation(api.tasks.createTask);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      await createTask({
        title: title.trim(),
        description: description.trim() || undefined,
      });
      
      setTitle("");
      setDescription("");
    } catch (err: any) {
      console.error("Error creating task:", err);
      setError(err.message || "Failed to create task");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <Plus className="w-5 h-5 mr-2" />
        Add New Task
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Task Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
            className="input"
            required
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description (optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            rows={3}
            className="input resize-none"
            disabled={isLoading}
          />
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading || !title.trim()}
          className="btn btn-primary w-full sm:w-auto"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Adding...
            </div>
          ) : (
            "Add Task"
          )}
        </button>
      </form>
    </div>
  );
}