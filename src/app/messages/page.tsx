"use client";
import Search from "antd/es/transfer/search";
import ImagePlaceHolder from "../../../public/images/Placeholder-Image.jpg";

import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<any>([]);
  const [loggedInUser, setLoggedInUser] = useState<any>();
  const [allChats, setAllChats] = useState<any>([]);

  const getConfigData = async () => {
    try {
      const response = await axiosInstance.get("/users/getConfig");
      setLoggedInUser(response?.data?.userData);
      console.log("user data:", response?.data?.userData);
    } catch (err: any) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    getConfigData();
  }, []);

  const getAllChats = async () => {
    console.log("logged in user:", loggedInUser);
    console.log("user id", loggedInUser?._id);
    try {
      const response = await axiosInstance.get(
        `/chats/user/${loggedInUser?._id}`
      );
      setAllChats(response?.data?.chats);
      console.log(response?.data?.chats);
    } catch (err: any) {
      console.log("Error fetching all chats: ", err);
    }
  };

  useEffect(() => {
    getAllChats();
  }, [loggedInUser?._id]);

  const getChatMessages = async (chatId: string) => {
    try {
      const response = await axiosInstance.get(`chats/${chatId}/messages`);
      setSelectedChat(response?.data?.messages);
    } catch (err: any) {
      console.log("Error fetching chats: ", err);
    }
  };
  //   {
  //     id: 1,
  //     img: Photo,
  //     name: "Aadarsh Chauhan",
  //     timeStamp: moment().subtract(1, "days").format("MMM D, h:mm A"),
  //     lastMessage: "Hey, how are you?",
  //     messages: [
  //       { text: "Hey, how are you?", sender: false, time: "2:30 PM" },
  //       {
  //         text: "I'm good, thanks! How about you?",
  //         sender: true,
  //         time: "2:31 PM",
  //       },
  //       { text: "Doing well!", sender: false, time: "2:32 PM" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: Photo,
  //     name: "Arya Pradhan",
  //     timeStamp: moment().format("MMM D, h:mm A"),
  //     lastMessage: "Let's catch up later!",
  //     messages: [
  //       { text: "Let's catch up later!", sender: false, time: "3:00 PM" },
  //     ],
  //   },
  // ];

  const handleChatSelect = (chat: any) => {
    setSelectedChat(chat);
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
                onClick={() => getChatMessages(chat?._id)}
              >
                <Image
                  src={chat?.img || ImagePlaceHolder}
                  alt="chatAvatar"
                  className="rounded-full h-12 w-12"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm text-gray-800">
                      {chat?.professional?.name}
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
            <div className="flex items-center gap-4 p-4 bg-white shadow">
              <Image
                src={selectedChat.img}
                alt="chatAvatar"
                className="rounded-full h-10 w-10"
              />
              <h3 className="font-semibold text-lg">{selectedChat.name}</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedChat?.messages?.map((message: any, index: number) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.sender
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    } max-w-xs px-4 py-2 rounded-lg shadow`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-gray-500 text-right">
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white shadow flex items-center gap-4">
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Send
              </button>
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
