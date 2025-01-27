"use client";
import Image from "next/image";
import Avatar from "../../../../public/images/homeImage2.jpeg";
import { FaPlus, FaThumbsUp } from "react-icons/fa6";
import { useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Button, Input, Modal, Upload } from "antd";
import { CiCirclePlus } from "react-icons/ci";

const Posts = () => {
  const [userPosts, setUserPosts] = useState<any>([]);
  const [isCreateNewPostModalOpen, setIsCreateNewPostModalOpen] =
    useState<boolean>(false);
  const [fileList, setFileList] = useState([]);

  const handleAddPost = () => {};

  return (
    <div className="w-100% sm:w-[90%] mx-0 sm:mx-auto p-1 sm:p-4">
      <div className="flex items-center justify-between px-2 w-full border rounded-md sm:p-1 p-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image src={Avatar} alt="avatar" className="object-cover" />
          </div>
          <h2>Rohit Ghatal</h2>
        </div>
        <button
          className="bg-green-600 text-white px-5 py-2 rounded-md flex items-center gap-1"
          onClick={() => setIsCreateNewPostModalOpen(true)}
        >
          <FaPlus /> New Post
        </button>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold text-lg text-center text-gray-800">
          Posts:
        </h2>

        <div className="mt-3 flex justify-center">
          {/* {userPosts?.length > 0 ? (
          userPosts?.map((post: any, index: number) => ( */}
          <div className="w-[30rem] rounded-md border bg-white shadow-md p-4">
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image src={Avatar} alt="avatar" className="object-cover" />
              </div>
              <div>
                <h2 className="font-semibold">Rohit Ghatal</h2>
                <span className="text-sm text-gray-500">5 hrs ago</span>
              </div>
            </div>

            <p className="mb-3 text-gray-800">This is the post title</p>

            <div className="w-full h-auto mb-3">
              <Image src={Avatar} alt="post" className="rounded-md" />
            </div>

            <div className="border-t border-gray-300 pt-2">
              <div className="flex justify-around text-gray-600">
                <button className="flex items-center gap-1 hover:text-blue-500">
                  <FaThumbsUp />
                  <span>Like</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500">
                  <FaCommentAlt />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </div>
          {/* ))
        ) : (
          <h2 className="text-lg text-gray-500 text-center">
            No Posts Available!!!
          </h2>
        )} */}
        </div>
      </div>
      <Modal
        title="Create Post"
        open={isCreateNewPostModalOpen}
        onCancel={() => setIsCreateNewPostModalOpen(false)}
        footer={[
          <Button
            key="cancel"
            onClick={() => setIsCreateNewPostModalOpen(false)}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddPost}>
            Post
          </Button>,
        ]}
      >
        <div className="mb-4">
          <Input.TextArea
            value=""
            // onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="What's on your mind?"
            rows={2}
          />
        </div>
        <div className="w-full border flex justify-center items-center">
          <Upload
            fileList={fileList}
            // onChange={handleUploadChange}
            beforeUpload={() => false}
            listType="picture-card"
          >
            {fileList.length >= 5 ? null : (
              <div className="flex flex-col items-center gap-1">
                <CiCirclePlus />
                <div style={{ marginTop: 8 }}>Add Photos/Videos</div>
              </div>
            )}
          </Upload>
        </div>
      </Modal>
    </div>
  );
};

export default Posts;
