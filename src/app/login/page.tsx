"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


import { Form, Input, Button, Typography } from 'antd';
import Loading from "../loading";
import Link from "next/link";

const { Title } = Typography;
const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { status } = useSession();

  const router = useRouter()
  if (status === "loading") {
    return (
      <Loading />
    )
  }
  else if (status === "authenticated") {
   router.push("/")
    return null
  }

  const handleSubmit = async (values: { email: string; password: string }) => {
    // Reset error
    setError(null);
    const { email, password } = values;
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setLoading(true)
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (res?.error) {
        setError('Wrong Credentails');
        setLoading(false)
      }
      if (res?.ok) {
        return router.push('/')
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Form
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-80"
        onFinish={handleSubmit}
      >
        <Title level={2} className="text-center mb-4 text-gray-800 dark:text-gray-100">Login</Title>
        {error && <p className="text-red-500 text-md m-2">{error} !</p>}
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            placeholder="Email"
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-600 rounded"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder="Password"
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-600 rounded"
          />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Login
          </Button>
          <Link
          href='/register'
          >
          Don{"'"}t have an account Click Here !
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;