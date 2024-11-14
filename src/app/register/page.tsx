"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { Form, Input, Button, Typography, message, Space } from 'antd';

const { Title } = Typography;

export default function Register() {
  const ref = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>();

  const router = useRouter()
  const handleSubmit = async (values: { name: string; email: string; password: string; confirmPassword: string; phone: string; }) => {
    setError('');
    const regexMobile = /^(?:\+92|0)?3\d{2}[-\s]?\d{7}$/; // Pakistan mobile number regex
    const { name, email, password, confirmPassword, phone } = values;
    console.log(regexMobile.test(phone))
    console.log(phone)
    if (password.length < 4) {
      message.error('Password must be at least 4 characters long');
      return;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      message.error('Please enter a valid email address');
      return;
    }
    else if (!(regexMobile.test(phone))) {
      message.error('Please enter a valid phone number');
      return;
    }
    else if (password != confirmPassword) {
      message.error('Passwords do not match with confirm password');
      return;

    }
    else {
      const r = await register({
        email: email,
        password: password,
        name: name,
        phone: phone,
        // other fields if required...
      });
      // ref.current?.reset();
      if (r?.error) {
        message.error(r.error);
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
          name="phone"
          rules={[{ required: true, message: 'Please input your Mobile No!' }]}
        >

          <Input placeholder="+923000000000" className="border border-gray-300 dark:border-gray-600 rounded" />

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
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input your password again!' }]}
        >
          <Input.Password
            placeholder="Confirm Password"
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


