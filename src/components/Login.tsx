import { Button, Form, Input } from "antd";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const Login: React.FC = () => {
  const [loginForm] = Form.useForm();
  const [OTP, setOTP] = useState<any>();
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(true);
  const [isVerifyOtpModalOpen, setIsVerifyOtpModalOpen] =
    useState<boolean>(false);
  const hanldeFormSubmit = async (values: any) => {};

  const handleOtpChange = (value: any) => {
    setOTP(value);
  };

  const handleVerifyOtp = () => {};
  return (
    <div className="flex items-center justify-center">
      {isLoginFormOpen && (
        <div className="border p-2 sm:p-4 w-[98%] sm:w-[35rem]">
          <Form layout="vertical" form={loginForm} onFinish={hanldeFormSubmit}>
            {/* {!isRegistered && (
              <Form.Item label="User Name" name="username">
                <Input size="large" />
              </Form.Item>
            )} */}
            <h2 className="font-semibold text-lg text-center py-2 flex items-center gap-1">
              <FaRegUser /> User Login
            </h2>
            <Form.Item
              label="Mobile Number"
              name="mobile_number"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number!",
                },
                { len: 10, message: "Mobile number must be 10 digits!" },
              ]}
              className="mt-4"
            >
              <Input type="number" size="large" />
            </Form.Item>

            <Form.Item>
              <button
                className="bg-green-600 text-white border border-green-600 px-5 py-2 rounded-md"
                type="submit"
              >
                Get OTP
              </button>
            </Form.Item>
            {/* <Button
              type="link"
              className="mt-2"
              onClick={() => setIsRegistered(!isRegistered)}
            >
              {isRegistered
                ? "Not registered? Register here."
                : "Already registered? Login here."}
            </Button> */}
          </Form>
        </div>
      )}
      {isVerifyOtpModalOpen && (
        <div className="border p-3">
          <h2 className="text-lg font-semibold py-2">Verify OTP</h2>
          <OTPBox length={6} onChange={handleOtpChange} />
          <div className="mt-6 flex justify-end gap-2">
            <button
              className="bg-white text-green border px-5 py-2 rounded-md flex items-center gap-1"
              type="submit"
            >
              <FaLongArrowAltLeft />
              Back
            </button>

            <button
              className="bg-green-600 text-white border border-green-600 px-5 py-2 rounded-md"
              onClick={handleVerifyOtp}
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
