import { Spin } from "antd";
export default function Loading() {
    console.log('ammad')
    return (
        <div className="flex h-screen justify-center items-center text-white">
            {/* loading...5 */}
<Spin size="large" />

        </div>
    );
}