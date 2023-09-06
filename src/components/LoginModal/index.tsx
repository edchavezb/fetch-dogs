import { useState } from "react";
import { userLoginApi } from "../../core/api/login";
import Button from "../styled/Button";
import Input from "../styled/Input";
import { useAtom } from "jotai";
import { userAtom } from "../../core/store/userAtom";

const LoginModal = () => {
  const [storeUser, setStoreUser] = useAtom(userAtom);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      await userLoginApi(name, email);
      setStoreUser({
        isLoggedIn: true,
        name,
        email
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <dialog id="my_modal_1" className="modal w-[450px] h-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md p-6">
      <div className="modal-box w-full flex flex-col gap-2">
        <h3 className="font-bold font-lexend text-lg">Sign In</h3>
        <div className="modal-action">
          <form method="dialog" className="flex flex-col gap-4 w-full">
            <Input label={"Username"} onChange={(e) => setName(e.target.value)} value={name} />
            <Input label={"Email"} type={"email"} onChange={(e) => setEmail(e.target.value)} value={email}/>
            <Button style={'primary'} onClick={handleLogin} text={'Submit'} />
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default LoginModal;