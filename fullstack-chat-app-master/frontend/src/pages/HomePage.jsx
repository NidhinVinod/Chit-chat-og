import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Sidebar Section */}
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <Sidebar />
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full h-full max-w-4xl bg-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden">
          {!selectedUser ? (
            <div className="flex-1 flex items-center justify-center">
              <NoChatSelected />
            </div>
          ) : (
            <ChatContainer />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
