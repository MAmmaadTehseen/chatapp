"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

export default function Register() {
    const ref = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string>();
   
const router=useRouter()
    // const handleSubmit = async (formData: FormData) => {
    //
    // };
    const handleSubmit =async (values: { name: string; email: string; password: string }) => {
        setError('');
        const { name, email, password } = values;
        if (!name || !email || !password) {
          setError('Please fill in all fields');
        
        } else {
            const r = await register({
                        email:email,
                        password: password,
                        name: name
                    });
                    // ref.current?.reset();
                    if (r?.error) {
                        setError(r.error);
                        return;
                    } else {
                        return router.push("/login");
                    }
        }
      };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          <Form
            className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-80"
            onFinish={handleSubmit}
          >
            <Title level={2} className="text-center mb-4 text-gray-800 dark:text-gray-200">Sign Up</Title>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                placeholder="Name"
                className="border border-gray-300 dark:border-gray-600 rounded"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input
                placeholder="Email"
                className="border border-gray-300 dark:border-gray-600 rounded"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                placeholder="Password"
                className="border border-gray-300 dark:border-gray-600 rounded"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
}


