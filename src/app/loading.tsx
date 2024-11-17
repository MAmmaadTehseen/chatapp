import { Spin } from "antd";
export default function Loading() {
    return (
        <div className="flex h-screen justify-center items-center text-white">
<Spin size="large" />

        </div>
    );
}