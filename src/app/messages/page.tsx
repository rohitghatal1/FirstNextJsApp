"use client";
import Search from "antd/es/transfer/search";
import ImagePlaceHolder from "../../../../public/images/Placeholder-Image.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Form, Input } from "antd";
import moment from "moment";
import axios from "axios";
import { showErrorMessage } from "@/utils/NotificationShow";

const Messages: React.FC = () => {
  const [sendMessageForm] = Form.useForm();
  const params = useParams();
  const router = useRouter();
  const professionalId = params?.id?.[0]; // Get professional ID from URL
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [allChats, setAllChats] = useState<any[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<any>();
  const [chatroomId, setChatRoomId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState<any>();
  const messageEndRef = useRef<any>(null);

  const getConfigData = async () => {
    try {
      const response = await axios.get("/users/getConfig");
      setLoggedInUser(response?.data?.userData);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConfigData();
  }, []);

  const initializeChats = async () => {
    try {
      // Fetch existing chats
      const chatResponse = await axios.get("/chatrooms/getMyChatrooms");
      const chats = chatResponse.data.chatRooms;
      setAllChats(chats);

      // If professional ID exists in URL
      if (professionalId) {
        const existingChat = chats.find(
          (chat: any) => chat.professional_id._id === professionalId
        );

        if (existingChat) {
          handleChatSelect(existingChat);
        } else {
          // Create new chatroom if doesn't exist
          const newChatResponse = await axios.post("/chatrooms/start", {
            professional_id: professionalId,
          });
          const newChat = newChatResponse.data.chatRoom;
          setAllChats((prev) => [...prev, newChat]);
          handleChatSelect(newChat);
        }
      }
    } catch (err) {
      showErrorMessage("Error loading chats");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    initializeChats();
  }, [professionalId]);

  const handleChatSelect = (chat: any) => {
    setSelectedPerson(
      selectedChat?.message?.sender_type === loggedInUser?.user_type
        ? chat.professional_id
        : chat.user_id
    );
    setChatRoomId(chat._id);
    getChatMessages(chat._id);
    router.push(`/messages/${chat.professional_id._id}`);
  };

  const getChatMessages = async (chatId: string) => {
    try {
      const response = await axios.get(`/chatrooms/${chatId}/messages`);
      setSelectedChat(response.data.messages);
    } catch (err) {
      showErrorMessage("Error loading messages");
    }
  };

  useEffect(() => {
    if (!chatroomId) return;

    const interval = setInterval(() => {
      getChatMessages(chatroomId);
    }, 3000);

    return () => clearInterval(interval);
  }, [chatroomId]);

  const sendChatMessage = async (values: any) => {
    try {
      await axios.post("/chatrooms/message", {
        ...values,
        chatroom_id: chatroomId,
      });
      sendMessageForm.resetFields();
      getChatMessages(chatroomId);
    } catch (err: any) {
      showErrorMessage(err.response?.data?.message || "Message send failed");
    }
  };

  if (loading) return <div>Loading chats...</div>;

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-white">
      <div className="h-screen w-full pt-20 flex">
        {/* Chat List Sidebar */}
        <div
          className={`h-full w-full sm:w-96 pt-3 border-r-0 sm:border-r border-gray-300 bg-white shadow-md ${
            selectedChat ? "hidden sm:block" : "block"
          }`}
        >
          <h2 className="font-semibold text-2xl py-2 px-4">Chats</h2>
          <div className="px-4 mb-4">
            <Search placeholder="Search chats" />
          </div>
          <div className="overflow-y-auto h-[calc(100%-110px)]">
            {allChats.map((chat) => (
              <div
                key={chat._id}
                onClick={() => handleChatSelect(chat)}
                className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b"
              >
                <Image
                  src={
                    loggedInUser?.user_type === "user"
                      ? chat.professional_id?.img || ImagePlaceHolder
                      : chat.user_id?.img || ImagePlaceHolder
                  }
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">
                    {loggedInUser?.user_type === "user"
                      ? chat?.professional_id?.name
                      : chat?.user_id?.name}
                  </h3>
                  {/* <p className="text-sm text-gray-500">
                    {chat.lastMessage?.text || "No messages yet"}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div
          className={`flex-1 bg-gray-50 ${
            !selectedChat ? "hidden sm:block" : "block"
          }`}
        >
          {selectedChat ? (
            <div className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="relative p-4 bg-white shadow flex items-center">
                <Image
                  src={selectedPerson?.img || ImagePlaceHolder}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="ml-4 font-semibold text-lg">
                  {selectedPerson?.name}
                </h3>
                <span
                  className="text-red-500 text-2xl font-semibold absolute top-6 right-5 cursor-pointer"
                  onClick={() => {
                    setSelectedChat(null);
                    setChatRoomId("");
                  }}
                >
                  &times;
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedChat?.map((message: any) => (
                  <div
                    key={message._id}
                    className={`flex ${
                      message.sender_type === loggedInUser?.user_type
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message?.sender_type === loggedInUser?.user_type
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {moment(message?.createdAt).format("MMM DD, YYYY")} at{" "}
                        {moment(message?.createdAt).format("HH:MM")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <Form form={sendMessageForm} onFinish={sendChatMessage}>
                <div className="p-4 bg-white shadow flex gap-2">
                  <Form.Item name="text" className="flex-1 mb-0">
                    <Input.TextArea
                      rows={1}
                      placeholder="Type a message"
                      autoSize={{ minRows: 1, maxRows: 4 }}
                      size="large"
                    />
                  </Form.Item>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg h-10 self-center"
                  >
                    Send
                  </button>
                </div>
              </Form>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500 text-xl">
                {allChats.length === 0
                  ? "No chats available"
                  : "Select a chat to start messaging"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
