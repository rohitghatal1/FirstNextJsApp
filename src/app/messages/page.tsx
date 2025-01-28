"use client";
import Search from "antd/es/transfer/search";
import ImagePlaceHolder from "../../../../public/images/Placeholder-Image.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Form, Input } from "antd";
import axios from "axios";
import { showErrorMessage } from "@/utils/NotificationShow";

const Messages: React.FC = () => {
  const [sendMessageForm] = Form.useForm();
  const params = useParams();
  const id = params?.id;
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [allChats, setAllChats] = useState<any>([]);
  const [selectedPerson, setSelectedPerson] = useState<any>();
  const [chatroomId, setChatRoomId] = useState<any>("");

  console.log("fetched id in message page: ", id);

  const getAllChats = async () => {
    try {
      const response = await axios.get("/chatrooms/getMyChatrooms");
      setAllChats(response?.data?.chatRooms);
      console.log("all chatroms", response?.data?.chatRooms);
    } catch (err: any) {
      console.log("Error fetching all chats: ", err);
    }
  };

  useEffect(() => {
    getAllChats();
  }, []);

  const getChatMessages = async (chatId: string) => {
    try {
      const response = await axios.get(`/chatrooms/${chatId}/messages`);
      setSelectedChat(response?.data?.messages);
    } catch (err: any) {
      console.log("Error fetching chats: ", err);
    }
  };

  const sendChatMessage = async (value: any) => {
    const updatedValues = {
      ...value,
      chatroom_id: chatroomId,
    };
    try {
      await axios.post("/chatrooms/message", updatedValues);
      sendMessageForm.resetFields();
    } catch (err: any) {
      showErrorMessage(err?.response?.data?.message);
    }
  };
  return (
    <div className="h-screen pt-16 w-full bg-gradient-to-r from-blue-50 to-white flex">
      <div className="h-full w-96 pt-3 border-r border-gray-300 bg-white shadow-md">
        <h2 className="font-semibold text-2xl py-2 px-4">Chats</h2>
        <div className="px-4 mb-4">
          <Search placeholder="Search or Start a new Chat" />
        </div>
        <div className="overflow-y-auto h-[calc(100%-110px)]">
          {allChats?.length > 0 ? (
            allChats?.map((chat: any) => (
              <div
                key={chat._id}
                className="flex items-center gap-4 p-3 hover:bg-gray-100 transition cursor-pointer border-b border-gray-200"
                onClick={() => {
                  getChatMessages(chat?._id);
                  setChatRoomId(chat?._id);
                  setSelectedPerson(chat?.professional_id);
                }}
              >
                <Image
                  src={chat?.img || ImagePlaceHolder}
                  alt="chatAvatar"
                  className="rounded-full h-12 w-12"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm text-gray-800">
                      {chat?.professional_id?.name}
                    </h3>
                    {/* <span className="text-xs text-gray-500">
                    {chat.timeStamp}
                  </span> */}
                  </div>
                  {/* <p className="text-sm text-gray-600 truncate">
                  {chat.lastMessage}
                </p> */}
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              No chats yet!!!
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 bg-gray-50">
        {selectedChat ? (
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-4 p-4 bg-white shadow relative">
              <Image
                src={selectedPerson?.img || ImagePlaceHolder}
                alt="chatAvatar"
                className="rounded-full h-10 w-10"
              />
              <h3 className="font-semibold text-lg">{selectedPerson?.name}</h3>
              <span
                onClick={() => setSelectedChat(null)}
                className="text-2xl font-semibold text-red-600 absolute top-4 right-4 cursor-pointer"
              >
                &times;
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedChat?.map((message: any, index: number) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender_type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.sender_type === "user"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    } max-w-xs px-4 py-2 rounded-lg shadow`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-gray-500 text-right">
                      {/* {message.time} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white shadow">
              <Form
                layout="vertical"
                form={sendMessageForm}
                onFinish={sendChatMessage}
              >
                <div className="flex items-start gap-2 w-full">
                  <Form.Item name="text" className="w-[92%]">
                    <Input
                      type="text"
                      placeholder="Type a message"
                      className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
                    />
                  </Form.Item>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[8%]"
                    onClick={() => sendMessageForm.submit()}
                  >
                    Send
                  </button>
                </div>
              </Form>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 text-xl">
              Select a chat to view messages
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
