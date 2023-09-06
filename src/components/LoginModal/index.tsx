import Button from "../styled/Button";
import Input from "../styled/Input";

const LoginModal = () => {
  return (
    <dialog id="my_modal_1" className="modal w-[450px] h-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md p-6">
      <div className="modal-box w-full flex flex-col gap-2">
        <h3 className="font-bold font-lexend text-lg">Sign In</h3>
        <div className="modal-action">
          <form method="dialog" className="flex flex-col gap-4 w-full">
            <Input label={"Username"} onChange={() => ({})}/>
            <Input label={"Password"} type={"password"} onChange={() => ({})}/>
            <Button style={'primary'}> Submit </Button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default LoginModal;