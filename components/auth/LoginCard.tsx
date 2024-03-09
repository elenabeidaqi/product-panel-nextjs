import React from "react";
import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (values.password === "111213" && values.email === "user@gmail.com") {
      Cookies.set(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.T26Dm4buOBRdxNs58srk1l_N5y1Dxii9y-YMj-9J7mM"
      );
      router.push("/panel");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center items-center w-full ">
      <div className="backdrop-blur-md rounded-lg bg-white/30 w-1/2 p-5 flex flex-col items-center justify-center">
        <div className="text-center font-bold text-2xl text-zinc-600 mb-10">
          Login
        </div>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ email: "", password: "" }}
          autoComplete="off"
          className="xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <>
              <Input placeholder="Email Address" />
            </>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginCard;
