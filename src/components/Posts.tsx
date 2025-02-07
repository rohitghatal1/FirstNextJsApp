"use client";
import Image from "next/image";
import Avatar from "../../../../public/images/homeImage2.jpeg";
import { FaPlus, FaThumbsUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Button, Form, Input, message, Modal, Select, Upload } from "antd";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios";
import { Span } from "next/dist/trace";
import { RiSendPlaneFill } from "react-icons/ri";
const { Option } = Select;

const Posts: React.FC = () => {
  const [postUploadForm] = Form.useForm();
  const [loggedInUser, setLoggedInUser] = useState<any>();
  const [userPosts, setUserPosts] = useState<any>([]);
  const [isCreateNewPostModalOpen, setIsCreateNewPostModalOpen] =
    useState<boolean>(false);
  const [fileList, setFileList] = useState<any>([]);
  const [postUrls, setPostUrls] = useState<any>([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
  const [isCommentSectionOpen, setIsCommentSectionOpen] =
    useState<boolean>(false);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("/posts");
      const allPosts = response?.data?.data;

      const filteredLoggedInUserPost = allPosts
        .filter
        // (post: any) => loggedInUserId === post?.professional_id?._id
        ();
      setUserPosts(filteredLoggedInUserPost);
      setLoggedInUser(filteredLoggedInUserPost[0]?.professional_id?.name);
      console.log("logged in user posts", filteredLoggedInUserPost);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleLikePost = async (postId: string) => {
    try {
      await axios.patch("/posts/like", {
        post_id: postId,
      });

      setLikedPosts((prev) => ({
        ...prev,
        [postId]: true,
      }));
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleUnlikePost = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: false,
    }));
  };

  const handleCommentPost = () => {
    setIsCommentSectionOpen(false);
  };

  const handlePostUpload = async (type: any, value: any) => {
    try {
      const response: any = await axios.get(
        `/misc/getPresignedUrl?fileType=${type}`
      );

      await axios.put(response?.data?.url, value, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPostUrls([...postUrls, response?.data?.file_url]);
    } catch (e: any) {
      // showErrorMessage(e?.response?.data?.message);
      console.log(e);
    }
  };

  const submitAddPost = async (values: any) => {
    const updatedValues = {
      ...values,
      post_urls: postUrls?.map(
        (post: any) => `https://bizforce360.s3.ap-south-1.amazonaws.com/${post}`
      ),
    };

    try {
      await axios.post("/posts", updatedValues);
      message.success("Post added successfylly!!!");
      setIsCreateNewPostModalOpen(false);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="w-100% sm:w-[90%] mx-0 sm:mx-auto p-1 sm:p-4">
      <div className="flex items-center justify-between px-2 w-full border rounded-md sm:p-1 p-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image src={Avatar} alt="avatar" className="object-cover" />
          </div>
          <h2>{loggedInUser}</h2>
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

        <div className="mt-3 flex flex-col items-center gap-4">
          {userPosts?.length > 0 ? (
            userPosts?.map((post: any, index: number) => (
              <div
                className="w-[40rem] rounded-lg border bg-white shadow-lg p-5 space-y-4"
                key={index}
              >
                {/* Post Header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src={Avatar} alt="avatar" className="object-cover" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {post?.professional_id?.name}
                    </h2>
                    <span className="text-sm text-gray-500">5 hrs ago</span>
                  </div>
                </div>

                <p className="text-gray-800 text-sm whitespace-pre-wrap">
                  {post?.description}{" "}
                  <span className="text-blue-500 cursor-pointer">
                    {post?.tags.length > 0 &&
                      post?.tags.map((tag: any, index: number) => "#" + tag)}
                  </span>
                </p>

                <div className="w-full flex flex-col gap-2">
                  {post?.post_urls?.length > 0 &&
                    post?.post_urls?.map((postUrl: any, index: number) => {
                      const extension = postUrl.split(".").pop()?.toLowerCase();
                      return ["png", "jpg", "jpeg"].includes(extension!) ? (
                        <Image
                          key={index}
                          src={postUrl}
                          alt="post"
                          width={500}
                          height={500}
                          className="rounded-md object-cover w-full h-64"
                        />
                      ) : (
                        <video
                          key={index}
                          controls
                          className="w-full max-h-[35rem] rounded-md"
                        >
                          <source src={postUrl} type={`video/${extension}`} />
                        </video>
                      );
                    })}
                </div>

                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-around text-gray-600 py-2">
                    {likedPosts[post?._id] ? (
                      <button
                        className="flex items-center gap-2 text-blue-500"
                        onClick={() => handleUnlikePost(post?._id)}
                      >
                        <FaThumbsUp className="text-lg" />
                        <span>Liked</span>
                        {post?.likes > 0 && <span>({post?.likes + 1})</span>}
                      </button>
                    ) : (
                      <button
                        className="flex items-center gap-2 hover:text-blue-500"
                        onClick={() => handleLikePost(post?._id)}
                      >
                        <FaThumbsUp className="text-lg" />
                        <span>Like</span>
                        {post?.likes > 0 && <span>({post?.likes})</span>}
                      </button>
                    )}
                    <button
                      className="flex items-center gap-2 hover:text-blue-500"
                      onClick={() => setIsCommentSectionOpen(true)}
                    >
                      <FaCommentAlt className="text-lg" />
                      <span>Comment</span>
                    </button>
                  </div>
                </div>

                {isCommentSectionOpen && (
                  <div className="flex items-center gap-4">
                    <Input size="large" className="w-[90%]" />
                    <span className="w-[10%]" onClick={handleCommentPost}>
                      <RiSendPlaneFill size={24} className="cursor-pointer" />
                    </span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <h2 className="text-lg text-gray-500 text-center">
              No Posts Available!!!
            </h2>
          )}
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
          <Button
            key="submit"
            type="primary"
            onClick={() => postUploadForm.submit()}
          >
            Post
          </Button>,
        ]}
      >
        <div className="mb-4">
          <Form
            layout="vertical"
            form={postUploadForm}
            onFinish={submitAddPost}
          >
            <Form.Item name="title" label="Title">
              <Input size="large" placeholder="Post title" />
            </Form.Item>

            <Form.Item name="description">
              <Input.TextArea
                value=""
                placeholder="What's on your mind?"
                rows={2}
              />
            </Form.Item>
            <Form.Item name="tags" label="Tags">
              <Select mode="multiple" size="large">
                <Option value="design">Design</Option>
                <Option value="construction">Construction</Option>
                <Option value="building">Building</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className="w-full border flex justify-center items-center">
          <Upload
            multiple
            fileList={[]}
            name="file"
            maxCount={1}
            accept="/*"
            data={(file) => {
              const extension = file.name.split(".").pop();

              handlePostUpload(extension, file);
              return {};
            }}
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
