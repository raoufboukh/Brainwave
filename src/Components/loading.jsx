import { loading } from "../assets";

const Loading = ({className}) => {
    return (
        <div>
            <div className={`absolute lg:w-[450px] bg-n-8/80 top-[80%] left-1/2 -translate-x-1/2 rounded-3xl z-10 flex gap-4 p-3 w-[230px] ${className || ''}`}>
                <img src={loading} className="w-5" alt="" />
                <p className="text-white">AI is generating</p>
            </div>
        </div>
    )
}

export default Loading;