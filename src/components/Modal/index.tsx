

const Modal = () => {
  return (
    <dialog id="my_modal_1" className="modal w-[450px] h-auto top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md p-6">
      <div className="modal-box w-full flex flex-col gap-2">
        <h3 className="font-bold text-lg">Sign In</h3>
        <div className="modal-action">
          <form method="dialog" className="flex flex-col gap-4 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" className="input w-full bg-background" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" className="input w-full bg-background" />
            </div>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-primary text-white mt-2">Submit</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal;