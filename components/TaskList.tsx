"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Trash2, Check, X, Clock } from "lucide-react";

export default function TaskList() {
  const tasks = useQuery(api.tasks.getTasks);
  const deleteTask = useMutation(api.tasks.deleteTask);
  const toggleTask = useMutation(api.tasks.toggleTask);
  
  const [deletingId, setDeletingId] = useState<Id<"tasks"> | null>(null);
  const [togglingId, setTogglingId] = useState<Id<"tasks"> | null>(null);

  const handleDelete = async (taskId: Id<"tasks">) => {
    if (deletingId) return;
    
    setDeletingId(taskId);
    try {
      await deleteTask({ id: taskId });
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggle = async (taskId: Id<"tasks">) => {
    if (togglingId) return;
    
    setTogglingId(taskId);
    try {
      await toggleTask({ id: taskId });
    } catch (error) {
      console.error("Error toggling task:", error);
    } finally {
      setTogglingId(null);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (tasks === undefined) {
    return (
      <div className="card">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="card text-center py-12">
        <div className="text-gray-400 mb-4">
          <Clock className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
        <p className="text-gray-600">Create your first task to get started!</p>
      </div>
    );
  }

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-6">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-orange-500" />
            Pending Tasks ({pendingTasks.length})
          </h2>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div
                key={task._id}
                className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleToggle(task._id)}
                      disabled={togglingId === task._id}
                      className="flex-shrink-0 w-5 h-5 border-2 border-gray-300 rounded hover:border-green-500 transition-colors"
                      title="Mark as complete"
                    >
                      {togglingId === task._id && (
                        <div className="w-full h-full animate-spin rounded-full border-b-2 border-green-500"></div>
                      )}
                    </button>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                      {task.description && (
                        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-2">
                        Created: {formatDate(task.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(task._id)}
                  disabled={deletingId === task._id}
                  className="flex-shrink-0 ml-4 p-2 text-gray-400 hover:text-red-600 transition-colors"
                  title="Delete task"
                >
                  {deletingId === task._id ? (
                    <div className="w-4 h-4 animate-spin rounded-full border-b-2 border-red-600"></div>
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-500" />
            Completed Tasks ({completedTasks.length})
          </h2>
          <div className="space-y-3">
            {completedTasks.map((task) => (
              <div
                key={task._id}
                className="flex items-start justify-between p-4 border border-gray-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleToggle(task._id)}
                      disabled={togglingId === task._id}
                      className="flex-shrink-0 w-5 h-5 bg-green-500 border-2 border-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors"
                      title="Mark as pending"
                    >
                      {togglingId === task._id ? (
                        <div className="w-3 h-3 animate-spin rounded-full border-b-2 border-white"></div>
                      ) : (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-through">{task.title}</h3>
                      {task.description && (
                        <p className="text-sm text-gray-600 mt-1 line-through">{task.description}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-2">
                        Completed: {formatDate(task.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(task._id)}
                  disabled={deletingId === task._id}
                  className="flex-shrink-0 ml-4 p-2 text-gray-400 hover:text-red-600 transition-colors"
                  title="Delete task"
                >
                  {deletingId === task._id ? (
                    <div className="w-4 h-4 animate-spin rounded-full border-b-2 border-red-600"></div>
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}