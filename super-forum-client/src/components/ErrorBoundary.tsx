import React from "react";
import "./ErrorBoundary.css";

// type for error boundary props (to pass info)
interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

// type for error boundary local state
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: object;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: "" },
    };
  }

  // static method to tell ui component to display error is has error is true
  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true };
  };

  // if the component realizes an error, set  has error to true with set state hook
  componentDidCatch(error: Error | null, info: object) {
    console.log("error", error);
    this.setState({ hasError: true, error, info });
  }

  // render method that if internal state is true
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2 style={{ padding: "2em" }}>
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
