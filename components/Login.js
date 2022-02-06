import FbLogo from "../assets/5168781.png";
import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <div className="grid place-items-center">
      <Image src={FbLogo} width={400} height={400} objectFit="contain" />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 text-white text-center rounded mt-20 cursor-pointer"
      >
        Loogin with Facebook
      </h1>
    </div>
  );
}

export default Login;
