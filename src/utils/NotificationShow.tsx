import { message, Modal } from "antd";
import { MdError } from "react-icons/md";

const notificationShow = ({
  type,
  content,
}: {
  type: "success" | "error";
  content: string;
}) => {
  message[type as keyof Omit<typeof message, "destroy">]({
    content: content,
  });
};

export const showErrorMessage = (message: string) => {
  if (message.includes("Authorization")) {
    localStorage.removeItem("accessToken");
    return;
  }
  Modal.confirm({
    zIndex: 100,
    maskClosable: true,
    closable: true,
    centered: true,
    title: <p className="ml-1 text-sm">Failed</p>,
    icon: <MdError className=" text-xl text-red-500" />,
    cancelButtonProps: { className: "hidden" },
    content: message,
    okText: "Dismiss",
    okButtonProps: { className: "bg-red-500  hover:!bg-red-500 " },
  });
};

export default notificationShow;
