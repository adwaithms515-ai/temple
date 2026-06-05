import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./button";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-red-50/50 rounded-lg border border-red-100">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Something went wrong</h2>
          <p className="text-red-600 mb-6 max-w-md">
            {this.state.error?.message || "An unexpected error occurred while rendering this section."}
          </p>
          <Button 
            onClick={() => this.setState({ hasError: false })}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

