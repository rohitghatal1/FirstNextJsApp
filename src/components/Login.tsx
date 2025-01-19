import { Button, Form, Input } from "antd";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-80 p-3">
        <div className="py-2">
          <h2 className="text-center text-lg font-semibold">BEEN</h2>

          <div className="w-full mt-3 px-2">
            <Form layout="vertical">
              <Form.Item label="Mobile Number">
                <Input type="number" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large"></Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
