// Import necessary hooks from Next.js and React
import { useParams } from "next/navigation";
import { useMemo } from "react";

// Custom hook for managing conversation state
const useConversation = () => {
  // Get parameters from the URL using the useParams hook
  const params = useParams();

  // Memoize the conversationId to avoid unnecessary recalculations
  const conversationId = useMemo(() => {
    // If there is no conversationId in the URL parameters, return an empty string
    if (!params?.conversationId) {
      return '';
    }

    // Otherwise, return the conversationId as a string
    return params.conversationId as string;
  }, [params?.conversationId]);

  // Determine whether a conversation is open based on the existence of conversationId
  const isOpen = useMemo(() => !!conversationId, [conversationId]);
  // Two exclamation marks (!!) are used to convert the value to a boolean.

  // Return a memoized object containing isOpen and conversationId
  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
};

// Export the custom hook for use in other components
export default useConversation;
